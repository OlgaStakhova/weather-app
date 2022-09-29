import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Weather } from '../../types/Weather';
import { addAction, deleteAction } from './actions';

const weatherReducer = createReducer<Weather | null>(null, {
   [addAction.type]: (state, action: PayloadAction<Weather>) => {
      return state = action.payload;
   },
   [deleteAction.type]: (state) => {
      return state = null;
   },
})

export const rootReducer = combineReducers({
   weather: weatherReducer,
})