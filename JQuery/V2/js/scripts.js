let temperature = document.querySelectorAll(".temp");
let summary = document.querySelectorAll(".summary");
let icon = document.querySelectorAll(".icon");
const api = "ca68c23ce9e123ebdbd9ff8fd767a92a";
// console.log(lon + lat);
// const base = `http://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${api}&units=imperial`;
const base = `http://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${api}&units=imperial`;
    console.log(base);
    fetch(base).then((response) => { return response.json()}).then((data) => {
        console.log(data);
        for (let i = 0; i < 5; i++) {
            temperature[i].textContent = data.current.temp + "°F";
            summary[i].textContent = data.current.weather[0].description;
            let icon1 = data.current.weather[0].icon;
            icon[i].innerHTML = `<img src="http://openweathermap.org/img/wn/${icon1}.png" style= 'height:10rem'>`;
    }
  });
// Calling API by city ID
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}