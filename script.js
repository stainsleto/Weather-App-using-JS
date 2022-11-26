const apiKey = "335a8a39a3281df7c50e7f934988de31"
const lati = 	13.067439
const long = 	80.237617
const currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${apiKey}`)
const allData = currentWeather.then(response => response.json());
const data = allData.then( (daata) => {
    document.getElementById("weather-info").textContent = daata.weather[0].main;
    const temperature = daata.main.temp - 273;
    document.getElementById("temperature").textContent = temperature.toFixed(2);
    const mb = " mb";
    document.getElementById("pressure").textContent = daata.main.pressure + mb;
    const per = " %";
    document.getElementById("humidity").textContent = daata.main.humidity + per;
    const km = " Km";
    document.getElementById("visiblity").textContent = daata.visibility/1000 +km ;
});
console.log(allData)

