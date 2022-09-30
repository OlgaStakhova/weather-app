import { FC } from "react"
import { useSelector } from "react-redux"
import { getWeatherList } from "../store/store"

export const WeatherList: FC = () => {
    const weatherListData = useSelector(getWeatherList);
    
    return (
        <>
        <h2 className="title is-4"> Weather list</h2>
        { weatherListData?.length 
        && <table className="table">
  <thead>
    <tr>
      <th>Data</th>
      <th>Info</th>
      <th><abbr title="Max temp ºC">Max</abbr></th>
      <th><abbr title="Min temp ºC">Min</abbr></th>
      <th><abbr title="Max wind speed m/s">Wind</abbr></th>
      <th><abbr title="Cloudiness %">Cloud</abbr></th>
      <th>Sunrise</th>
      <th>Sunset</th>
    </tr>
  </thead>

  <tbody>
 { weatherListData.map(item => (
    <tr key={item.date}>
      <td>{item.date}</td>
      <td>{item.symbolPhrase}</td>
      <td>{item.maxTemp}</td>
      <td>{item.minTemp}</td>
      <td>{item.maxWindSpeed}</td>
      <td>{item.cloudiness}</td>
      <td>{item.sunrise}</td>
      <td>{item.sunset}</td>
    </tr>)
 )}
  </tbody>
</table>}
        </>
    )
}