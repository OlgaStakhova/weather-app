import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './weather'
import { TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const getWeather = (state: RootState) => state.weather;
export const getWeatherDay = (state: RootState) => state.weather?.weatherDay;
export const getWeatherChart = (state: RootState) => state.weather?.weatherChart;
export const getWeatherList = (state: RootState) => state.weather?.weatherList;
export default store;