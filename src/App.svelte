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
 <!--- <Hours /> --->
 <!--- <Map/> --->


<!---
<iframe src="https://storage.googleapis.com/maps-solutions-ybzdk0pdcx/locator-plus/tyos/locator-plus.html"
  width="100%" height="100%"
  style="border:0;"
  loading="lazy">
</iframe>
--->
  <!---<ETA></ETA>--->