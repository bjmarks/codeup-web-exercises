(async function() {
    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 13,
        center: [ -97.47359623118516, 25.960196229794793]
    });

    function getLatLngFromAddress(address, token = accessToken) {
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
        return fetch(`${url}${encodeURIComponent(address)}.json?access_token=${token}`)
            .then(async function(res) {
                const data = await res.json();
                return data.features[0].center;
            });
    }
    let coords = await getLatLngFromAddress("Friendswood, TX");
    console.log(coords);

    const friendswood = new mapboxgl.Marker();
    friendswood.setLngLat(coords);
    friendswood.addTo(map);

    const ribot = new mapboxgl.Marker();
    ribot.setLngLat([14.0473, 40.9343])
    ribot.addTo(map);

    // when the zoom in button is clicked, decrease the map's zoom level
    const zoomIn = document.querySelector("#zoom-in");
    zoomIn.addEventListener("click", function (event) {
        let currentZoom = map.getZoom();
        currentZoom++;
        map.setZoom(currentZoom);
    });

    const zoomOut = document.querySelector("#zoom-out");
    zoomOut.addEventListener("click", function (event) {
        let currentZoom = map.getZoom();
        currentZoom--;
        map.setZoom(currentZoom);
    });

    document.querySelector("#drop-marker").addEventListener("click", function (event) {
        let popup = new mapboxgl.Popup();
        popup.setLngLat(map.getCenter())
        popup.setHTML("<h3 id='popup'>Codeup Rocks!</h3>")

        let marker = new mapboxgl.Marker();

        marker.setPopup(popup);
        marker.setLngLat(map.getCenter());
        marker.addTo(map);

    });

    placeMarkerAndPopup(alamoInfo, accessToken, map);

})();