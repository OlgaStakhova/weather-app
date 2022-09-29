import { FC, FormEvent, useEffect, useState } from 'react';
import './App.css';
import { Chart } from './components/Chart';
import { WeatherToday } from './components/WeatherToday';
import { getCityID, getWeather } from './store/apiService';
import { addAction } from './store/weather/actions';
import { errorNotification } from './utils/Notifications';
import { prepareWeatherData } from './utils/prepareData';
import { useDispatch, useSelector } from "react-redux";
import { getWeatherList } from './store/store';
import { WeatherList } from './components/WeatherList';
import imageWeather from './images/weather-data.png';

export const App: FC = () => {
  const [city, setCity] = useState('');
  const [comeCityId, setComeCityId] = useState('');

  const dispatch = useDispatch();
  const weatherData = useSelector(getWeatherList);

  useEffect(() => {
    console.log('asd', comeCityId)
    if (comeCityId) {
      getWeather(comeCityId)
        .then(response => {
          const payload = prepareWeatherData(response.forecast);
          dispatch(addAction(payload));
        })
        .catch(err => console.error(err));
    }
  }, [comeCityId]);

  const handelChangeCity = (value: string) => {
    setCity(value);
  }

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    getCityID(city)
      .then(data => {
        console.log(data.locations)
        if (!data.locations.length) {
          errorNotification('Input correct name city');
        }
        const locationId = data.locations.length && data.locations[0].id;
        locationId && setComeCityId(locationId);
      })
      .then(() => setCity(''))
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <h1 className="title is-3">Wether in city</h1>
      <form
        onChange={(event: any) => handelChangeCity(event.target.value)}
        onSubmit={handelSubmit}
        className="form"
      >
        <input
          className="input is-info"
          type="search"
          placeholder='Input your city'
          value={city}
        />
        <button
          type="submit"
          onClick={handelSubmit}
          className="button is-info"
        >
          Search
        </button>
      </form>
     {weatherData?.length 
     ? <>
        <WeatherToday />
        <Chart />
        <WeatherList />
      </>
      : <img 
          src={imageWeather} 
          alt="weather-data"
          className='app-img'
        />}
    </div>
  );
}

export default App;
