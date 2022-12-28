$(function() {

// variables 
let searchBtn = $('#search-Btn');
let APiKey = "6074574540fec36afd3d16e027c83449";
let currentDate = dayjs().format('(M/DD/YYYY) ☀️');
let city;

// five day forecast data
function fiveDayData() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APiKey)
    .then(res => {
        return res.json()
    })
    .then(data => {
        // day 1 date 
        let day1DateTxt = data.list[0].dt_txt.split(' ').slice(0, 1).join(' ');
        let date1 = dayjs(day1DateTxt).format('MM/DD/YYYY')
        $('#date-1').empty(date1).append(date1)

        // day 1 data
       let day1Temperature = data.list[0].main.temp;
       $('#day1-temp').empty('Temp:' + " " + day1Temperature).append('Temp:' + " " + day1Temperature);

       let day1WindSpeed = data.list[0].wind.speed;
       $('#day1-wind').empty('Wind:' + " " + day1WindSpeed + " MPH").append('Wind:' + " " + day1WindSpeed + " MPH")

        let day1Humidity = data.list[0].main.humidity; 
        $('#day1-humidity').empty('Humidity:' + " " + day1Humidity + " %").append('Humidity:' + " " + day1Humidity + " %")

    // day 2 date
    let day2DateTxt = data.list[7].dt_txt.split(' ').slice(0, 1).join(' ');
    let date2 = dayjs(day2DateTxt).format('MM/DD/YYYY')
    $('#date-2').empty(date2).append(date2)
    
    // day 2 data
    let day2Temperature = data.list[7].main.temp;
    $('.day2-temp').empty('Temp:' + " " + day2Temperature).append('Temp:' + " " + day2Temperature)

    let day2WindSpeed = data.list[7].wind.speed;
    $('.day2-wind').empty('Wind:' + " " + day2WindSpeed + " MPH").append('Wind:' + " " + day2WindSpeed + " MPH")

    let day2Humidity = data.list[7].main.humidity;
    $('.day2-humidity').empty('Humidity:' + ' ' + day2Humidity + "%").append('Humidity:' + ' ' + day2Humidity + "%")

    // day 3 date
    let day3DateTxt = data.list[15].dt_txt.split(' ').slice(0, 1).join(' ');
    let date3 = dayjs(day3DateTxt).format('MM/DD/YYYY')
    $('#date-3').empty(date3).append(date3)
    
    // day 3 data
    let day3Temperature = data.list[15].main.temp; 
    $('.day3-temp').empty('Temp:' + ' ' + day3Temperature).append('Temp:' + ' ' + day3Temperature)
    
    let day3WindSpeed = data.list[15].wind.speed;
    $('.day3-wind').empty('Wind:' + ' ' + day3WindSpeed + " MPH").append('Wind:' + ' ' + day3WindSpeed + " MPH")
    
    let day3Humidity = data.list[15].main.humidity; 
    $('.day3-humidity').empty('Humidity:' + ' ' + day3Humidity + "%").append('Humidity:' + ' ' + day3Humidity + "%")

    // day 4 date
    let day4DateTxt = data.list[23].dt_txt.split(' ').slice(0, 1).join(' ');
    let date4 = dayjs(day4DateTxt).format('MM/DD/YYYY')
    $('#date-4').empty(date4).append(date4)
    
    // day 4 data
    let day4Temperature = data.list[23].main.temp;
    $('.day4-temp').empty('Temp:' + ' ' + day4Temperature).append('Temp:' + ' ' + day4Temperature)

    let day4WindSpeed = data.list[23].wind.speed;
    $('.day4-wind').empty('Wind:' + " " + day4WindSpeed + " MPH").append('Wind:' + " " + day4WindSpeed + " MPH")

    let day4Humidity = data.list[23].main.humidity; 
    $('.day4-humidity').empty('Humidity:' + " " + day4Humidity + "%").append('Humidity:' + " " + day4Humidity + "%")

    // day 5 date
    let day5DateTxt = data.list[31].dt_txt.split(' ').slice(0, 1).join(' ');
    let date5 = dayjs(day5DateTxt).format('MM/DD/YYYY')
    $('#date-5').empty(date5).append(date5)
    
    // day 5 data
    let day5Temperature = data.list[31].main.temp;
    $('.day5-temp').empty('Temp:' + " " + day5Temperature).append('Temp:' + " " + day5Temperature)

    let day5WindSpeed = data.list[31].wind.speed;
    $('.day5-wind').empty('Wind:' + " " + day5WindSpeed + " MPH").append('Wind:' + " " + day5WindSpeed + " MPH")

    let day5Humidity = data.list[31].main.humidity; 
    $('.day5-humidity').empty('Humidity:' + " " + day5Humidity + "%").append('Humidity:' + " " + day5Humidity + "%")

    });
}

// five day forecast boxes
function fiveDayForecast() {
    $('#forecast').removeClass('five-day-forecast').addClass('five-day-forecast')
    $('#five-day-title').empty('5-Day Forecast:').append('5-Day Forecast:')

// day 1 
    $('#day1-content').removeClass('day-1').addClass('day-1');
    
// day 2 
    $('#day2-content').removeClass('day-2').addClass('day-2')
    
// day 3
    $('#day3-content').removeClass('day-3').addClass('day-3')
    
// day 4
    $('#day4-content').removeClass('day-4').addClass('day-4')
    
// day 5
   $('#day5-content').removeClass('day-5').addClass('day-5')
    
}

// current weather data
function displayData() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APiKey)
.then(res =>  {
    return res.json()
})
.then(data => {
   let temperature = data.main.temp;
   let windSpeed = data.wind.speed; 
   let humidity = data.main.humidity;

   $('#temp-value').empty("Temp: " + temperature).append("Temp: " + temperature)
   $('#wind-value').empty("Wind: " + windSpeed + " " + "MPH").append("Wind: " + windSpeed + " " + "MPH")
   $('#humidity-value').empty(`Humidity: ${humidity} %`).append(`Humidity: ${humidity} %`)

})
}

// Search history
  function searchHistory() {

    $('.city-history').each(function() {
        let textHistory = $(this).attr('id')
        $(this).on("click", function() {
            city = textHistory
            $('#current-weather-content').removeClass('container').addClass('container');
            $('#current-date').empty(city + " " + currentDate).append(city + " " + currentDate);
            displayData();
            fiveDayForecast();
            fiveDayData()
        })
    })
  }

// Search for a city 
    searchBtn.on('click',(event) => {
        event.preventDefault();
        let userInput = $('#user-input').val();

    if (userInput) {
        city = userInput;
        $('#current-weather-content').removeClass('container').addClass('container')
        $('#current-date').empty(city + " " + currentDate).append(city + " " + currentDate)
        displayData();
        fiveDayForecast();
        fiveDayData()

    } else {
        alert('Please enter a city name')
    }
});

searchHistory();
});