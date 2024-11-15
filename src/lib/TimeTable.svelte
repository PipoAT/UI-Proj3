<script>
  import { onMount } from 'svelte';
  let dummy_eta;
  function Shuttle(name, duration, dummy_eta) {
    this.name = name;
    this.duration = duration;
    this.dummy_eta = dummy_eta;
  }
  let shuttle1 = new Shuttle ("Campus Express Shuttle 1", 10, 5);
  let shuttle2 = new Shuttle("Campus Express Shuttle 2", 15, 10);
  let shuttle3 = new Shuttle("CCM Plaza Shuttle 1", 25, 15);

  function updateCells(rowId, numberOfCells, dummy_eta, shuttleName) {
    const row = document.getElementById(rowId);
    if(row) {
      const cells = row.getElementsByTagName("td");
      let startCell, endCell;

      for (let i = dummy_eta; i < dummy_eta + numberOfCells; i++) {
        if(cells[i]) {
          cells[i].style.backgroundColor = "#d43232";
          cells[i].style.margin = "1px";

          if (i == dummy_eta) { 
            cells[i].style.borderTopLeftRadius = "25px";
            cells[i].style.borderBottomLeftRadius = "25px";
            startCell = cells[i];
          }
          
          if (i == ((dummy_eta + numberOfCells) - 1)) { 
            cells[i].style.borderTopRightRadius = "25px";
            cells[i].style.borderBottomRightRadius = "25px";
            endCell = cells[i];
          }
        }
      }
      
      if (startCell && endCell) {
        overlayShuttleInfo(startCell, endCell, shuttleName, dummy_eta, rowId);
      }
    }
  }

  function overlayShuttleInfo(startCell, endCell, shuttleName, eta, rowId) {
    console.log(rowId)
    let overlay;
    if (rowId=='s1'){
      overlay = document.getElementById('overlay1');
    }
    if (rowId=='s2'){
      overlay = document.getElementById('overlay2');
    }
    if (rowId=='s3'){
      overlay = document.getElementById('overlay3');
    }
    let startRect = startCell.getBoundingClientRect();
    let endRect = endCell.getBoundingClientRect();

    overlay.style.display = 'block';  //  overlay visible
    overlay.style.position = 'absolute';
    // @ts-ignore
    overlay.style.zIndex = 9999; //  overlay  on top of other elements

    overlay.style.top = `${startRect.top + window.scrollY}px`; 
    overlay.style.left = `${startRect.left + window.scrollX}px`; 
    overlay.style.width = `${endRect.right - startRect.left}px`; 
    overlay.style.height = `${startRect.height}px`;
    overlay.textContent = `${shuttleName} departs in ${eta} minutes`;
  }


  function getTime() {
    const timeInput = document.getElementById('timeInput');
    const selectedTime = timeInput.value;
    console.log(selectedTime);
    const [hours, minutes] = selectedTime.split(':').map(Number);
    shuttle1.dummy_eta = ((minutes*2))%10;
    shuttle2.dummy_eta = (shuttle1.dummy_eta +5) % 60;
    shuttle3.dummy_eta = (shuttle1.dummy_eta +10) % 60; 
    time_bar(hours, minutes)
  }
    
  function autofill_w_current_time() {
    const now = new Date();
    const timeInput = document.getElementById('timeInput');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeInput.value = `${hours}:${minutes}`;
  }

  function time_bar(hr, min) {
    const now = new Date();
    const current_minute = String(now.getMinutes()).padStart(2, '0');
    const minutesRow = document.getElementById('minutes');
    const s1Row = document.getElementById('s1');
    const s2Row = document.getElementById('s2');
    const s3Row = document.getElementById('s3');
    minutesRow.innerHTML = ''; 
    s1Row.innerHTML = '<td></td>';
    s2Row.innerHTML = '<td></td>';
    s3Row.innerHTML = '<td></td>';

    for (let i = 0; i < 60; i++) {
      const td = document.createElement("td");
      const formattedHour = hr.toString().padStart(2, '');
      const formattedMinute = min.toString().padStart(2, '0');
      td.textContent = `${formattedHour}:${formattedMinute}`;

      if (parseInt(formattedMinute, 10) % 5 === 0 || formattedMinute==current_minute) {
        td.style.fontSize = "1.2em";
        td.style.color = "black";
        td.style.paddingRight= "5px";
        //td.style.textAlign = "center";
      } else {
        td.style.fontSize = "0.0000001em";
        td.style.color = "white";
      }
      minutesRow.appendChild(td);
      min = (min + 1) % 60;
      if (min === 0) {
        hr = (hr + 1) % 24;
      }
    }

    for (let i = 0; i < 60; i++) {
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      s1Row.appendChild(td1);
      s2Row.appendChild(td2);
      s3Row.appendChild(td3);
    }
    updateCells('s1', shuttle1.duration, shuttle1.dummy_eta, shuttle1.name);
    updateCells('s2', shuttle2.duration, shuttle2.dummy_eta, shuttle2.name);
    updateCells('s3', shuttle3.duration, shuttle3.dummy_eta, shuttle3.name);
  }

  onMount(() => {
    const now = new Date();
    time_bar(now.getHours(), now.getMinutes());
    autofill_w_current_time();
  });



 
</script>

<div class="container">
  <label for="timeInput">Depart at:</label>
  <input type="time" id="timeInput">
  <button on:click={getTime}>Ok</button> 
  
  <p id="displayTime"></p>

  <table id = "time_table">
    <thead>
      <tr id="minutes"></tr> 
    </thead>
    <tbody>
      <tr id="s1" class="shuttle-row">
        <td></td>
      </tr>
      <tr id="s2" class="shuttle-row">
        <td ></td>
      </tr>
      <tr id="s3" class="shuttle-row">
        <td></td>
      </tr>
      
    </tbody>
   
  </table>
  <div id="overlay1" class="overlay1"></div> 
  <div id="overlay2" class="overlay2"></div> 
  <div id="overlay3" class="overlay3"></div>  
</div>



<style>
  .container {
    
    max-width: 100%;
    overflow-x: auto;
    
  }

  table {
    border-collapse: separate;
    border-spacing: 0 5px;
    width: 100%;
    margin:10px;
  }

  td { 
    color:  rgba(0, 0, 0,0);
    margin: 100px;
    
  }

  .shuttle-row {
    height: 100px;
    color: white;
  }
  .overlay1 {
    position: absolute;
    padding-top: 25px;
    background-color: rgba(0, 0, 0, 0); 
    color: white;
    pointer-events: none; 
    display: grid; 
    text-align: center;
    display: flex;
  align-items: center;
  }
  .overlay2 {
    position: absolute;
    padding-top: 25px;
    background-color: rgba(0, 0, 0, 0); 
    pointer-events: none; 
    display: flex;
    color: white;
    text-align: center;
    align-items: center;
  }

  .overlay3 {
    position: absolute;
    padding-top: 25px;
    background-color: rgba(0, 0, 0, 0); /* transparent red overlay */
    pointer-events: none; /* Allows clicks to pass through */
    color: white;
    display: flex;
    text-align: center;
    align-items: center;
  }

</style>
