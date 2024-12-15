
const searchBar = document.getElementById('search-bar');
const findBtn = document.getElementById('find-btn');
const weatherBox = document.getElementById('weather-box');
let city_info = [];
let weather;
async function getCity(letter) {
    try {
        let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6498042c04c84fb0aae173218241412&q=${letter}&days=3&aqi=no&alerts=no`);
        let data = await res.json();
        return data;
    } catch (error) {
        return error;
    }

}



function display() {
    const Firstday = new Date(city_info.forecast.forecastday[0].date);
    const secday = new Date(city_info.forecast.forecastday[1].date);
    const lastday = new Date(city_info.forecast.forecastday[2].date);
    let box = `<div class="row p-lg-5 p-md-1 pb-0 mb-0">
                        <div id="first-day" class="col-lg-4  p-0 col-md-12">
                            <div class="card  text-white mb-0 rounded-0">
                                <div class="card-header d-flex border-0">
                                    <span class="me-auto lead ">${Firstday.toLocaleDateString("en-US", { weekday: "long" })}</span>
                                    <span class="ms-auto lead">${Firstday.getDate()}${Firstday.toLocaleDateString("en-US", { month: "short" })}</span>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title lead city">${city_info.location.name}</h5>
                                    <p class="temp fw-1">${city_info.current.temp_c}&deg;C</p>
                                    <div id="weather-img">
                                        <img src="${city_info.current.condition.icon}" alt="weather" class="img-fluid h-100" />
                                    </div>
                                    <p class="text-primary fs-6 ">${city_info.current.condition.text}</p>
                                    <div class="d-flex">
                                        <span class="me-4 weather-measure"><img src="./images/icon-umberella.png"
                                                class="img-fluid me-1" /><span>${city_info.forecast.forecastday[0].day.daily_chance_of_rain}%</span></span>
                                        <span class="me-4 weather-measure"><img src="./images/icon-wind.png"
                                                class="img-fluid me-1" /><span>${city_info.current.wind_kph}km/h</span></span>
                                        <span class="me-4 weather-measure"><img src="./images/icon-compass.png"
                                                class="img-fluid me-1" /><span>${city_info.current.wind_dir}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sec-day" class="col-lg-4  p-0 col-md-12">
                            <div class="card  text-white mb-0 rounded-0">
                                <div class="card-header d-flex border-0">
                                    <span class="m-auto lead ">${secday.toLocaleDateString("en-US", { weekday: "long" })}</span>
                                </div>
                                <div class="card-body text-center">
                                    <div id="weather-img" class="mt-5 mb-0">
                                        <img src="./images/116.png" alt="weather" class="img-fluid h-50" />
                                    </div>
                                    <p class="fs-3 fw-bold m-0 p-0">${city_info.forecast.forecastday[1].day.maxtemp_c}&deg;C</p>
                                    <p class="fs-6 fw-light text-secondary">${city_info.forecast.forecastday[1].day.mintemp_c}&deg;C</p>
                                    <p class="text-primary fs-6 ">${city_info.forecast.forecastday[1].day.condition.text}</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div id="last-day" class="col-lg-4  p-0 col-md-12">
                            <div class="card  text-white mb-0 rounded-0">
                                <div class="card-header d-flex border-0">
                                    <span class="m-auto lead ">${lastday.toLocaleDateString("en-US", { weekday: "long" })}</span>
                                </div>
                                <div class="card-body text-center">
                                    <div id="weather-img" class="mt-5 mb-0">
                                        <img src="./images/116.png" alt="weather" class="img-fluid h-50" />
                                    </div>
                                    <p class="fs-3 fw-bold m-0 p-0">${city_info.forecast.forecastday[2].day.maxtemp_c}&deg;C</p>
                                    <p class="fs-6 fw-light text-secondary">${city_info.forecast.forecastday[2].day.mintemp_c}&deg;C</p>
                                    <p class="text-primary fs-6 ">${city_info.forecast.forecastday[2].day.condition.text}</p>
                                    
                                </div>
                            </div>
                        </div>
                      
                       </div>`
    return box;

}





searchBar.addEventListener('input', async function () {
    city_info = await getCity(searchBar.value);

    if (city_info.error) {
        console.log(city_info.error.message)
        weather = `<P>${city_info.error.message}</P>`
    } else {
        console.log(city_info);
        weather = display();

    }
    weatherBox.innerHTML = weather;


})





//  gets the location and display as the defult value
// loading 

