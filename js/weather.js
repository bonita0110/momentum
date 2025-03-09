const API_KEY = "1c705596f264463c6a6898edc56f29bd";

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(url);
    fetch(url).then(response => response.json().then(data => {
        const geo = document.querySelector("#geo");
        geo.innerText = data.name + ", " + data.weather[0].main;
    }));
}

function onGeoError() {
    alert("Can't find your location.\n Please Try Again");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);