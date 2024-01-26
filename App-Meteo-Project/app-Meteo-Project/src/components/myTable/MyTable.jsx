import PropTypes from "prop-types";
import Container from "react-bootstrap/esm/Container";
const MyTable = ({
  day = "lunedi",
  humidity = "3",
  icon1 = "icon1",
  icon2 = "icon2",
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
