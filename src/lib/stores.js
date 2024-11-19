import { writable } from 'svelte/store';

export const mapData = writable({
  markers: [],
  center: { lat: 39.133, lng: -84.515 },
  zoom: 15,
});

export const busStops = writable([
  {
    id: "1",
    name: "Campus Green Garage",
    routeId: "1",
    nextStopId: "2",
    latitude: 39.134, 
    longitude: -84.514
  },
  {
    id: "2",
    name: "Graduate Hotels",
    routeId: "1",
    nextStopId: "3",
    latitude: 39.137, 
    longitude: -84.508
  },
  {
    id: "3",
    name: "Eden Ave Garage - Front",
    routeId: "1",
    nextStopId: "4",
    latitude: 39.138, 
    longitude: -84.505
  },
  {
    id: "4",
    name: "UC Victory Parkway Campus",
    routeId: "1",
    nextStopId: "5",
    latitude: 39.122, 
    longitude: -84.484
  },
  {
    id: "5",
    name: "1819 Bldg. West Bound",
    routeId: "1",
    nextStopId: "6",
    latitude: 39.133, 
    longitude: -84.496
  },
  {
    id: "6",
    name: "Digital Futures",
    routeId: "1",
    nextStopId: "7",
    latitude: 39.134, 
    longitude: -84.496
  },
  {
    id: "7",
    name: "E. University Avenue & Bellevue",
    routeId: "1",
    nextStopId: "8",
    latitude: 39.133, 
    longitude: -84.504
  },
  {
    id: "8",
    name: "Kroger Stop",
    routeId: "1",
    nextStopId: "9",
    latitude: 39.129, 
    longitude: -84.510
  },
  {
    id: "9",
    name: "Ohio Ave & Calhoun Street",
    routeId: "1",
    nextStopId: "10",
    latitude: 39.128, 
    longitude: -84.515
  },
  {
    id: "10",
    name: "Calhoun at Corbett Drive",
    routeId: "1",
    nextStopId: "11",
    latitude: 39.129, 
    longitude: -84.520
  },
  {
    id: "11",
    name: "Main Gate, Clifton Ave",
    routeId: "1",
    nextStopId: "12",
    latitude: 39.130, 
    longitude: -84.520
  },
  {
    id: "12",
    name: "University Pavillion",
    routeId: "1",
    nextStopId: "13",
    latitude: 39.131, 
    longitude: -84.520
  },
  {
    id: "13",
    name: "Clifton & Probasco",
    routeId: "1",
    nextStopId: "1",
    latitude: 39.135, 
    longitude: -84.520
  },
]);
