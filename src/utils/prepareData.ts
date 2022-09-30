import { WeatherItemResp } from "../types/ResponseType"
import { Weather } from "../types/Weather"

export const prepareWeatherData = (data: WeatherItemResp[]): Weather => {

    return {
        weatherList: data.map(item => {
            return {
                date: item.date,
                symbolPhrase: item.symbolPhrase,
                maxTemp: item.maxTemp,
                minTemp: item.minTemp,
                maxWindSpeed: item.maxWindSpeed,
                cloudiness: item.cloudiness,
                sunrise: item.sunrise,
                sunset: item.sunset,
            }
        }),
        weatherDay: {
            date: data[0].date,
            symbolPhrase: data[0].symbolPhrase,
            maxTemp: data[0].maxTemp,
            minTemp: data[0].minTemp,
            maxWindSpeed: data[0].maxWindSpeed,
            cloudiness: data[0].cloudiness,
            sunrise: data[0].sunrise,
            sunset: data[0].sunset,
        },
        weatherChart: data.map(item => {
            return {
                date: item.date,
                averageTemp: (item.maxTemp + item.minTemp) / 2,
            }
        }),
    }
}