function getWeather(){
    const apiKey = "335a8a39a3281df7c50e7f934988de31";
    
    // Geo API  ------------------------ Begins ------

    const city = document.getElementById('city-input').value;
    console.log(city)
    const country = "India"; 
    const geo = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${apiKey}`);
    const geoData = geo.then( (response) => response.json());
    const lati = geoData.then((data) => data[0].lat);
    const longi = geoData.then( (data) => data[0].lon);
    console.log(lati)
    console.log(longi)

     // Geo API  ------------------------ Ends ----------- 

    const currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}`)
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
        document.getElementById("wind-speed-value").textContent = (daata.wind.speed) + " Km/h" ;
        document.getElementById("temp-min-value").textContent = (daata.main.temp_min - 273).toFixed(0) + "°C";
        document.getElementById("temp-max-value").textContent = (daata.main.temp_max - 273).toFixed(0) + "°C";
    });

    console.log(allData)


}