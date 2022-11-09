const apiKey = "335a8a39a3281df7c50e7f934988de31"
const lati = 	13.067439
const long = 	80.237617
const currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${apiKey}`)
const data = currentWeather.map((weath) => weath)
const temp = data.weather.main

console.log(temp-273)