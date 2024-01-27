import { configureStore } from '@reduxjs/toolkit'
import meteoSlice from './meteoSlice'
/* import counterReducer from '../features/counter/counterSlice' */

export const store = configureStore({ // questo metodo combinerà i reducers in uno state e ci fornirà alcuni metodi utili per gestirlo
  reducer: {
     meteo: meteoSlice, // qui è dove registriamo la nostra fetta di stato
  },
})