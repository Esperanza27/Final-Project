import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
import MyCard from "../myCard/MyCard";
import iconSunrise from "../../assets/icons/sunrise.png";
import iconSunset from "../../assets/icons/sunset.png";
import "./mySidebar.css";
const MySidebar = ({ sys, name, main }) => {
  const getTime = useCallback((time) => {
    const min = new Date(time).getMinutes();

    return `${new Date(time).getHours()}:${min > 9 ? min : "0" + min}`;
  }, []);

  const cardData2 = useMemo(() => {
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
    ];
  }, [getTime, sys?.sunrise, sys?.sunset]);

  return (
    <div className="my-0 my-md-2 py-1 py-md-4 px-3  d-flex flex-column  gap-1 gap-md-4 border border-1 rounded-3 siderHeight">
      <div className="d-flex justify-content-between siderNav ">
        <p className="my-2">{name}</p>
        <p className="my-2">{getTime(new Date().getTime())}</p>
      </div>
      <div className=" justifySidebar">
        <div>
          <h5 className="my-0 ">{`${Math.round(main?.temp)}°C`}</h5>
          <p className="mb-2 "> scattered clouds </p>
          <hr className="my-1 " />
        </div>
        <div>
          <p className=" m-0 p-0"> Sunrise & Sunset </p>
        </div>
        <div className=" d-flex flex-column gap-3 my-2 py-sm-2 py-md-0">
          {cardData2.map((card, i) => (
            <div key={i}>
              <MyCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MySidebar.propTypes = {
  sys: PropTypes.object,
  name: PropTypes.string,
  main: PropTypes.object,
};

export default MySidebar;
