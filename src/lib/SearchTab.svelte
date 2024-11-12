<script>
  import { onMount } from "svelte";
  import { busStops } from "./stores.js";

  const defaultBusStop = {
    id: "-1",
    name: "",
    routeId: "-1",
    nextStopId: "-1"
  }

  let busStopData = [];
  let selectedBusStopDeparture = { ...defaultBusStop }
  let selectedBusStopDestination = { ...defaultBusStop }
  let alertString = "";

  onMount(() => {
    busStops.subscribe((value) => {
      busStopData = value;
    });
  });

  function selectDepartingStop(e) {
    selectedBusStopDeparture = busStopData.find(x => x.name == e.target.value);
  }

  function selectDestination(e) {
    selectedBusStopDestination = busStopData.find(x => x.name == e.target.value);
  }


  function calculateOptimalRoute() {
    let nextBusStop = selectedBusStopDeparture;
    while (nextBusStop.id != selectedBusStopDestination.id) {
      alertString = alertString.concat(nextBusStop.name, " -> ");
      nextBusStop = busStopData.find(x => x.id == nextBusStop.nextStopId);
    }
    alertString = alertString.concat(nextBusStop.name);
    console.log(alertString);
  }
</script>

<div class="searchPage">
  <h1>Find Route</h1>
  <div class="inputData">
    <div class="departingFrom">
      <label>Departing From:</label>
      <input list="busStops" name="busStopDeparture" bind:value={selectedBusStopDeparture.name}
      on:change={selectDepartingStop} on:click={() => {selectedBusStopDeparture = { ... defaultBusStop }}}>
      <datalist id="busStops">
        {#each busStopData as busStop}
          <option value={busStop.name}>
        {/each}
      </datalist>
    </div>
    <div class="destination">
      <label>Destination:</label>
      <input list="busStops" name="busStopDest" bind:value={selectedBusStopDestination.name}
      on:change={selectDestination} on:click={() => {selectedBusStopDestination = { ... defaultBusStop }}}>
      <datalist id="busStops">
        {#each busStopData as busStop}
          <option value={busStop.name}>
        {/each}
      </datalist>
    </div>
    <button on:click={calculateOptimalRoute}>Search</button>
  </div>
  <div class="routeData">
    <h2>{alertString}</h2>
  </div>
</div>

<style>
  .searchPage {
    border-right: 1px solid black;
    width: 100%;
    height: 100%;
  }

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  .inputData div {
    display: flex;
    margin: 20px;
  }

  .inputData label {
    font-size: 20px;
  }

  .inputData input {
    width: 60%;
    height: 30px;
    margin-left: 10px;
  }

  .inputData button {
    background-color:lightblue;
    font-size: 25px;
    border-radius: 30px;
    margin: auto;
    display: block;
  }
</style>