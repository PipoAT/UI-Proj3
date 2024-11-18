<script>
  import ETA from "./lib/ETA.svelte"
  import Hours from './lib/Hours.svelte';
  import Map from './lib/Map.svelte';
  import BusRouteFinder from  './lib/SearchTab.svelte';

</script>

<main>
<div class="container-left">
  <Hours />
  <ETA></ETA>
</div>
<div class="container-right">
  <Map />
</div>
</main>