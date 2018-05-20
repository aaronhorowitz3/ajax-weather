var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
var key = '&APPID=0c283f3ffb1f9ace6fffe75b9ec5137a';

$('form').on('submit', function(e){
  e.preventDefault();
  var city = $('#city').val();

  $.ajax({
    method: 'GET',
    url: `${weatherUrl}${city}${key}`,
    success: function(response) {
      console.log(response);
      var kel = response.main.temp;
      var fahr = parseInt(9/5 * (kel-273) + 32);
      $('#temp').text('The temperature in ' + city + ' is ' + fahr);
    },
    error: function(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
    }
  })
});
