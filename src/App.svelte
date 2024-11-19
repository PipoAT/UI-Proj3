
<script>
  import ETA from "./lib/ETA.svelte"
  import Hours from './lib/Hours.svelte';
  import Map from './lib/Map.svelte';
  import BusRouteFinder from  './lib/SearchTab.svelte';

  let markers = [];

  function handleMarkerChange(event) {
    markers = event.detail;
  }

</script>

<main>
<div class="container-left">
  <Hours />
 dylan-dev
  <ETA bind:markers={markers}></ETA>

</div>
<div class="container-right">
  <Map {markers} />
</div>
</main>