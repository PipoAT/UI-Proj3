<script>
  let currentDate = new Date();
  let currentDateOnly = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  let currentDayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });

  let testData = {
    Monday: ["9:00 AM - 5:00 PM"],
    Tuesday: ["9:00 AM - 5:00 PM"],
    Wednesday: ["9:00 AM - 5:00 PM"],
    Thursday: ["9:00 AM - 5:00 PM"],
    Friday: ["8:00 AM - 5:00 PM"],
    Saturday: ["8:00 AM - 4:00 PM"],
    Sunday: ["Closed"]
  };

  let currentHours = testData[currentDayOfWeek] || ["Closed"];
  let currentRoute = "UC Blue Ash Shuttle";
</script>

<main>
  <div id="hours">
    <div class="alert" role="alert">
      <span>
        This route will not be operating on Monday, November 11, 2024, due to the Veterans Day holiday.
      </span>
    </div>
    <br>
    <h3>{currentRoute}</h3>
    <br>
    <h4>{currentDayOfWeek}, {currentDateOnly}</h4>
    <br>
    <p>{currentHours}</p>
    <br>
  </div>
</main>

<style scoped>
  /* Scoped Styles for this component only */
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    padding: 1em;
    text-align: center;
    background-color: #8a2828;
    border-radius: 10px;
  }

  .alert {
    font-size: 1vw; /* Adjusted to be responsive */
    padding: .5em;
    background-color: #213547;
    color: #f9f9f9;
    border-radius: 5px;
  }

  #hours {
    background-color: #8a2828;
    padding: .1em;
    border-radius: 20px;
    color: #f9f9f9;
  }

  #hours h3 {
    font-size: 2vw; /* Responsive font size based on screen width */
    margin-top: 0.01em;
  }

  #hours h4 {
    font-size: 2vw; /* Responsive font size based on screen width */
    margin-top: 0.01em;
  }

  #hours p {
    font-size: 2vw; /* Responsive font size based on screen width */
    margin-top: 0.01em;
  }

  @media (prefers-color-scheme: light) {
    main {
      background-color: #b68686;
      color: #213547;
    }
    .alert {
      background-color: #213547;
    }
  }
</style>
