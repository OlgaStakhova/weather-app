export interface CityResponse {
    locations: CityItemResp[],
}

interface CityItemResp {
    adminArea: string,
    adminArea2: boolean,
    adminArea3: boolean,
    country: string,
    id: number,
    language: string
    lat: number
    lon: number
    name: string,
    timezone: string,
}

export interface WeatherResponse {
    forecast: WeatherItemResp[],
}

export type ResponseWeather = {
    forecast: WeatherItemResp[],
}

export interface WeatherItemResp {
    cloudiness: number,
    confidence: string,
    date: string,
    maxDewPoint?: number,
    maxFeelsLikeTemp?: number,
    maxRelHumidity?: number,
    maxTemp: number,
    maxWindGust?: number,
    maxWindSpeed: number,
    minDewPoint?: number,
    minFeelsLikeTemp?: number,
    minRelHumidity?: number,
    minTemp: number,
    minVisibility?: number,
    moonPhase?: number,
    moonrise?: string,
    moonset?: string,
    precipAccum?: number,
    precipProb?: number,
    pressure?: number,
    snowAccum?: number,
    solarRadiationSum?: number,
    sunrise: string,
    sunriseEpoch?: number,
    sunset:string,
    sunsetEpoch?: number,
    symbol?: string,
    symbolPhrase: string,
    uvIndex?: number,
    windDir?: number,
}