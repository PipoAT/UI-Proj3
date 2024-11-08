import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.svelte'

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


const app = new App({
  target: document.getElementById('app'),
  props: {
    currentDateOnly,
    currentDayOfWeek,
    currentHours,
    currentRoute
  }
})

export default app
