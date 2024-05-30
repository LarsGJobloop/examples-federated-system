"use client"

import {RingLoader as LoadingIndicator} from 'react-spinners'

import { useWeatherReports } from "@/hooks/useWeatherReports/useWeatherReports"

export function WeatherWidget() {
  const { isLoading, latest, reports, forceRefresh} = useWeatherReports({ refreshInterval: 60 * 1000 })

  return (
    <div className='bg-slate-300 px-2 py-1 rounded-md shadow-md w-fit'>
      <p>Weather</p>
      {
        isLoading ? (
          <>
            <p>Summary: <span className='min-w-8'><LoadingIndicator size="1em" /></span></p>
            <p>Temperature: <span className='min-w-8'><LoadingIndicator size="1em" /></span></p>
          </>
        ) : (
          <>
            <p>Summary: <span className='min-w-8'>{latest?.summary}</span></p>
            <p>Temperature: <span className='min-w-8'>{latest?.temperatureC}&deg;C</span></p>
          </>
        )
      }
      <button onClick={forceRefresh}>⟳</button>
    </div>
  )
}
