

<script>
  // @ts-nocheck
  function parentFunction(message) {
      console.log("Message from child:", message);
    }
    import { onMount } from 'svelte';
    import TimeTable from './TimeTable.svelte';
    import SearchPage from './SearchTab.svelte';
      import SearchTab from './SearchTab.svelte';
    //export let departure = ''; // Receive the departure prop
    //export let destination = ''; // Receive the destination prop
  
  </script>


    <div class="eta-container">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <!-- <img src="./src/assets/fig2.png" alt="Description of the image" style="width: 28px; height: auto; margin-right: 10px;"> -->
      <div class="text-area">
        <div class="text-box-border-container" > 
          <input type="text" class="location-textbox" id="textbox" name="textbox" placeholder="Current location" >
        </div>
    
        <div class="text-box-border-container second-textbox"> 
          <input type="text" class="location-textbox" id="textbox" name="textbox" placeholder="Campus Green Garage">
          <SearchTab> </SearchTab>
          
        </div>
        <TimeTable onCallParent={parentFunction} > </TimeTable>
      </div>
    </div>
    


<style>
.eta-container {
    border-collapse: separate;
    background-color: #d43232; 
    padding: 20px; 
    color: white; 
    display: flex; 
    align-items: flex-start; 
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    margin: 20px; 
    position: relative;
    border-collapse: separate;
    background-color: #d43232; 
    padding: 20px; 
    color: white; 
    display: flex; 
    align-items: flex-start; 
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    margin: 20px; 
    position: relative;
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

  .text-area {
    width: 100%;
    border-collapse: separate;
    position: relative;

   
  }
   </style>
