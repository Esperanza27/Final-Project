const weatherMock = {
  coord: {
    lon: 9.0667,
    lat: 44.5,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 279.78,
    feels_like: 277.43,
    temp_min: 276.28,
    temp_max: 282.39,
    pressure: 1007,
    humidity: 60,
  },
  visibility: 10000,
  wind: {
    speed: 3.28,
    deg: 358,
    gust: 5.92,
  },
  clouds: {
    all: 20,
  },
  dt: 1705675110,
  sys: {
    type: 2,
    id: 49059,
    country: "IT",
    sunrise: 1705647284,
    sunset: 1705680801,
  },
  timezone: 3600,
  id: 3176217,
  name: "Provincia di Genova",
  cod: 200,
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const cities = [
  { label: "Roma", value: "Roma" },
  { label: "Milano", value: "Milano" },
  { label: "Napoli", value: "Napoli" },
  { label: "Torino", value: "Torino" },
  { label: "Palermo", value: "Palermo" },
  { label: "Genova", value: "Genova" },
  { label: "Bologna", value: "Bologna" },
  { label: "Firenze", value: "Firenze" },
  { label: "Bari", value: "Bari" },
  { label: "Catania", value: "Catania" },
  { label: "Venezia", value: "Venezia" },
  { label: "Verona", value: "Verona" },
  { label: "Messina", value: "Messina" },
  { label: "Padova", value: "Padova" },
  { label: "Trieste", value: "Trieste" },
  { label: "Taranto", value: "Taranto" },
  { label: "Brescia", value: "Brescia" },
  { label: "Parma", value: "Parma" },
  { label: "Prato", value: "Prato" },
  { label: "Modena", value: "Modena" },
  { label: "Reggio", value: "Reggio" },
  { label: "Perugia", value: "Perugia" },
  { label: "Ravenna", value: "Ravenna" },
  { label: "Livorno", value: "Livorno" },
  { label: "Cagliari", value: "Cagliari" },
  { label: "Foggia", value: "Foggia" },
  { label: "Rimini", value: "Rimini" },
  { label: "Salerno", value: "Salerno" },
  { label: "Ferrara", value: "Ferrara" },
  { label: "Sassari", value: "Sassari" },
  { label: "Latina", value: "Latina" },
  { label: "Campania", value: "Campania" },
  { label: "Monza", value: "Monza" },
  { label: "Siracusa", value: "Siracusa" },
  { label: "Pescara", value: "Pescara" },
  { label: "Bergamo", value: "Bergamo" },
  { label: "Forlì", value: "Forlì" },
  { label: "Trento", value: "Trento" },
  { label: "Vicenza", value: "Vicenza" },
  { label: "Terni", value: "Terni" },
  { label: "Bolzano", value: "Bolzano" },
  { label: "Novara", value: "Novara" },
  { label: "Piacenza", value: "Piacenza" },
  { label: "Ancona", value: "Ancona" },
  { label: "Andria", value: "Andria" },
  { label: "Arezzo", value: "Arezzo" },
  { label: "Udine", value: "Udine" },
  { label: "Cesena", value: "Cesena" },
  { label: "Lecce", value: "Lecce" },
];

export { weatherMock, months, cities };
