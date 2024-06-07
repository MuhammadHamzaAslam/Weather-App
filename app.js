let userObj = {
    "london": {
      "name": "London",
      "country": "United Kingdom",
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature": "30 C",
      "Feel Like Temperature": "37 C"
    },
    "karachi": {
      "name": "Karachi",
      "country": "Pakistan",
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature": "45 C",
      "Feel Like Temperature": "37 C"
    },
    "lahore": {
      "name": "Lahore",
      "country": "Pakistan",
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature": "40 C",
      "Feel Like Temperature": "37 C"
    },
    "quetta": {
      "name": "Quetta",
      "country": "Pakistan",
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature": "35 C",
      "Feel Like Temperature": "37 C"
    },
    "peshawar": {
      "name": "Peshawar",
      "country": "Pakistan",
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature": "38 C",
      "feelLikeTemperature": "37 C"
    },
    "new_york": {
      "name": "New York",
      "country": "United States",
      "localtime": "2021-02-21 8:42",
      "cloud": '50%',
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "humidity": '65%',
      "temperature": "22 C",
      "Feel Like Temperature": "24 C"
    },
    "paris": {
      "name": "Paris",
      "country": "France",
      "localtime": "2021-02-21 8:42",
      "cloud": '60%',
      "text": "Cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/119.png",
      "humidity": '70%',
      "temperature": "25 C",
      "Feel Like Temperature": "27 C"
    },
    "tokyo": {
      "name": "Tokyo",
      "country": "Japan",
      "localtime": "2021-02-21 8:42",
      "cloud": '40%',
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "humidity": '60%',
      "temperature": "28 C",
      "Feel Like Temperature": "30 C"
    },

    "mumbai": {
      "name": "Mumbai",
      "country": "India",
      "localtime": "2021-02-21 8:42",
      "cloud": '70%',
      "text": "Humid",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '90%',
      "temperature": "33 C",
      "Feel Like Temperature": "40 C"
    },
    "delhi": {
      "name": "Delhi",
      "country": "India",
      "localtime": "2021-02-21 8:42",
      "cloud": '10%',
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "humidity": '45%',
      "temperature": "36 C",
      "Feel Like Temperature": "38 C"
    },
    "dubai": {
      "name": "Dubai",
      "country": "United Arab Emirates",
      "localtime": "2021-02-21 8:42",
      "cloud": '10%',
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "humidity": '40%',
      "temperature": "39 C",
      "Feel Like Temperature": "42 C"
    },
    "istanbul": {
      "name": "Istanbul",
      "country": "Turkey",
      "localtime": "2021-02-21 8:42",
      "cloud": '40%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '70%',
      "temperature": "28 C",
      "Feel Like Temperature": "30 C"
    },
    "chicago": {
      "name": "Chicago",
      "country": "United States",
      "localtime": "2021-02-21 8:42",
      "cloud": '30%',
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "humidity": '50%',
      "temperature": "25 C",
      "Feel Like Temperature": "26 C"
    },
    "abu_dhabi": {
      "name": "Abu Dhabi",
      "country": "United Arab Emirates",
      "localtime": "2021-02-21 8:42",
      "cloud": '10%',
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "humidity": '40%',
      "temperature": "38 C",
      "Feel Like Temperature": "41 C"
    },
  };
  
let inp = document.getElementById("inp")
let button = document.getElementById("btn")
let div = document.getElementById("main")

button.addEventListener("click",checking)

