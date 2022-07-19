const geo = document.getElementById("geo");
const search = document.getElementById("search");
// const submit = document.getElementById("submit");
const token = 'pk.eyJ1IjoiYmptYXJrczEzIiwiYSI6ImNsNW1sa2VtejB1ZngzbG53NmFwNDRxbmcifQ.kC255Txl7bjL18qkAFIj6w';
const api = "ca68c23ce9e123ebdbd9ff8fd767a92a";
let lon = -98.491142;
let lat = 45.424349;
geo.addEventListener("click", function getCurrentLocation() {
if (navigator.geolocation) {
        console.log("geolocation");
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
        })
    }
else {
    alert("cant get geolcation on this device");
}
    console.log(lon);
    console.log(lat);
    renderMap({center:lon,lat});
    renderWeather(lon, lat);
    geo.innerText = `confirm your geolocation?`;
});
search.addEventListener("input", getLatLngFromAddress);
// submit.addEventListener("click", function (){})
function renderMap() {
    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/bjmarks13/cl5oonlkd008n14l1q9u9d1tv',
        zoom: 10,
        center: [ lon, lat ]
    });
}
renderMap();
function renderWeather() {
    let temperature = document.querySelectorAll(".temp");
    let summary = document.querySelectorAll(".summary");
    let icon = document.querySelectorAll(".icon");
    const base = `http://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${api}&units=imperial`;
        // console.log(base);
        fetch(base).then((response) => { return response.json()}).then((data) => {
            // console.log(data);
                for (let i = 0; i < 7; i++) {
                temperature[i].textContent = data.daily[i].temp.day + "°F";
                summary[i].textContent = data.daily[i].weather[0].description;
                let icon1 = data.daily[i].weather[0].icon;
                icon[i].innerHTML = `<img src="http://openweathermap.org/img/wn/${icon1}.png" style= 'height:10rem'>`;
        }
    });
}
renderWeather();
async function getLatLngFromAddress() {
    console.log(search.value)
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return fetch(`${url}${encodeURIComponent(search.value)}.json?access_token=${token}`)
        .then(async function(res) {
            const data = await res.json();
            console.log(data.features[0].center)
            lon = data.features[0].center[0];
            lat = data.features[0].center[1];
            renderMap({center: lon , lat});
            renderWeather(lon, lat)
        }).catch(()=>{console.log("cant find place")});
}
    // let coords = await getLatLngFromAddress("Friendswood, TX");
    // console.log(coords);
    // const friendswood = new mapboxgl.Marker();
    // friendswood.setLngLat(coords);
    // friendswood.addTo(map);
    // const ribot = new mapboxgl.Marker();
    // ribot.setLngLat([14.0473, 40.9343])
    // ribot.addTo(map);
    // const zoomIn = document.querySelector("#zoom-in");
    // zoomIn.addEventListener("click", function (event) {
    //     let currentZoom = map.getZoom();
    //     currentZoom++;
    //     map.setZoom(currentZoom);
    // });
    // const zoomOut = document.querySelector("#zoom-out");
    // zoomOut.addEventListener("click", function (event) {
    //     let currentZoom = map.getZoom();
    //     currentZoom--;
    //     map.setZoom(currentZoom);
    // });
    // document.querySelector("#drop-marker").addEventListener("click", function (event) {
    //     let popup = new mapboxgl.Popup();
    //     popup.setLngLat(map.getCenter())
    //     popup.setHTML("<h3 id='popup'>Codeup Rocks!</h3>")
    //     let marker = new mapboxgl.Marker();
    //     marker.setPopup(popup);
    //     marker.setLngLat(map.getCenter());
    //     marker.addTo(map);
    // });
    // placeMarkerAndPopup(alamoInfo, accessToken, map);

// });