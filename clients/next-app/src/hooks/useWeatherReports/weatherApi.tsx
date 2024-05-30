export type WeatherReport = {
    "id": string
    "date": string,
    "summary": string,
    "temperatureC": number
}

export type WeatherApiError = 
    | {ok: false, type: "Client", context: unknown}
    | {ok: false, type: "Server", context: unknown}
    | {ok: false, type: "Network", context: unknown}
    | {ok: false, type: "Unkown", context: unknown}
