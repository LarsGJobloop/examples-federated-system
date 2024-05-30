import { weatherApi } from './weather-api-sdk.js'

const weatherWidget = document.getElementById("widget-weather")

const weather = await weatherApi("prod")

weatherWidget
  .querySelector('[data-widget-weather="summary"] > span')
  .textContent = weather.latest.summary
weatherWidget
  .querySelector('[data-widget-weather="temperature"] > span')
  .textContent = weather.latest.temperatureC + "°C"
weatherWidget
  .dataset.loading = false
