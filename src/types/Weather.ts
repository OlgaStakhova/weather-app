export interface WeatherDay {
    date: string,
    symbolPhrase: string,
    maxTemp:number,
    minTemp: number,
    maxWindSpeed: number,
    cloudiness: number,
    sunrise: string,
    sunset: string,
}

export interface WeatherChartItem {
    date: string,
    averageTemp: number,
};

export interface Weather {
    weatherList: WeatherDay[],
    weatherDay: WeatherDay,
    weatherChart: WeatherChartItem[],
}