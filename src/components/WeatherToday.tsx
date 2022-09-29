import { FC } from "react";
import { useSelector } from "react-redux";
import { getWeatherDay } from "../store/store";

export const WeatherToday: FC = () => {
    const weatherDay = useSelector(getWeatherDay);

    return (
        <div className="wether-today">
            <h2 className="title is-4">Weather today</h2>
            {weatherDay ?
                <div className="wrapperWeatherDay">
                    <div className="weatherParth">
                        <p>
                            <span className="tag is-info is-light is-medium">Date: </span>
                            {weatherDay.date}
                        </p>
                        <p>
                            <span className="tag is-info is-light is-medium">Info: </span>
                            {weatherDay.symbolPhrase}
                        </p>
                    </div>
                    <div className="weatherParth">
                        <p>
                            <span className="tag is-info is-light is-medium">Max temp: </span>
                            {weatherDay.maxTemp} ºC
                        </p>
                        <p>
                            <span className="tag is-info is-light is-medium">Min temp: </span>
                            {weatherDay.minTemp} ºC
                        </p>
                        <p>
                            <span className="tag is-info is-light is-medium">Cloudiness: </span>
                            {weatherDay.cloudiness} %
                        </p>
                    </div>

                    <div className="weatherParth">
                        <p>
                            <span className="tag is-info is-light is-medium">Sunrise: </span>
                            {weatherDay.sunrise}
                        </p>
                        <p>
                            <span className="tag is-info is-light is-medium">Sunset: </span>
                            {weatherDay.sunset}
                        </p>
                    </div>
                </div>
                :
                <p> No data</p>
            }

        </div>

    );
}