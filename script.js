/* Converting Celsius to Fahrenheit */
var temperatureInCelsius = 40;
var conversionCelToF = (temperatureInCelsius * 9) / 5 + 32;
var celsiusToFahrenheit = conversionCelToF;

/* Converting Fahrenheit to Celsius */
var temperatureInFahrenheit = 104;
var conversionFToCel = ((temperatureInFahrenheit - 32) * 5) / 9;
var fahrenheitToCelsius = conversionFToCel;

/*Displaying output in console */
console.log("Temperature of " + temperatureInCelsius + " celsius, will be " + celsiusToFahrenheit + " fahrenheit");
console.log("Temperature of " + temperatureInFahrenheit + " fahrenheit, will be " + fahrenheitToCelsius + " celsius");