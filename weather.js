// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL with coordinates for Trier, Germany
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=dc859def446598f0e4bb8581426ef7fb';

// Fetch data from the API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // for testing only
            displayResults(data); // show results on the page
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display weather results
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
    const icon = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

// Run the fetch function
apiFetch();