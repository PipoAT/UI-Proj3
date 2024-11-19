<script>
  import { onMount } from 'svelte';
  import TimeTable from './TimeTable.svelte';
  import SearchPage from './SearchTab.svelte';
  export let departure = ''; // Receive the departure prop
  export let destination = ''; // Receive the destination prop
  export let markers;
</script>

<!-- Main Body -->
<body>
  <div class="eta-container">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src="/fig2.png"
      alt="Description of the image"
      style="width: 28px; height: auto; margin-right: 10px;"
    />
    <div class="text-area">
      <SearchPage bind:markers={markers} />
    </div>
  </div>

  <!-- TimeTable Component -->
  <!-- <TimeTable></TimeTable> -->
</body>

<style>
  /* Ensure styles are scoped to this file */
  :global(body) {
    font-family: Arial, sans-serif;
    background-color: var(--dark-background); /* External variable usage */
  }

  /* ETA container styles */
  .eta-container {
    background-color: #d43232; /* Red background */
    padding: 20px; /* Inner padding */
    color: white; /* Text color */
    display: flex; /* Flex container */
    align-items: flex-start; /* Align items to the top */
    border-radius: 20px; /* Rounded corners for the container */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
    margin: 20px; /* Space between container and other elements */
  }

  /* Text area container */
  .text-area {
    width: 100%;
  }

  /* Input box container */
  .text-box-border-container {
    background-color: var(--red1); /* Use external red color variable */
    padding: 5px; /* Inner padding for the container */
    border-radius: 15px; /* Rounded corners */
    margin-bottom: 8px; /* Spacing between containers */
  }

  /* Input box styles */
  .location-textbox {
    border: none; /* Remove border */
    outline: none; /* Remove focus outline */
    font-size: 28px; /* Larger font size */
    border-radius: 10px; /* Rounded corners */
    background-color: #921f1f; /* Dark red background */
    padding: 18px; /* Inner padding */
    color: #ffffff; /* White text */
    box-sizing: border-box; /* Include padding in width/height */
    width: 100%; /* Take full width */
  }

  /* Hover effect for input boxes */
  .location-textbox:hover {
    background-color: hsl(0, 60%, 33%); /* Brighter red on hover */
  }

  /* Placeholder text styles */
  .location-textbox::placeholder {
    color: #ffffff; /* White placeholder text */
    opacity: 1; /* Full opacity for visibility */
  }

  /* Additional spacing for the second input box */
  .second-textbox {
    margin-top: 12px;
  }
</style>