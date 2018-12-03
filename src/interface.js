$(document).ready(function(){
	var thermostat = new Thermostat();
	updateTemperature();
	displayWeather('London');

	 $.get('http://localhost:3000/', function(data) {
	 	thermostat.temperature = JSON.parse(data).temp;
	 	$('#temperature').text(JSON.parse(data).temp + '°');
	 });

	 function sendTemp() {
	 	var data = {temp: thermostat.getCurrentTemperature()};
	 	$.post('http://localhost:3000/update', data);
	 };

	$('#temperature-up').click(function() {
		thermostat.up();
		updateTemperature();
		sendTemp();
	});

	$('#temperature-down').click(function(){
		thermostat.down();
		updateTemperature();
		sendTemp();
	});
	$('#temperature-reset').click(function(){
		thermostat.resetTemperature();
		updateTemperature();
	});

	$('#powersaving-on').click(function(){
		thermostat.switchPowerSavingModeOn();
		$('#power-saving-status').text('ON')
		updateTemperature();		
	});

	$('#powersaving-off').click(function(){
		thermostat.switchPowerSavingModeOff();
		$('#power-saving-status').text('OFF')
		updateTemperature();
	});

	function updateTemperature() {
		$('#temperature').text(thermostat.getCurrentTemperature() + '°');
		$('#temperature').attr('class', thermostat.energyUsage());
	};

	function displayWeather(city) {
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 		var token = '&appid=e39f07abdc663f3927948965d78f5d70';
 		var units = '&units=metric';
 		$.get(url + token + units, function(data) {
   		  $('#current-temperature').text(data.main.temp + '°' );
   	    })
   	};

	$('#current-city').change(function(event) {
		event.preventDefault();
		var city = $('#current-city').val();
		displayWeather(city);
	});
});