// Mock Weather Widget for Mindelo
// Replace with real API integration if desired

document.addEventListener("DOMContentLoaded", () => {
    const weatherContainer = document.getElementById("weather-info");

    // Simulated weather data
    const weatherData = {
        temperature: "28°C",
        description: "Partly Cloudy",
        humidity: "65%",
        wind: "18 km/h",
    };

    weatherContainer.innerHTML = `
    <ul>
      <li><strong>Temperature:</strong> ${weatherData.temperature}</li>
      <li><strong>Conditions:</strong> ${weatherData.description}</li>
      <li><strong>Humidity:</strong> ${weatherData.humidity}</li>
      <li><strong>Wind:</strong> ${weatherData.wind}</li>
    </ul>
  `;

    // Optional: Toggle menu for mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
