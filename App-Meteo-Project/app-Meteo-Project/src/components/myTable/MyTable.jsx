import PropTypes from "prop-types";
import Container from "react-bootstrap/esm/Container";
import iconSunrise from "../../assets/icons/sunrise.png";
import iconSunset from "../../assets/icons/sunset.png";

const MyTable = ({
  day = "lunedi",
  humidity = "3",
  icon1 = <img src={iconSunrise} style={{ width: "25px", height: "25px" }} />,
  icon2 = <img src={iconSunset} style={{ width: "30px", height: "30px" }} />,
  tempMax = 16,
  tempMin = 17,
}) => {
  return (
    <Container>
      <div className="row d-flex gap-2 justify-content-center border-1 border-dark-subtle py-1 flex-nowrap">
        <div className="col-2 col-sm-3 col-md-2">{day}</div>
        <div className="col-2 col-md-1">{humidity}%</div>
        <div className="col-2 col-md-1">{icon1}</div>
        <div className="col-2 col-md-1">{icon2}</div>
        <div className="col-2 col-md-1">{tempMax}</div>
        <div className="col-2 col-md-1">{tempMin}</div>
      </div>
    </Container>
  );
};
MyTable.propTypes = {
  day: PropTypes.string,
  humidity: PropTypes.string,
  icon1: PropTypes.node,
  icon2: PropTypes.node,
  tempMax: PropTypes.number,
  tempMin: PropTypes.number,
};
export default MyTable;
