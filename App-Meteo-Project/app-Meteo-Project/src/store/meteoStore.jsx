import { configureStore } from '@reduxjs/toolkit'
import meteoSlice from './meteoSlice'
/* import counterReducer from '../features/counter/counterSlice' */

export const store = configureStore({
  reducer: {
     meteo: meteoSlice, 
  },
})