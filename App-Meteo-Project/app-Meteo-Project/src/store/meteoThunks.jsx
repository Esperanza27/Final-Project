import { createAsyncThunk } from "@reduxjs/toolkit";
import { forecastMock } from "./mocks/forecastMock";

const API_KEY = "17945c47c483847f73889aaad31ff613";

// Questo Thunk è una action asincrona, che ci permette di intercettare il dispatch e gestire una Promise.
const weatherThunk = createAsyncThunk(
  "weather/get",
  async (payload, thunkApi) => {
    const { id = "Roma" } = payload; // un id diverso sarà ricevuto al variare dell'input select.

    // qui viene effettuata una GET by ID.
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${id},it&APPID=${API_KEY}`
    );

    // quì viene gestito il caso di errore.
    if (response.status === 400) {
      return thunkApi.rejectWithValue(await response.json());
    }
    // grazie all'await la promise verrà risolta e ritornata dal return.
    return await response.json();
  }
);

// Questo Thunk è una action asincrona, che ci permette di intercettare il dispatch e gestire una Promise.
const forecastThunk = createAsyncThunk(
  "forecast/get",
  async (payload, { getState, rejectWithValue }) => {
   
    const {
      meteo: { weather },
    } = getState(); // il Thunk in questo caso ci permette di prendere un valore da un reducer facente parte dello state.

    const {
      coord: { lon = 0, lat = 0 },
    } = weather;

    // qui viene effettuata una GET by latitudine e longitudine.
    if (Object.keys(weather).length) {
      const response = forecastMock;
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
        {
          method: "GET",
        }
      );

      // quì viene gestito il caso di errore.
      if (response.status === 400) {
        // Return the known error for future handling
        return rejectWithValue(await response.json());
      }

      // grazie all'await la promise verrà risolta e ritornata dal return.
      return await response.json();
    } else {
      return {};
    }
  }
);

export { weatherThunk, forecastThunk };
