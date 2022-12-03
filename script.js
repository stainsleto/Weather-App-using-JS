// const hero = document.getElementById('hero');

// if (document.getElementById('city-form').value == "" ){
//     hero.hide()
// }
// else{
//     hero.show()
// }


function getWeather(){
    const apiKey = config.apiKey;
    

    const city = document.getElementById('city-input').value;  // city Info

    const currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const allData = currentWeather.then(response => response.json());
    
    const data = allData.then( (daata) => {
        document.getElementById("weather-info").textContent = daata.weather[0].main;
        const temperature = (daata.main.temp - 273).toFixed(0)+ '°C';
        document.getElementById("temperature").textContent = temperature;
        const mb = " mb";
        document.getElementById("pressure").textContent = daata.main.pressure + mb;
        const per = " %";
        document.getElementById("humidity").textContent = daata.main.humidity + per;
        const km = " Km";
        document.getElementById("visiblity").textContent = daata.visibility/1000 +km ;
        document.getElementById("city").textContent = daata.name;
        document.getElementById("weather-description").textContent = daata.weather[0].description;
        document.getElementById("wind-speed-value").textContent = (daata.wind.speed) + " Km/h" ;
        document.getElementById("temp-min-value").textContent = (daata.main.temp_min - 273).toFixed(0) + "°C";
        document.getElementById("temp-max-value").textContent = (daata.main.temp_max - 273).toFixed(0) + "°C";
    });

    console.log(allData)


}