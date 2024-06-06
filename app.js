let userObj =  {
    "london": {
      "name": "London",
      "country": "United Kingdom", 
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature" : "30 C",
      "Feel Like Temperature" : "37 C"
    },
    "karachi": {
      "name": "Karachi",
      "country": "Pakistan", 
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature" : "30 C",
      "Feel Like Temperature" : "37 C"
    },
    "lahore": {
      "name": "Lahore",
      "country": "Pakistan", 
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature" : "30 C",
      "Feel Like Temperature" : "37 C"
    },
    "quetta": {
      "name": "Quetta",
      "country": "Pakistan", 
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature" : "30 C",
      "Feel Like Temperature" : "37 C"
    },
    "peshawar": {
      "name": "Peshawar",
      "country": "Pakistan", 
      "localtime": "2021-02-21 8:42",
      "cloud": '75%',
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "humidity": '82%',
      "temperature" : "30 C",
      "feelLikeTemperature" : "37 C"
    }
}
let inp = document.getElementById("inp")
let button = document.getElementById("btn")
let div = document.getElementById("main")

button.addEventListener("click", ()=>{
    if (inp.value.toLowerCase() == 'london') {
        div.innerHTML = `
            <h1> ${userObj.london.name} </h1>
            <img src=${userObj.london.icon}>
            <p> ${userObj.london.temperature} </p>
            <p> ${userObj.london["Feel Like Temperature"]} </p>
            <p> ${userObj.london.text} </p>
            <p> ${userObj.london.humidity} </p>
            <p> ${userObj.london.cloud} </p>
        `
    }
    else if (inp.value.toLowerCase() == 'karachi') {
        div.innerHTML = `
            <h1> ${userObj.karachi.name} </h1>
            <img src=${userObj.karachi.icon}>
            <p> ${userObj.karachi.temperature} </p>
            <p> ${userObj.karachi["Feel Like Temperature"]} </p>
            <p> ${userObj.karachi.text} </p>
            <p> ${userObj.karachi.humidity} </p>
            <p> ${userObj.karachi.cloud} </p>
        `
    }
    else if (inp.value.toLowerCase() == 'lahore') {
        div.innerHTML = `
            <h1> ${userObj.lahore.name} </h1>
            <img src=${userObj.lahore.icon}>
            <p> ${userObj.lahore.temperature} </p>
            <p> ${userObj.lahore["Feel Like Temperature"]} </p>
            <p> ${userObj.lahore.text} </p>
            <p> ${userObj.lahore.humidity} </p>
            <p> ${userObj.lahore.cloud} </p>
        `
    }
    else if (inp.value.toLowerCase() == 'peshawar') {
        div.innerHTML = `
            <h1> ${userObj.peshawar.name} </h1>
            <img src=${userObj.peshawar.icon}>
            <p> ${userObj.peshawar.temperature} </p>
            <p> ${userObj.peshawar["Feel Like Temperature"]} </p>
            <p> ${userObj.peshawar.text} </p>
            <p> ${userObj.peshawar.humidity} </p>
            <p> ${userObj.peshawar.cloud} </p>
        `
    }
    else if (inp.value.toLowerCase() == 'quetta') {
        div.innerHTML = `
            <h1> ${userObj.quetta.name} </h1>
            <img src=${userObj.quetta.icon}>
            <p> ${userObj.quetta.temperature} </p>
            <p> ${userObj.quetta["Feel Like Temperature"]} </p>
            <p> ${userObj.quetta.text} </p>
            <p> ${userObj.quetta.humidity} </p>
            <p> ${userObj.quetta.cloud} </p>
        `
    }
})