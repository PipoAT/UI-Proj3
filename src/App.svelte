<script>
  import ETA from "./lib/ETA.svelte"
  import Hours from './lib/Hours.svelte';
  import Map from './lib/Map.svelte';
  import BusRouteFinder from  './lib/SearchTab.svelte';

</script>



<main>
<div class="container-left">
  <h2>Left Side Content</h2>
  <p>This is some content for the left container.</p>
  <Hours />
  <ETA></ETA>
</div>
<div class="container-right">
  <h1>Right Container</h1>
  <Map />
  <p>This is the right container, which takes up the remaining three-fourths of the screen width.</p>
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