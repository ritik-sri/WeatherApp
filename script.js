const submitBtn = document.querySelector("#submit");
const city = document.querySelector("#city");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const weatherInfo = document.querySelector("#weather-info");

submitBtn.addEventListener("click", function() {
  const APIKey = "YOUR_API_KEY_HERE";
  const cityName = city.value;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      
      temperature.textContent = `Temperature: ${temp}°C`;
      description.textContent = `Description: ${desc}`;
      weatherInfo.style.display = "block";
    })
    .catch(error => {
      alert("City not found. Please try again.");
    });
});
