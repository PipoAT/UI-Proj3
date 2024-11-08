<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  export let currentDateOnly, currentRoute, currentDayOfWeek, currentHours
</script>

<main>
  <div id="hours">
    <div class="alert alert-dark d-flex align-items-center justify-content-center" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-exclamation-circle me-2" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
      </svg>
      <span>This route will not be operating on Monday, November 11, 2024, due to the Veterans Day holiday.</span>
    </div>
    <br>
    <h1>Hours of Operation</h1>
    <h2>{currentRoute}</h2>
    <br>
    <p>Monday:  7:00 AM - 10:00 PM</p>
    <p>Tuesday:  7:00 AM - 10:00 PM</p>
    <p>Wednesday:  7:00 AM - 10:00 PM</p>
    <p>Thursday:  7:00 AM - 10:00 PM</p>
    <p>Friday:  7:00 AM - 10:00 PM</p>
    <p>Saturday:  8:00 AM - 10:00 PM</p>
    <p>Sunday:  8:00 AM - 10:00 PM</p>
    <br>
  </div>
  <br>
  <div id="hours">
    <div class="alert alert-dark d-flex align-items-center justify-content-center" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-exclamation-circle me-2" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
      </svg>
      <span>This route will not be operating on Monday, November 11, 2024, due to the Veterans Day holiday.</span>
    </div>
    <br>
    <h1>Hours of Operation</h1>
    <h2>{currentRoute}</h2>
    <h3>{currentDayOfWeek}, {currentDateOnly}</h3>
    <br>
    <p>{currentHours}</p>
    <br>
  </div>
</main>