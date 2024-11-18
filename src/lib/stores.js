import { writable } from 'svelte/store';

export const mapData = writable({
  markers: [],
  center: { lat: 39.132818154690355, lng: -84.51515178545588 },
  zoom: 15,
});

export const busStops = writable([
  {
    id: "1",
    name: "Campus Green Garage",
    routeId: "1",
    nextStopId: "2",
    latitude: 39.134312, 
    longitude: -84.514353
  },
  {
    id: "2",
    name: "Graduate Hotels",
    routeId: "1",
    nextStopId: "3",
    latitude: 39.137106, 
    longitude: -84.507581
  },
  {
    id: "3",
    name: "Eden Ave Garage - Front",
    routeId: "1",
    nextStopId: "4",
    latitude: 39.137983, 
    longitude: -84.505438
  },
  {
    id: "4",
    name: "UC Victory Parkway Campus",
    routeId: "1",
    nextStopId: "5",
    latitude: 39.122366, 
    longitude: -84.484055
  },
  {
    id: "5",
    name: "1819 Bldg. West Bound",
    routeId: "1",
    nextStopId: "6",
    latitude: 39.132923, 
    longitude: -84.496338
  },
  {
    id: "6",
    name: "Digital Futures",
    routeId: "1",
    nextStopId: "7",
    latitude: 39.133584, 
    longitude: -84.495754
  },
  {
    id: "7",
    name: "E. University Avenue & Bellevue",
    routeId: "1",
    nextStopId: "8",
    latitude: 39.132625, 
    longitude: -84.504161
  },
  {
    id: "8",
    name: "Kroger Stop",
    routeId: "1",
    nextStopId: "9",
    latitude: 39.129144, 
    longitude: -84.509758
  },
  {
    id: "9",
    name: "Ohio Ave & Calhoun Street",
    routeId: "1",
    nextStopId: "10",
    latitude: 39.128273, 
    longitude: -84.514696
  },
  {
    id: "10",
    name: "Calhoun at Corbett Drive",
    routeId: "1",
    nextStopId: "11",
    latitude: 39.128598, 
    longitude: -84.519613
  },
  {
    id: "11",
    name: "Main Gate, Clifton Ave",
    routeId: "1",
    nextStopId: "12",
    latitude: 39.129738, 
    longitude: -84.520406
  },
  {
    id: "12",
    name: "University Pavillion",
    routeId: "1",
    nextStopId: "13",
    latitude: 39.131139, 
    longitude: -84.519521
  },
  {
    id: "13",
    name: "Clifton & Probasco",
    routeId: "1",
    nextStopId: "1",
    latitude: 39.134500, 
    longitude: -84.520192
  },
])