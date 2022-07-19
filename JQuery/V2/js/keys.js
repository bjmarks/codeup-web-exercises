// "use strict";
// (function() {
    //fetch(`${OPENWEATHER_ENDPOINT}?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${OPENWEATHER_API_KEY}&units=imperial&cnt=5`)
const token = 'ca68c23ce9e123ebdbd9ff8fd767a92a';
let queryParams = new URLSearchParams({
    APPID: token,
    lat:    29.423017,
    lon:   -98.48527,
    units: "metric"
});
const url = "https://api.openweathermap.org/data/2.5/onecall?" + queryParams;
console.log(url);
fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
});
//})()



// OpenWeatherMap API
// In this section we will work with an API from OpenWeatherMap. This API offers a variety of information for free, including current weather data, 5 day forecast information, and can even be used to upload data from your own weather station.
// The first thing to do is to sign up with OpenWeatherMap. Once you register, you will be given an API Key it might look like 467fce2fbe4d967cacd8c8886374905a. This ID is how we will identify ourselves to the API when we make our requests, the previous API key is just an example and it might not work anymore.
// Most APIs will require the use of an App ID or API Key and will return an error if it is omitted or an invalid key is sent. OpenWeatherMap is unique in that it... does not. Even though OpenWeatherMap will respond with correct data without providing an APPID, it is still good practice to include it, in case their requirements change or rate limits start being enforced.
// Protecting API Keys
// A good practice as developers to avoid pushing confidential information like API Keys is to create a separate keys.js file, add variables and a values to this file that represent the string values of those API keys. Always making sure that this file is added to a .gitignore file that way it never get pushed to a public repository.

// const MAPBOX_KEY = 'pk.ASDQWE@#$';
// const OPEN_WEATHER_APPID = "2344ZXCERWETA";
// const LINKEDIN_KEY = "34234ASDAD45";
// We use const to avoid this variables to be reassigned, read more about constants here we will talk about them more in detail later in the course.
// Pulling San Antonio Weather
// We can query for San Antonio weather data by sending an ajax GET request and including q: San Antonio, US like the following:
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// });
// Remember, there are a lot of different ways we can format this request. All of the following ajax calls are identical to the one above.
// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather",
//     type: "GET",
//     data: {
//         APPID: OPEN_WEATHER_APPID,
//         q:     "San Antonio, US"
//     }
// });
// $.ajax("http://api.openweathermap.org/data/2.5/weather", {
//     data: {
//         APPID: OPEN_WEATHER_APPID,
//         q:     "San Antonio, US"
//     }
// });

// $.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + OPEN_WEATHER_APPID + "&q=San+Antonio,+US");
// When you start exploring a new API, it is important to learn what data is sent back from each request. We can exploring this information using console.log() inside of a .done() handler:


// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
// Much of this information seems relatively obvious, such as lat, lon, country, etc. Some of the other pieces are less clear. If any part of an API request is confusing, remember to always go back to the documentation. Notice that the temperature is expressed in Kelvin. We can change that by passing yet another parameter to the request.

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US",
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
// });
// Our temperature should now be coming back in degrees fahrenheit. Let's look at other ways we can request this information. In particular, from the data we can see that San Antonio has an id of "4726206". We can use that to look up weather information as well:


// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     id:     4726206,
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
// });
// A list of city ID city.list.json.gz can be downloaded here

// We will get the same information back as before. We can also look information by its latitude and longitude:


// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial"
// }).done(function(data) {
//     console.log('current weather', data);
// });
// Latitude and longitude have the advantage that we can look up weather information for any place on earth, even if we do not know its name or id. Let's look at how we could get forecast information using those same coordinates:


// $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial"
// }).done(function(data) {
//     console.log('5 day forecast', data);
// });
// This time we have changed what URL we are sending our request to. The URL you send API requests to is often called its endpoint. We have separate endpoints for each type of API request we can send.

// Like we did when we first started exploring the current weather conditions, be sure to take a look at the data our request returns.

// OpenWeatherMap provides a third example of an endpoint we could send our request to - let's see how we could use this One Call API to, as OpenWeather puts it, "get all your essential weather data" for a location:


// $.get("http://api.openweathermap.org/data/2.5/onecall", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial"
// }).done(function(data) {
//     console.log('The entire response:', data);
//     console.log('Diving in - here is current information: ', data.current);
//     console.log('A step further - information for tomorrow: ', data.daily[1]);
// });
// Pretty useful for our purposes! The One Call API documentation lists all the data that can come back in this response. Again, be sure to familiarize yourself with the data that is returned from your request.
// Exercise

// Create a new HTML file called weather_map.html.
// As you complete each step, commit your changes and push them to GitHub.
// Using HTML, CSS, jQuery, AJAX, and the OpenWeatherMap API, start by showing the current conditions for city you live in on your page.
// Update your layout and AJAX request(s) to display a five day forecast for the city you live in that looks like the screenshot below.
// If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.
// Refer to your Mapbox API exercise. Recreate the map below your 5 day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).
// Add a Mapbox text input to search by location and have the forecast update when a new location is searched.
// As a bonus make sure you can update the marker's position to the new search result.
// See a couple of examples here:

// 5 Day Forecast Map 5 Day Forecast Map Demo
// Previous Mapbox API
// Next Personal Site





let x = document.getElementById("x");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }