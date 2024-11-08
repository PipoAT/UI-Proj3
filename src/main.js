import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.svelte'

let currentDate = new Date();
let currentDateOnly = currentDate.toLocaleDateString();

let currentRoute = "UC Blue Ash"


const app = new App({
  target: document.getElementById('app'),
  props: {
    currentDateOnly,
    currentRoute
  }
})

export default app
