<script>
    let currentDate = new Date();
    let currentDateOnly = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    let currentDayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });

    let testData = {
    "Monday": ["9:00 AM - 5:00 PM"],
    "Tuesday": ["9:00 AM - 5:00 PM"],
    "Wednesday": ["9:00 AM - 5:00 PM"],
    "Thursday": ["9:00 AM - 5:00 PM"],
    "Friday": ["8:00 AM - 5:00 PM"],
    "Saturday": ["8:00 AM - 4:00 PM"],
    "Sunday": ["Closed"]
    };

    let currentHours = testData[currentDayOfWeek] || ["Closed"];

    let currentRoute = "UC Blue Ash"
</script>

<main>
    <div id="hours">
        <div class="alert alert-dark d-flex align-items-center justify-content-center" role="alert">
        <span>This route will not be operating on Monday, November 11, 2024, due to the Veterans Day holiday.</span>
        </div>
        <br>
        <h2>Hours of Operation</h2>
        <br>
        <h3>{currentRoute}</h3>
        <br>
        <h4>{currentDayOfWeek}, {currentDateOnly}</h4>
        <br>
        <p>{currentHours}</p>
        <br>
    </div>
</main>