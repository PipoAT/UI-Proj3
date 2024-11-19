


<script>
  // @ts-nocheck
  export let onCallParent; // Receive the function as a prop
  
  function callParentFunction() {
    onCallParent("Hello from the child!");
  }
    import { onMount } from 'svelte';
    let dummy_eta;
    function Shuttle(name, duration, dummy_eta) {
      this.name = name;
      this.duration = duration;
      this.dummy_eta = dummy_eta;
    }
    let shuttle1 = new Shuttle ("Campus Express Shuttle 1", 15, 10);
    let shuttle2 = new Shuttle("Campus Express Shuttle 2", 20, 15);
    let shuttle3 = new Shuttle("CCM Plaza Shuttle 1", 21, 15);
    const root = document.documentElement;
    const red1 = getComputedStyle(root).getPropertyValue('--red1').trim(); 
    const dark_background = getComputedStyle(root).getPropertyValue('--dark-background').trim(); 
    
    function updateCells(rowId, numberOfCells, dummy_eta, shuttleName) {
      const row = document.getElementById(rowId);
      
      if(row) {
        const cells = row.getElementsByTagName("td");
        let first_cell_in_row=cells[0];
        let startCell, endCell;
  
        for (let i = dummy_eta; i < dummy_eta+numberOfCells; i++) {
          if(cells[i]) {
            //cells[i].style.backgroundColor = "black";
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
          overlayEtaLine(first_cell_in_row, startCell, shuttleName, dummy_eta, rowId) 
          
        }
        
      }
      
    }
  
    function overlayEtaLine(first_cell_in_row, startCell, shuttleName, eta, rowId) {
      let firstCellRect = first_cell_in_row.getBoundingClientRect();
  
      let lastCellRect = startCell.getBoundingClientRect();
      let tableContainer = document.querySelector("table");
      let containerRect = tableContainer.getBoundingClientRect();
    
      let topPosition = rowId.offsetTop;
      let leftPosition = firstCellRect.left - containerRect.left;
  
      // get width of first_cell_in_row and subtract it so that my line starts on the left part of the first_cell_in_row
      //let leftPosition = firstCellRect.left - containerRect.left;
  
      let width = (lastCellRect.right - firstCellRect.left);
      
      let rowEtaLine = document.getElementById(`eta-line-${rowId}`);
      if (!rowEtaLine) {
          rowEtaLine = document.createElement("div");
          rowEtaLine.id = `eta-line-${rowId}`;
         rowEtaLine.style.position = "absolute";
          rowEtaLine.style.height = "2px";
          rowEtaLine.style.backgroundColor = "white";
          rowEtaLine.style.padding="20px"
          tableContainer.appendChild(rowEtaLine);
          
      }
      rowEtaLine.style.marginLeft="0px";
    
  
      rowEtaLine.style.top = `${topPosition}px`;
      rowEtaLine.style.left = `${leftPosition}px`;
      rowEtaLine.style.width = `${width+50}px`;
      rowEtaLine.style.paddingLeft = `${0}px`;
      rowEtaLine.style.paddingRight = `${5}px`;
      let rowEtaText = document.getElementById(`eta-text-${rowId}`);
      if (!rowEtaText) {
          rowEtaText = document.createElement("div");
          rowEtaText.id = `eta-text-${rowId}`;
          rowEtaText.style.position = "absolute";
          rowEtaText.style.color = "white";
          rowEtaText.style.fontSize = "14px";
          tableContainer.appendChild(rowEtaText);
      }
      //rowEtaText.style.marginLeft="10px";
      rowEtaText.style.top = `${topPosition}px`;
      rowEtaText.style.left = `${leftPosition}px`;
      rowEtaText.style.marginLeft="0px";
      rowEtaText.textContent = `Arriving in ${eta} min`;
      let textwidth = rowEtaText.offsetWidth;
      //rowEtaText.style.visibility = "hidden";
      let linelength = width
      if (textwidth > (width/1.1)) {
  
        rowEtaText.textContent = `Arriving in ${eta} min`;
        rowEtaText.style.fontSize = "12px";
         
      } else {
  
        rowEtaText.textContent = `Arriving in ${eta} min`;
  
      }
  
      // rowEtaText.textContent = `Arriving in ${eta} min`;
      // if (eta<=5){
      //   rowEtaText.textContent = `${eta} min`;
      //   // hurry up! the shuttle leaves soon
      //   callParentFunction();
      // }
      // if (eta<=2){
      //   rowEtaText.textContent = `Arriving!`;
      //   callParentFunction();
      // }
      
     
  }
  
    function overlayShuttleInfo(startCell, endCell, shuttleName, eta, rowId) {
      //console.log(rowId)
      let topPosition = rowId.offsetTop;
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
      // to calculate overlay position and dimensions
  let startRect = startCell.getBoundingClientRect();
  let endRect = endCell.getBoundingClientRect();
  let magnitude = endRect.right - startRect.left;
  //overlay.style.backgroundColor = "red";
  overlay.style.top = `${topPosition}px`;
  overlay.style.left = `${(startRect.left-50) + window.scrollX}px`;
  overlay.style.width = `${magnitude}px`;
  overlay.style.height = `${startRect.height}px`;
  overlay.style.alignContent = "center";
  overlay.style.position = "absolute";
  overlay.style.padding = "10px";
  
  overlay.textContent = `${shuttleName}`;
  
  
    }
  
  
    function getTime() {
      const timeInput = document.getElementById('timeInput');
      const selectedTime = timeInput.value;
      //console.log(selectedTime);
      const [hours, minutes] = selectedTime.split(':').map(Number);
      shuttle1.dummy_eta = (((minutes*2)%11)+5);
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
   
        //|| formattedMinute==current_minute
        if (parseInt(formattedMinute, 10) % 5 === 0 ) {
          td.style.fontSize = "1.2em";
          td.style.color = "white";
         
         // td.style.paddingRight= "5px";
          //td.style.textAlign = "center";
        } else {
          td.style.fontSize = "0.0000001em";
         
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
  <div class="time_container">
    <label for="timeInput">Departing at:</label>
    <input type="time" id="timeInput">
    <button on:click={getTime}>Ok</button> 
    
    <p id="displayTime"></p>
  
    <table id = "time_table">
      
      <thead>
        <tr id="minutes" style="margin-bottom: 20px;"></tr> 
      </thead>
      
      <div id="eta-line-s1" class="eta-line-s1"></div> 
        <div id="overlay1" class="overlay1"></div> 
          <div id="eta-text-s1" class="eta-text-s1"></div> 
          
        
        <tr id="s1" class="shuttle-row">
          
        </tr>
        <div id="eta-line-s2" class="eta-line-s2"></div> 
        <div id="overlay2" class="overlay2"></div> 
        <div id="eta-text-s2" class="eta-text-s2"></div> 
       
        <tr id="s2" class="shuttle-row">
        </tr>
        <div id="eta-line-s3" class="eta-line-s3"></div> 
        <div id="overlay3" class="overlay3"></div>  
        <div id="eta-text-s3" class="eta-text-s3"></div> 
         
        <tr id="s3" class="shuttle-row">
        </tr>
        
  
     
    </table>
   
  </div>
  
  <style>
    /* .timetable-area{
      border-collapse: separate;
      overflow-x: auto;
    } */
    label {
      padding:10px;
    }
  
    .time_container{
      width: 100%;
      overflow-x: auto;
      margin: relative;
      
    }
    table {
      --shuttle-color:var(--transparent);
      color: #181818;
      border-collapse: separate;
      border-spacing: 0 5px;
      width: 100%;
      margin:10px;
     position: relative;
  
    }
  
    .shuttle-row {
      
      height: 100px;
      background-color: var(--transparent);
      border-collapse: separate;
      
    }
    .overlay1,
    .overlay2,
    .overlay3 {
      position: absolute;
      color: white;
      justify-content: center;
      font-size: 1.2em;
      margin:0px;
      display: flex;
      position: absolute;
      overflow-x: auto;
      background-color: black;
      border-radius: 25px;
      text-align: center;
      align-items: center; /* vertical center */
   
    }
    .eta-line-s1,
  .eta-line-s2,
.eta-line-s3{
    margin-top: 50px;
      margin-left:0px;
      position: absolute;
      padding: 2px; /** the heigth of the bar*/
      background-color: white;
      pointer-events: none;
      display: flex;
      align-items: center;
      text-align: center;
          
      
  }
    .eta-text-s1,
  .eta-text-s2,
  .eta-text-s3 {
    margin-top: 30px;
      position: absolute;
      font-size: 14px;
      color: white;
      text-align: center;
  }
  

  
  </style>
  