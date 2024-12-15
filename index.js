import { cityApi } from "./cities.module.js";

const searchBar = document.getElementById('search-bar');
const findBtn = document.getElementById('find-btn');
const weatherBox = document.getElementById('weather-box');

let city_info = [];

searchBar.addEventListener('keyup', async function(){
 let city = new cityApi(searchBar.value);
 city_info = city.getCity();

 console.log(city_info);
 
})




// search find method letter by letter fetch data 
// obj { day1, day2 , day3 }
// using classes day have 6 proberties
// display from the grobale obj 
// loading 
