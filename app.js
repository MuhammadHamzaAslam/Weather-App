let cityInput = document.getElementById('cityInput')
let currentWeatherDiv = document.querySelector('.currentWeatherDiv')
let apiKey = 'a27f0bfe7ee64bf9b7674937241108'
async function getWeatherDetails(cityName) {
  const ApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}`
  try {
    console.log('on working');
    
    const response = await fetch(ApiUrl)
    const data = await response.json()
    console.log(data);
    currentWeatherDiv.innerHTML = `
            <div id="imgDiv">    
                <img src="${data.current.condition.icon}" height="200px" alt="">
            </div>
            <div id="temperatureDiv">    
                <h1>${Math.round(data.current.temp_c)} <span>C</span></h1>
            </div>
            <div id="description">    
                <h1>${data.current.condition.text}</</h1>
            </div>
            <div id="CityName">    
                <h1>${data.location.name}</</h1>
            </div>
            <div id="Humidity">    
                <h3>${data.current.humidity}%</h3>
            </div>
            <div id="feelLike">    
                <h3>${data.current.feelslike_c}</h3>
            </div>
    `
    
  } catch (error) {
    console.log(error);
    
  }
}
cityInput.addEventListener('keydown',(e)=>{
  const cityInputValue = cityInput.value
  if (e.key == "Enter" && cityInputValue) {
    getWeatherDetails(cityInputValue)
  }
})