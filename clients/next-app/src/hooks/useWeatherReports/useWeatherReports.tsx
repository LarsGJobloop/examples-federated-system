import { useEffect, useState } from "react";
import type { WeatherReport, WeatherApiError } from "./weatherApi";

const WEATHER_API_ADDRESS = process.env.NEXT_PUBLIC_WEATHER_API_ADDRESS
const ENDPOINT = "/api/v1"

async function fetchReport(): Promise<{ok: true, data: WeatherReport[]} | WeatherApiError> {
  const response = await fetch(WEATHER_API_ADDRESS + ENDPOINT + "/reports")

  if (!response.ok) {
    if (response.status < 500) {
      return {ok: false, type: "Client", context: response.statusText}
    } else if (response.status >= 500) {
      return {ok: false, type: "Server", context: response.statusText}
    }
  }

  try {
    const data = await response.json()
    return {ok: true, data}
  } catch (error) {
    return {ok: false, type: "Unkown", context: error}
  }
}

export type UseWeatherReportsProperties = {
  /**
   * Refresh interval in milli seconds
   */
  refreshInterval: number
}

export function useWeatherReports({refreshInterval}: UseWeatherReportsProperties) {
  const [reports, setReports] = useState<null | WeatherReport[]>(null)
  const [error, setError] = useState<null | WeatherApiError>(null)

  const latest = reports ? reports[0] : null
  const isLoading = reports || error ? false : true

  // Fetch on first load
  useEffect(() => {
    // IIFE -> https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    (async () => {
      const result = await fetchReport()
      if (!result.ok) {
        setError(result)
      } else {
        setReports(result.data)
      }
    })()
  }, [])

  // Refresh at interval
  useEffect(() => {
    const id = setInterval(async () => {
      if (!error) {
        const result = await fetchReport()
        if (!result.ok) {
          setError(result)
        } else {
          setReports(result.data)
        }
      }
    }, refreshInterval)

    // Clean up timer on unmount
    return () => clearInterval(id)
  }, [error, refreshInterval])

  // Function for forcing a refresh
  async function forceRefresh() {
    const result = await fetchReport()
    if (!result.ok) {
      setError(result)
    } else {
      setReports(result.data)
    }
  }

  return {
    isLoading,
    reports,
    latest,
    error,
    forceRefresh,
  }
}
