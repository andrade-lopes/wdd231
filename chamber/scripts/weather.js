// scripts/weather.js
const apiKey = "dc859def446598f0e4bb8581426ef7fb"; // Substitua pela sua chave da OpenWeatherMap
const lat = 16.8901; // Latitude de Mindelo
const lon = -24.9804; // Longitude de Mindelo
const units = "metric"; // Celsius
const weatherBox = document.getElementById('weatherBox');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erro ao buscar dados do tempo");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Erro:", error);
        document.querySelector("#weather").textContent = "Tempo indisponível.";
    }
}

function displayWeather(data) {
    const weatherBox = document.querySelector("#weather");
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherBox.innerHTML = `
        <h3>Tempo em Mindelo</h3>
        <p><img src="${iconSrc}" alt="${description}"> ${temp}°C - ${description}</p>
    `;
}

getWeather();