import { createAsyncThunk } from "@reduxjs/toolkit";
import { forecastMock } from "./mocks/forecastMock";
import { weatherMock } from "./mocks/weatherMock";

const API_KEY = "17945c47c483847f73889aaad31ff613";

const weatherThunk = createAsyncThunk(
  "weather/get",
  async (payload, thunkApi) => {
    console.log("weatherThunk", payload);

    const { id = "Roma" } = payload;

    const response = weatherMock /* await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${id},it&APPID=${API_KEY}`
    ); */

    if (response.status === 400) {
      return thunkApi.rejectWithValue(await response.json());
    }

    return weatherMock; //await response.json();
  }
);

const forecastThunk = createAsyncThunk(
  "forecast/get",
  async (payload, { getState, rejectWithValue }) => {
    /* const { id = '' } = payload */

    const {
      meteo: { weather },
    } = getState(); // console.log(getState().meteo.weather);

    console.log(weather);

    const {
      coord: { lon = 0, lat = 0 },
    } = weather;

    if (Object.keys(weather).length) {
      const response = forecastMock;
      /* await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
        {
          method: "GET",
        }
      ); */

      if (response.status === 400) {
        // Return the known error for future handling
        return rejectWithValue(await response.json());
      }
      return forecastMock //await response.json();
    } else {
      return {};
    }
  }
);

export { weatherThunk, forecastThunk };
