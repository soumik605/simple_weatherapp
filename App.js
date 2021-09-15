var input = document.querySelector(".text");
var cityname = document.querySelector(".name1");
var temp = document.querySelector(".temp1");
var main = document.querySelector(".main1");
var feelslike = document.querySelector(".feelslike1");
var humidity = document.querySelector(".humidity1");
var country = document.querySelector(".country1");
var windspeed = document.querySelector(".windspeed1");
var button = document.querySelector(".submit");

button.addEventListener("click", function (val) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&units=metric&appid=017291c1a57fa8a7cd4d8ec19170da4d"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var nameValue = data.name;

      var mainValue = data.weather[0].main;
      var tempValue = data.main.temp;
      var feelslikeValue = data.main.feels_like;
      var humidityValue = data.main.humidity;
      var countryValue = data.sys.country;
      var windspeedValue = data.wind.speed;

      main.innerHTML = mainValue;
      temp.innerHTML = tempValue+" °C" ;
      feelslike.innerHTML = feelslikeValue+" °C" ;
      humidity.innerHTML = humidityValue;
      country.innerHTML = countryValue;
      windspeed.innerHTML = windspeedValue+" km/h" ;

      cityname.innerHTML = nameValue;

      input.value = "";
    })
    .catch((err) => alert("No City Found"));
});
