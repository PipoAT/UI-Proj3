<script>
    import { onDestroy, onMount } from "svelte";
    import mapStyles from './map-styles'; // Optional custom styles for the map
    
    export let markers = []; // Array of marker data passed as a prop
    export let zoom = 15;
    export let center = { lat: 39.132818154690355, lng: -84.51515178545588 };
    
    let container; // Reference to the map container
    let map; // Google Maps object
    let markerObjects = []; // Store references to marker instances
    
    // Initialize the map
    function initializeMap() {
      if (!container) return; // Prevent map initialization if container is missing
  
      map = new google.maps.Map(container, {
        zoom,
        center,
        styles: mapStyles, // Optional custom styles
      });
  
      console.log("Map initialized.");
      updateMarkers(); // Update markers after initializing the map
    }
    
    // Clean up the map
    function destroyMap() {
      if (map) {
        markerObjects.forEach(marker => marker.setMap(null)); // Remove markers
        markerObjects = [];
        map = null; // Nullify the map reference
      }
    }
    
    // Function to update markers on the map
    function updateMarkers() {
      if (!map) {
        console.error("Map is not initialized yet.");
        return;
      }
  
      // Clear existing markers from the map
      markerObjects.forEach(marker => marker.setMap(null));
      markerObjects = []; // Reset the array of marker objects
  
      console.log("Markers to update:", markers);
  
      // Add new markers to the map
      markers.forEach(markerData => {
        const { position, title, content } = markerData;
  
        if (!position || typeof position.lat !== "number" || typeof position.lng !== "number") {
          console.error("Invalid position for marker:", markerData);
          return;
        }
  
        const marker = new google.maps.Marker({
          map,
          position,
          title,
        });
  
        // Attach an info window if content is provided
        if (content) {
          const infoWindow = new google.maps.InfoWindow({ content });
          marker.addListener("click", () => infoWindow.open(map, marker));
        }
  
        // Add marker to the map and store its reference
        marker.setMap(map);
        markerObjects.push(marker);
      });
  
      // Center the map on the first marker if available
      if (markers.length > 0) {
        map.setCenter(markers[0].position);
      }
  
      console.log("Updated marker objects:", markerObjects);
      
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
  
    // Clean up the map when the component is destroyed
    onDestroy(() => {
      destroyMap();
    });
  
    // Reactive block to remount the map when zoom, center, or markers change
    $: markers,
      destroyMap(), // Destroy the existing map
      initializeMap(); // Reinitialize the map with new props
  </script>
  
  <div bind:this={container} style="width: 100%; height: 100%;"></div>
  
  <style>
    div {
      width: 100%;
      height: 100%;
    }
  </style>
  