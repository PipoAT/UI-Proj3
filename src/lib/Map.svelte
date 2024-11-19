<script>
  import { onMount } from "svelte";
  import mapStyles from './map-styles'; // Optional custom styles for the map

  export let markers = []; // Array of marker data passed as a prop
  export let zoom = 15;
  export let center = { lat: 39.132818154690355, lng: -84.51515178545588 };

  let container; // Reference to the map container
  let map; // Google Maps object
  let markerObjects = []; // Store references to marker instances

  let directionsRenderer;
  let busMarkers = [];

  // Initialize the map
  function initializeMap() {
    map = new google.maps.Map(container, {
      zoom,
      center,
      styles: mapStyles, // Optional custom styles
    });
    console.log("Map initialized.");

    // Add event listener to allow adding markers on map click
    google.maps.event.addListener(map, "click", function (e) {
      addMarker(e.latLng);
    });

  }

      function updateMarkers(markerss) {
        if (!map) {
          console.error("Map is not initialized yet.");
          return;
        }

        // Clear existing markers, routes, and bus markers
        clearMap();

        console.log("Updating markers:", markerss);

        // Add new markers to the map
        markerss.forEach((markerData, index) => {
          const { position, title, bus1Time, bus2Time } = markerData;
          if (!position || isNaN(position.lat) || isNaN(position.lng)) {
            console.error("Invalid position for marker:", markerData);
            return;
          }

          function getRandomTime() { return Math.floor(Math.random() * 30) + 1; }

          const marker = new google.maps.Marker({
            position,
            map,
            title,
            label: (index + 1).toString() // Adding numbers to markers
          });

          const infoWindowContent = `<h3>${title}</h3><p>Campus Express Bus 1: ${getRandomTime()} minutes</p><p>Campus Express Bus 2: ${getRandomTime()} minutes</p>`; const infoWindow = new google.maps.InfoWindow({ content: infoWindowContent });
          
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          markerObjects.push(marker);
        });

        // Center the map if markers are available
        if (markerss.length > 0) {
          map.setCenter(markerss[0].position);
        }

        console.log("Markers updated:", markerObjects);

        // Draw routes between markers
        drawRoutes();
      }

      function drawRoutes() {
  if (!directionsRenderer) {
    directionsRenderer = new google.maps.DirectionsRenderer({
      map: map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: '#FF7F7F' // Lighter red color
      }
    });
  }

  const directionsService = new google.maps.DirectionsService();

  const waypoints = markerObjects.slice(1).map(marker => ({ location: marker.getPosition() }));
  // waypoints.push({ location: markerObjects[0].getPosition() }); // Loop back to the start

  const request = {
    origin: markerObjects[0].getPosition(),
    destination: markerObjects[markerObjects.length - 1].getPosition(),
    waypoints: waypoints,
    travelMode: google.maps.TravelMode.DRIVING,
    // optimizeWaypoints: true
  };

  directionsService.route(request, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);

      // Add bus markers along the route
      addBusMarkers(result, markerObjects);
    } else {
      console.error('Error fetching directions', result);
    }
  });
}

function addBusMarkers(directionsResult, markerObjects) {
  const route = directionsResult.routes[0].overview_path;

  // Function to get the title of the next marker
  function getNextMarkerTitle(currentPosition) {
    let nextMarkerTitle = 'No next marker';
    let minDistance = Infinity;

    for (let marker of markerObjects) {
      const distance = google.maps.geometry.spherical.computeDistanceBetween(currentPosition, marker.getPosition());
      if (distance < minDistance && distance > 0) {
        minDistance = distance;
        nextMarkerTitle = marker.title;
      }
    }
    return nextMarkerTitle;
  }
  
  function createRedBusIcon() { const canvas = document.createElement('canvas'); const context = canvas.getContext('2d'); // Set canvas size 
    canvas.width = 48; canvas.height = 48;
    context.fillStyle = '#d43232'; 
    context.font = '48px "Material Icons"'; 
    context.fillText('directions_bus', 0, 40); 
  return canvas.toDataURL(); }

  const busMarker1 = new google.maps.Marker({
    position: route[Math.floor(route.length / 3)],
    map: map,
    //icon: 'http://maps.google.com/mapfiles/ms/icons/bus.png',
    icon: { url: createRedBusIcon()},
    title: 'Campus Express Bus 1'
  });

  const busMarker2 = new google.maps.Marker({
    position: route[Math.floor(2 * route.length / 3)],
    map: map,
    icon: { url: createRedBusIcon()},
    title: 'Campus Express Bus 2'
  });

  // InfoWindows to display the bus name and the title of the next marker
  const infoWindow1 = new google.maps.InfoWindow({
    content: `<h3>${busMarker1.title}</h3><p>Next marker: ${getNextMarkerTitle(busMarker1.getPosition())}</p>`
  });

  const infoWindow2 = new google.maps.InfoWindow({
    content: `<h3>${busMarker2.title}</h3><p>Next marker: ${getNextMarkerTitle(busMarker2.getPosition())}</p>`
  });

  // Add click listeners to display the InfoWindows
  busMarker1.addListener('click', () => {
    infoWindow1.open(map, busMarker1);
  });

  busMarker2.addListener('click', () => {
    infoWindow2.open(map, busMarker2);
  });

  busMarkers.push(busMarker1, busMarker2);
}



      function clearMap() {
        // Clear existing markers
        markerObjects.forEach(marker => {
          google.maps.event.clearInstanceListeners(marker);
          marker.setMap(null);
        });
        markerObjects = [];

        // Clear existing bus markers
        busMarkers.forEach(busMarker => {
          google.maps.event.clearInstanceListeners(busMarker);
          busMarker.setMap(null);
        });
        busMarkers = [];

        // Clear existing directions
        if (directionsRenderer) {
          directionsRenderer.setMap(null);
          directionsRenderer = null;
        }
      }




  // Initialize the map once the Google Maps API is available
  onMount(() => {
    const checkGoogleMaps = setInterval(() => {
      if (window.google) {
        clearInterval(checkGoogleMaps);
        initializeMap();
      }
    }, 100);
  });

  // Reactive update when markers prop changes
  $: markers, updateMarkers(markers);

  
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
