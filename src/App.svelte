

<body class="base"> 
<div class="eta-container">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="./src/assets/fig2.png" alt="Description of the image" style="width: 28px; height: auto; margin-right: 10px;">
  <div class="text-area">
    <div class="text-box-border-container" > 
      <input type="text" class="location-textbox" id="textbox" name="textbox" placeholder="Current location" >
    </div>

    <div class="text-box-border-container second-textbox"> 
      <input type="text" class="location-textbox" id="textbox" name="textbox" placeholder="Campus Green Garage">
    </div>
  </div>
</div>

<!---------------------------------------------------------->
<div id="buttonstuff"> 
<script defer>
  function showPopup() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';


    const now = new Date();
    const hours = now.getHours();
    const minutes = Math.ceil(now.getMinutes() / 15) * 15;
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;


    document.getElementById('timeDisplay').textContent = `Current Time: ${formattedTime}`;

  }
  function hidePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  }


  function submitTime() {

      const selectedTime = document.getElementById('start-time').value;

      const timetable = document.getElementById('timetable');
      if (timetable && typeof timetable.setTime === 'function') {
        timetable.setTime(selectedTime); 
      } else {
        console.log('Selected Time:', selectedTime); 
      }

      hidePopup();
    }
</script>

<div class="overlay" onclick="hidePopup()"></div>
<div class="popup">
  <h2>Set time to depart</h2>
  <div class="time-selector">
    <label for="start-time"></label>
    <input type="time" id="start-time">
  </div>
  <button onclick="submitTime()">Ok</button>
</div>



<!-- TimeTable Component -->
<TimeTable ></TimeTable>

</body>




<script>
    import TimeTable from "./lib/TimeTable.svelte";


  
</script>