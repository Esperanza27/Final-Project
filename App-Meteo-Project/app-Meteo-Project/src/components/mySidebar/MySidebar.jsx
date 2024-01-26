import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
import { WindIcon } from "../../assets/icons/WindIcon";
import MyCard from "../myCard/MyCard";

const MySidebar = ({ sys, name, main }) => {
  const getTime = useCallback((time) => {
    return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
  }, []);

  const cardData2 = useMemo(() => {
    return [
      {
        icon: <WindIcon />,
        type: "sunrise",
        currentValue: `${getTime(sys?.sunrise)} `,
        dynamicValue: `2 hours ago`,
      },
      {
        icon: <WindIcon />,
        type: "sunset",
        currentValue: `${getTime(sys?.sunset)}`,
        dynamicValue: `In 8 hours`,
      },
    ];
  }, [getTime, sys?.sunrise, sys?.sunset]);

  return (
    <div className="my-0 my-md-2 py-1 py-md-4 px-3  d-flex flex-column  gap-1 gap-md-4 border border-1 rounded-3">
      <div className="d-flex justify-content-between ">
        <p className="my-2">{name}</p>
        <p className="my-2">{getTime(new Date().getTime())}</p>
      </div>
      <div>
        <h5 className="my-0 ">{`${Math.round(main?.temp)}°C`}</h5>
        <p className="mb-2 "> scattered clouds </p>
        <hr className="my-1 " />
      </div>
      <div>
        <p className=" m-0 p-0"> Sunrise & Sunset </p>
      </div>
      <div className=" d-flex flex-column gap-3 my-2">
        {cardData2.map((card, i) => (
          <div key={i}>
            <MyCard {...card} />
          </div>
        ))}
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
