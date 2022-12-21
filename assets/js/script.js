var searchBtn = $('#search-Btn');
var APiKey = "6074574540fec36afd3d16e027c83449";
var city;

// api calls variable 
var currentWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APiKey;

var fiveDayForecast = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APiKey;

$(function() {
    searchBtn.on('click', function(event) {
        event.preventDefault();
        var userInput = $('#user-input').val();
        if (userInput) {
            city = userInput
            localStorage.setItem('City Name', city)
        }
    })
});