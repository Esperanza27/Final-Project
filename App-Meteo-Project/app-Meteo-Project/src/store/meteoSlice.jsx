import { createSlice } from "@reduxjs/toolkit";
import { weatherThunk, forecastThunk } from "./meteoThunks";

const initialState = {
  value: 0,
  weather: {},
  forecast: {},
  error: null,
};

// la slice è una fetta di stato, paragonabile ad un reducer
const meteoSlice = createSlice({
  name: "meteo", // questo sarà il nome del reducer
  initialState, // lo stato iniziale del reducer
  reducers: {}, // qui è possibile gestire azioni sincrone
  extraReducers: (builder) => {

    /* WEATHER */
    // in questo reducer è possibile gestire azioni asincrone elencandole come stessero in uno switch case.
    builder.addCase(weatherThunk.fulfilled, (state, { payload }) => {
      // il thunk in caso di risoluzione POSITIVA della Promise entrerà il questo CASE.
      state.weather = payload; // qui è dove aggiorniamo la parte di stato/reducer con un nuovo valore.
    });
    builder.addCase(weatherThunk.rejected, (state, action) => {
      // il thunk in caso si risoluzione NEGATIVA della Promise entrerà il questo CASE.
      state.error = action.payload ? action.payload.errorMessage : action.error;
    });

    /* FORECAST */
    builder.addCase(forecastThunk.fulfilled, (state, { payload }) => {
      state.forecast = payload;
    });
    builder.addCase(forecastThunk.rejected, (state, action) => {
      state.error = action.payload ? action.payload.errorMessage : action.error;
    });

  },
});

export default meteoSlice.reducer;
