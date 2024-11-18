<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import { busStops } from "./stores.js"; // Import busStops store
  import Map from './Map.svelte'; // Import Map component

  // Default placeholder for unselected stops
  const defaultBusStop = {
    id: "-1",
    name: "",
    routeId: "-1",
    nextStopId: "-1",
    latitude: null,
    longitude: null,
  };

  let busStopData = []; // Stores bus stop data from the store
  let selectedBusStopDeparture = { ...defaultBusStop };
  let selectedBusStopDestination = { ...defaultBusStop };
  let alertString = ""; // Displays the calculated route
  let markers = []; // Array of markers to display on the map

  // Subscribe to `busStops` store and update data on mount
  onMount(() => {
    busStops.subscribe((value) => {
      busStopData = value;
      updateMarkers(); // Initialize markers based on available data
    });
  });

  // Handle selection of departure stop
  function selectDepartingStop(e) {
    selectedBusStopDeparture = busStopData.find(x => x.name === e.target.value) || { ...defaultBusStop };
  }

  // Handle selection of destination stop
  function selectDestination(e) {
    selectedBusStopDestination = busStopData.find(x => x.name === e.target.value) || { ...defaultBusStop };
  }

  // Calculate the optimal route between selected stops
  function calculateOptimalRoute() {
    alertString = ""; // Clear previous route
    let nextBusStop = selectedBusStopDeparture;

    const routeStops = []; // Store valid stops for the route

    while (nextBusStop && nextBusStop.id !== selectedBusStopDestination.id) {
      if (validateCoordinates(nextBusStop)) {
        routeStops.push(nextBusStop);
        alertString = alertString.concat(nextBusStop.name, " -> ");
      } else {
        console.error(`Invalid coordinates for bus stop: ${nextBusStop.name}`);
        break;
      }
      nextBusStop = busStopData.find(x => x.id === nextBusStop.nextStopId);
    }

    // Add destination stop to the route if valid
    if (nextBusStop && validateCoordinates(nextBusStop)) {
      routeStops.push(nextBusStop);
      alertString = alertString.concat(nextBusStop.name);
    } else {
      alertString = "Route not found.";
    }

    updateMarkers(routeStops); // Update markers with route stops
  }

  // Helper function to validate latitude and longitude
  function validateCoordinates(stop) {
    return typeof stop.latitude === "number" && typeof stop.longitude === "number";
  }

  // Update markers for the map
  function updateMarkers(routeStops = []) {
    markers = routeStops.map(stop => ({
      position: { lat: stop.latitude, lng: stop.longitude },
      title: stop.name,
      content: `<strong>${stop.name}</strong><br><span>${stop.latitude}, ${stop.longitude}</span>`
    }));

    console.log("Updated Markers:", markers); // Debug: Verify markers are correct
  }
</script>

<div class="searchPage">
  <h1>Find Route</h1>
  <div class="inputData">
    <div class="input-box">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Departing From:</label>
      <input 
        list="busStops" 
        name="busStopDeparture" 
        bind:value={selectedBusStopDeparture.name}
        on:change={selectDepartingStop} 
        on:click={() => { selectedBusStopDeparture = { ...defaultBusStop } }}
      />
      <datalist id="busStops">
        {#each busStopData as busStop}
          <option value={busStop.name} />
        {/each}
      </datalist>
    </div>

    <div class="input-box">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Destination:</label>
      <input 
        list="busStops" 
        name="busStopDest" 
        bind:value={selectedBusStopDestination.name}
        on:change={selectDestination} 
        on:click={() => { selectedBusStopDestination = { ...defaultBusStop } }}
      />
      <datalist id="busStops">
        {#each busStopData as busStop}
          <option value={busStop.name} />
        {/each}
      </datalist>
    </div>

    <button on:click={calculateOptimalRoute}>Search</button>
  </div>

  <div class="routeData">
    <h2>{alertString}</h2>
  </div>

  <!-- Map component -->
  <!--<Map {markers} zoom={15} center={markers.length > 0 ? markers[0].position : { lat: 39.132818, lng: -84.515151 }} /> -->
</div>

<style>
  /* Search Page container */
  .searchPage {
    background-color: #d43232;  /* Red background */
    color: white;  /* White text */
    padding: 20px;
    display: flex;
    flex-direction: column;  /* Arrange inputs vertically */
    align-items: center;
    justify-content: flex-start;
    
  }

  /* Heading */
  h1 {
    text-align: center;
    font-size: 28px;
  }

  /* Route Data */
  .routeData h2 {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
  }

  /* Input container */
  .inputData {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .input-box {
    background-color: var(--red1);  /* Use a similar red color */
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
    width: 80%;  /* Adjust width to take most of the container */
  }

  /* Input field styles */
  input {
    border: none;
    outline: none;
    font-size: 20px;
    padding: 15px;
    border-radius: 10px;
    background-color: #921f1f;  /* Dark red background */
    color: white;
    width: 100%;
  }

  /* Hover effect for inputs */
  input:hover {
    background-color: hsl(0, 60%, 33%);  /* Brighter red on hover */
  }

  /* Button styles */
  button {
    background-color: lightblue;
    font-size: 20px;
    border-radius: 30px;
    padding: 15px 30px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #3a94d3;  /* Light blue on hover */
  }

  /* Styling for datalist options */
  datalist {
    background-color: #921f1f;
    color: white;
  }

  /* Additional spacing between inputs */
  .input-box {
    margin-top: 10px;
  }
</style>
