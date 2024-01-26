import { useSelector, useDispatch } from "react-redux";
import MyNavbar from "../../components/myNavbar/MyNavbar";
import MyCard from "../../components/myCard/MyCard";
import MySidebar from "../../components/mySidebar/MySidebar";
import { months } from "../../store/mocks/weatherMock";
import { useCallback, useMemo, useEffect } from "react";
import { WindIcon } from "../../assets/icons/WindIcon";
import { weatherThunk, forecastThunk } from "../../store/meteoThunks";
import { MyLoader } from "../../components/myLoader/MyLoader";
import { useNavigate } from "react-router-dom";
import MyGraphic from "../../components/myGraphic/MyGraphic";
import "./myHome.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherThunk({ id: "Roma" }));
  }, [dispatch]);

  const weather = useSelector((state) => state.meteo.weather);

  useEffect(() => {
    if (Object.keys(weather).length) {
      dispatch(forecastThunk());
    }
  }, [dispatch, weather]);

  

  const navigate = useNavigate();

  const onChange = useCallback(
    (e) => {
      const city = e.target.value;

      if (city) {
        dispatch(weatherThunk({ id: city }));
        navigate("/result", { ...weather });
      }
    },
    [dispatch, navigate]
  );

  const {
    wind: { gust = "", speed = "" } = {},
    main: { temp = "", temp_min = "", humidity = "" } = {},
  } = weather;

  const dateToday = useMemo(() => {
    const date = new Date();

    const monthNum = date.getMonth();
    const yearNum = date.getFullYear();

    const originalString = date.toDateString();
    const charToInsert = ",";
    const indexToInsertAt = 3;

    return {
      current: `${months[monthNum]} ${yearNum}`,
      dateDetails:
        originalString.slice(0, indexToInsertAt) +
        charToInsert +
        originalString.slice(indexToInsertAt),
    };
  }, []);

  const cardData = useMemo(() => {
    return [
      {
        icon: <WindIcon />,
        type: "Wind Speed",
        currentValue: `${speed} km/h`,
        dynamicValue: `${gust} km/h`,
      },
      {
        icon: <WindIcon />,
        type: "Rain Chance",
        currentValue: "0%",
        dynamicValue: "0%",
      },
      {
        icon: <WindIcon />,
        type: "Temperature",
        currentValue: `${Math.round(temp)}°C`,
        dynamicValue: `${temp_min}°C ↑`,
      },
      {
        icon: <WindIcon />,
        type: "Humidity",
        currentValue: `${humidity}%`,
        dynamicValue: `${humidity}%`,
      },
    ];
  }, [humidity, temp, temp_min, gust, speed]);

  if (!Object.keys(weather).length) {
    return <MyLoader />;
  }

  return (
    <div className="container-fluid " /* style={{ height: "90vh" }} */>
      <div className="row" /* style={{ height: "99vh" }} */>
        <div className="col-sm-12">
          <div className="row" /* style={{ height: "100%" }} */>
            <div className="col-xs-12 d-flex flex-column gap-1 my-2 col-md-8 ">
              <div className="row ">
                <MyNavbar date={dateToday} onChange={onChange} />
              </div>
              <div
                className="row d-flex justify-content-center align-items-center"
                
              >
                {cardData.map((card, i) => (
                  <div
                    key={i}
                    className="col-xs-10 col-md-6 d-flex align-items-center cards py-1 "
                    
                  >
                    <MyCard {...card} />
                  </div>
                ))}
              </div>

              <div className="row text-center px-0 d-flex justify-content-center border rounded d-flex myGraphic">
                <MyGraphic />
              </div>
            </div>
            <div
              className="col-xs-12 col-md-4"
              /* style={{ height: "100%" }} */
            >
              <MySidebar {...weather} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
