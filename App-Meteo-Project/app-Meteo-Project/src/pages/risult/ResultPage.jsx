import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
import MyCard from "../../components/myCard/MyCard";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import CloseButton from "react-bootstrap/esm/CloseButton";
import { useNavigate } from "react-router-dom";
import iconWind from "../../assets/icons/storm.png";
import MyTable from "../../components/myTable/MyTable";
import iconTemperature from "../../assets/icons/temperature.png";
import iconSunrise from "../../assets/icons/sunrise.png";
import iconSunset from "../../assets/icons/sunset.png";
import iconRain from "../../assets/icons/rain.png";
import iconHumidity from "../../assets/icons/humidity.png";

const ResultPage = () => {
  // assegniamo alle costanti i valori delle risposte delle chiamate di rete
  const weather = useSelector((state) => state.meteo.weather);
  const forecast = useSelector((state) => state.meteo.forecast);
  const navigate = useNavigate();

  const { sys, name, main, wind } = weather;

  const getTime = useCallback((time) => {
    return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
  }, []);

  const cardData3 = useMemo(() => {
    return [
      {
        icon: (
          <img src={iconSunrise} style={{ width: "25px", height: "25px" }} />
        ),
        type: "sunrise",
        currentValue: `${getTime(sys?.sunrise)} `,
        dynamicValue: `2 hours ago`,
      },
      {
        icon: (
          <img src={iconSunset} style={{ width: "30px", height: "30px" }} />
        ),
        type: "sunset",
        currentValue: `${getTime(sys?.sunset)}`,
        dynamicValue: `In 8 hours`,
      },
      {
        icon: <img src={iconWind} style={{ width: "25px", height: "25px" }} />,
        type: "Wind Speed",
        currentValue: `${wind?.speed} km/h`,
        dynamicValue: `${wind?.gust} km/h`,
      },
      {
        icon: <img src={iconRain} style={{ width: "25px", height: "25px" }} />,
        type: "Rain Chance",
        currentValue: "0%",
        dynamicValue: "0%",
      },
      {
        icon: (
          <img
            src={iconTemperature}
            style={{ width: "25px", height: "25px" }}
          />
        ),
        type: "Temperature",
        currentValue: `${Math.round(main?.temp)}°C`,
        dynamicValue: `${main?.temp_min}°C ↑`,
      },
      {
        icon: (
          <img src={iconHumidity} style={{ width: "25px", height: "25px" }} />
        ),
        type: "Humidity",
        currentValue: `${main?.humidity}%`,
        dynamicValue: `${main?.humidity}%`,
      },
    ];
  }, [getTime, main?.humidity, main?.temp, main?.temp_min, sys?.sunrise, sys?.sunset, wind?.gust, wind?.speed]);

  const forecastList = forecast.list || []; // qui è necessario tenere un or [] perche il dato viene dal sevizio quindi all'in it sarà undefined

  const forecastListFiltered = []; // lista di appoggio

  forecastList?.forEach((element) => {
    // trovo il nome del giorno
    let dayName = new Date(element?.dt * 1000).toDateString().slice(0, 3);

    // controllo se il nome del giorno esiste già nella lista di appoggo
    const existDayName = forecastListFiltered.find(
      (filtered) => filtered.dayName === dayName
    );

    if (!existDayName) {
      // faccio il push solo dei giorni che non esistono nella lista di appoggio
      forecastListFiltered.push({ dayName, element }); // in questo oggetto avrò il nome del giorno e tutti i dettagli afferenti al giono (temperature, umidità ecc.)
    }
  });

  return (
    <div className="container py-3 " style={{ height: "90vh" }}>
      <div className="d-flex justify-content-between py-1 mb-3 ">
        <NavbarBrand href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />
          </svg>{" "}
          HOME
        </NavbarBrand>
        <div className="d-flex gap-2 text-center">
          <p>{getTime(new Date().getTime())}</p>
          <CloseButton onClick={() => navigate("/")} />
        </div>
      </div>

      <div className="mt-1 mb-3 d-flex justify-content-center">
          <h1 className="px-0 mx-0"  style={{whiteSpace:'nowrap'}}>{name}</h1>
        </div>

      <div className=" row d-flex justify-content-center align-items-center mt-3 mb-5 gap-3 my-2 ">
        {cardData3.map((card, i) => (
          <div
            key={i}
            className="col-xs-10 col-md-10 py-0 w-75"
          
          >
            <MyCard {...card} />
          </div>
        ))}
      </div>
      <div>
        {forecastListFiltered?.map((li, i) => {
          return (
            <div key={i}>
              <MyTable
                day={li?.dayName}
                humidity={li?.element.main.humidity}
                tempMax={li?.element.main.temp_max}
                tempMin={li?.element.main.temp_min}
                className="px-1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
ResultPage.propTypes = {
  sys: PropTypes.object,
  name: PropTypes.string,
  main: PropTypes.object,
  wind: PropTypes.object,
};

export default ResultPage;
