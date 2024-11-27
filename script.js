const apiKey = 'a8c2d3d7a3ad65b65df6091a177ff74f'; 
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (!city) {
        weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        weatherInfo.innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}