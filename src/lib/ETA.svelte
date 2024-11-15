
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
    
    <!-- TimeTable Component -->
    <TimeTable ></TimeTable>
    
    </body>
    
 
    
    
    <script>
         import { onMount } from 'svelte';
        import TimeTable from "./TimeTable.svelte";
    
    
      
    </script>

<style>
@import "../app.css";
body{
  margin:0px;
  font-family: Arial, sans-serif;
  background-color: var(--dark-background);
}
.eta-container {
  background-color: #d43232; 
  padding: 20px;            
  color: white;             
  /*border-radius: 15px;  */
  display: flex;
  align-items: center;
}

.text-area{
  width: 100%
}


.text-box-border-container {
  background-color: var(--red1); 
  padding: 5px;                       
  border-radius: 15px;     
  margin-bottom: 8px;

} 

.location-textbox {
  border: none;    
  outline: none;
  font-size: 28px; 
  border-radius: 10px;          
  background-color: #921f1f; 
  padding: 18px; 
  color: #ffffff;
  box-sizing: border-box; 
  width: 100%
  
}

.location-textbox:hover {
  background-color: hsl(0, 60%, 33%);
}
.location-textbox::placeholder {
  color: #ffffff; 
  opacity: 1; 
}

.second-textbox {
  margin-top: 12px;
}


    </style>