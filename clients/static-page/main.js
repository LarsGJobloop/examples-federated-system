// Since this is a static page we are relying on
// the api server not moving from this hardcoded address
const WEATHER_API_ADDRESS = "http://localhost:8080"

const weatherWidget = document.getElementById("widget-weather")

const weatherReportResponse = await fetch(WEATHER_API_ADDRESS + "/api/v1/reports/current")
const weatherReport = await weatherReportResponse.json()

weatherWidget.querySelector('[data-widget-weather="description"]')
.textContent = weatherReport.summary
weatherWidget.querySelector('[data-widget-weather="temperature"]')
  .textContent = weatherReport.temperatureC + "°C"