inp.addEventListener("keydown",(e)=>{
    if (e.key == "Enter") {
        checking()
    }
})

 function checking(){
    if (inp.value.toLowerCase() == 'london') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.london.name} </h1>
            <img src=${userObj.london.icon}>
            <p id="temp"> ${userObj.london.temperature} </p>
            <p> ${userObj.london.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.quetta.humidity} </p>
                <p id="p1"> ${userObj.quetta.cloud} </p>
            </div>
          </div>
        `
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'karachi') {
        div.innerHTML = `
           <div id="brand">
             <h1> ${userObj.karachi.name} </h1>
            <img src=${userObj.karachi.icon}>
            <p id="temp"> ${userObj.karachi.temperature} </p>

            <p> ${userObj.karachi.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
             <div id="text">
                <p id="p1"> ${userObj.quetta.humidity} </p>
                <p id="p1"> ${userObj.quetta.cloud} </p>
            </div>
           </div>
        `
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'lahore') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.lahore.name} </h1>
            <img src=${userObj.lahore.icon}>
            <p id="temp"> ${userObj.lahore.temperature} </p>
            <p> ${userObj.lahore.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
             <div id="text">
                <p id="p1"> ${userObj.quetta.humidity} </p>
                <p id="p1"> ${userObj.quetta.cloud} </p>
            </div>
          </div>
        `
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'peshawar') {
        div.innerHTML = `
            <div id="brand">
                <h1> ${userObj.peshawar.name} </h1>
            <img src=${userObj.peshawar.icon}>
            <p id="temp"> ${userObj.peshawar.temperature} </p>
    
            <p> ${userObj.peshawar.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
             <div id="text">
                <p id="p1"> ${userObj.quetta.humidity} </p>
                <p id="p1"> ${userObj.quetta.cloud} </p>
            </div>
            </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'quetta') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.quetta.name} </h1>
            <img src=${userObj.quetta.icon}>
            <p id="temp"> ${userObj.quetta.temperature} </p>
            <p> ${userObj.quetta.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.quetta.humidity} </p>
                <p id="p1"> ${userObj.quetta.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'dubai') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.dubai.name} </h1>
            <img src=${userObj.dubai.icon}>
            <p id="temp"> ${userObj.dubai.temperature} </p>
            <p> ${userObj.dubai.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.dubai.humidity} </p>
                <p id="p1"> ${userObj.dubai.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'delhi') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.delhi.name} </h1>
            <img src=${userObj.delhi.icon}>
            <p id="temp"> ${userObj.delhi.temperature} </p>
            <p> ${userObj.delhi.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.delhi.humidity} </p>
                <p id="p1"> ${userObj.delhi.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'mumbai') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.mumbai.name} </h1>
            <img src=${userObj.mumbai.icon}>
            <p id="temp"> ${userObj.mumbai.temperature} </p>
            <p> ${userObj.mumbai.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.mumbai.humidity} </p>
                <p id="p1"> ${userObj.mumbai.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'chicago') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.chicago.name} </h1>
            <img src=${userObj.chicago.icon}>
            <p id="temp"> ${userObj.chicago.temperature} </p>
            <p> ${userObj.chicago.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.chicago.humidity} </p>
                <p id="p1"> ${userObj.chicago.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'new york') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.new_york.name} </h1>
            <img src=${userObj.new_york.icon}>
            <p id="temp"> ${userObj.new_york.temperature} </p>
            <p> ${userObj.new_york.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.new_york.humidity} </p>
                <p id="p1"> ${userObj.new_york.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'tokyo') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.tokyo.name} </h1>
            <img src=${userObj.tokyo.icon}>
            <p id="temp"> ${userObj.tokyo.temperature} </p>
            <p> ${userObj.tokyo.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.tokyo.humidity} </p>
                <p id="p1"> ${userObj.tokyo.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else if (inp.value.toLowerCase() == 'paris') {
        div.innerHTML = `
          <div id="brand">
              <h1> ${userObj.paris.name} </h1>
            <img src=${userObj.paris.icon}>
            <p id="temp"> ${userObj.paris.temperature} </p>
            <p> ${userObj.paris.text} </p>
            <div id="images">
            <img id="icon" src="img/humidity.png" alt="">
            <img id="icon" src="img/cloud.png" alt="">
            </div>
            <div id="name">
                <p id="p">Humidity</p>
                <p id="p">Cloud</p>
            </div>
            <div id="text">
                <p id="p1"> ${userObj.paris.humidity} </p>
                <p id="p1"> ${userObj.paris.cloud} </p>
            </div>
          </div>
        `;
        inp.value=""
    }
    else{
        alert("No Result Found")
        inp.value = ""   
    }
}


