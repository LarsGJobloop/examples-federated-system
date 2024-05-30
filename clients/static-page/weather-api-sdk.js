const WEATHER_API_ADDRESS = {
  dev: "http://localhost:8080",
  prod: "https://lgas-jobloop-federated-api.azurewebsites.net",
}
const ENDPOINT = "/api/v1/reports"

/**
 * @typedef {{
 *  id: string
 *  date: string
 *  summary: string,
 *  temperatureC: number
 * }} WeatherReport
 */

async function fetchWrapper(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

/**@param {"dev" | "prod"} environment */
export async function weatherApi(environment = "dev") {
  /**@type {WeatherReport} */
  let latest = await fetchWrapper(WEATHER_API_ADDRESS[environment] + ENDPOINT + "/current")
  
  async function refresh() {
    latest = await fetchWrapper(WEATHER_API_ADDRESS[environment] + ENDPOINT + "/current")
  }

  return {
    latest,
    refresh,
  }
}
