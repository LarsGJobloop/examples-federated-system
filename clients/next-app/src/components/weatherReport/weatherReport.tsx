"use server"

import {RingLoader as LoadingIndicator} from 'react-spinners'
import type { WeatherReport } from "./weatherApi";

const WEATHER_API_ADDRESS = process.env.NEXT_PUBLIC_WEATHER_API_ADDRESS
const ENDPOINT = "/api/v1"

async function fetchReport(): Promise<WeatherReport[]> {
  const response = await fetch(WEATHER_API_ADDRESS + ENDPOINT + "/reports", {next: {revalidate: 10}})
  const data = response.json()
  return data
}

export async function WeatherReport() {
  let reports: null | WeatherReport[]
  try {
    reports = await fetchReport()
  } catch (error) {
    reports = null
    console.log(error)
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {reports !== null ? (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Time</th>
            <th scope="col" className="px-6 py-3">Summary</th>
            <th scope="col" className="px-6 py-3">Temperature</th>
          </tr>
        </thead>

        <tbody>
          {reports.map(report => (
            <tr key={report.id} className="odd:bg-white odd:-900 even:bg-gray-50 even:-800 border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {report.date}
                </th>
                <td className="px-6 py-4">
                  {report.summary}
                </td>
                <td className="px-6 py-4">
                  {report.temperatureC}&deg;C
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  )
}
