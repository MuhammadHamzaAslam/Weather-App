let cityInput = document.getElementById('cityInput');
let currentWeatherDiv = document.querySelector('.currentWeatherDiv');
let Hour24Div = document.querySelector('.Hour24Div');
let TenDaysWeatherDiv = document.querySelector('.TenDaysWeather');
let apiKey = 'a27f0bfe7ee64bf9b7674937241108';


function displayHourlyForecast(hourWiseData, cityTimeOffset) {
  let currentHour = new Date(new Date().getTime() + cityTimeOffset * 1000).getHours();
  const filteredData = hourWiseData.slice(currentHour).concat(hourWiseData.slice(0, currentHour));

  Hour24Div.innerHTML = '';
  filteredData.forEach(hour => {
      let time = new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

      Hour24Div.innerHTML += `
          <div class="timeDiv">
              <span>${time}</span>
              <br>
              <img src="${hour.condition.icon}" height="40px" alt="">
              <br>
              <span>${hour.feelslike_c}°C</span>
              <br>
              <span>Rain: ${hour.chance_of_rain}%</span>
          </div>
      `;
  });
}

function displayTenDaysForecast(tenDaysData) {
  TenDaysWeatherDiv.innerHTML = '';
  tenDaysData.forEach(day => {
      let date = new Date(day.date).toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });

      TenDaysWeatherDiv.innerHTML += `
          <div class="dayDiv">
              <span>${date}</span>
              <br>
              <img src="${day.day.condition.icon}" height="40px" alt="">
              <br>
              <span>${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C</span>
              <br>
              <span>Rain: ${day.day.daily_chance_of_rain}%</span>
          </div>
      `;
  });
}

async function getWeatherDetails(cityName) {
  const ApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=10`;
  try {
      // console.log('Fetching weather data...');
      const response = await fetch(ApiUrl);
      const data = await response.json();
      console.log(data);
      const cityTimeOffset = data.location.localtime_epoch - Math.floor(Date.now() / 1000);

      currentWeatherDiv.innerHTML = `
          <div id="imgDiv">
              <img src="${data.current.condition.icon}" height="150px" alt="">
          </div>
          <div id="weatherInfo">
              <h1 id="temperature">${Math.round(data.current.temp_c)}<span>°C</span></h1>
              <h3 id="description">${data.current.condition.text}</h3>
              <h3 id="cityNameDiv">${data.location.country}</h3>
              <h3 id="cityNameDiv">${data.location.name}</h3>
              <div id="humidityAndFeelLike">    
                  <h4 id="humidity">Humidity: ${data.current.humidity}%</h4>
                  <h4 id="feelLike">Feels Like: ${Math.round(data.current.feelslike_c)}°C</h4>
              </div>
          </div>
      `;
      cityInput.value = "";
      let combineHourlyData = [...data.forecast.forecastday[0].hour];
      displayHourlyForecast(combineHourlyData, cityTimeOffset);
      displayTenDaysForecast(data.forecast.forecastday);
      
  } catch (error) {
      console.log('Error fetching weather data:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid City Name",
        footer: '<p">Error Occured While Fetching Data</ap>'
      });
      cityInput.value = ''
  }
}

getWeatherDetails('Karachi');

cityInput.addEventListener('keydown', (e) => {
  const cityInputValue = cityInput.value;
  if (e.key === "Enter" && cityInputValue) {
      getWeatherDetails(cityInputValue);
  }
});
