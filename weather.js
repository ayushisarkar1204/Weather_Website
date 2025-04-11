const weatherData = {
    "Jaipur": { temp: 22, humidity: 60, description: "Sunny" },
    "Ahmedabad": { temp: 18, humidity: 75, description: "Cloudy" },
    "West Bengal": { temp: 26, humidity: 70, description: "Rainy" },
    "Delhi": { temp: 35, humidity: 50, description: "Hot" },
    "Chennai": { temp: 20, humidity: 65, description: "Windy" }
};

function getWeather() {
    const city = document.getElementById('city').value.trim();
    
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const weather = weatherData[city];

    if (weather) {
        document.getElementById('weather-info').innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${weather.temp}°C</p>
            <p>Humidity: ${weather.humidity}%</p>
            <p>Weather: ${weather.description}</p>
        `;
    } else {
        document.getElementById('weather-info').innerHTML = `<p style="color: red;">City not found in database</p>`;
    }
}
