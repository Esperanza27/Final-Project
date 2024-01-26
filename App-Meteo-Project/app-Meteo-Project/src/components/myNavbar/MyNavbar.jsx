/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { cities } from "../../store/mocks/weatherMock";

const MyNavbar = ({ date, onChange }) => {

  return (
    <div>
      <Navbar className="border border-1 rounded-3 ">
        <Container>
          <div className="row d-flex justify-content-between w-100 align-content-center">
            <div className="col-6 d-flex align-content-center">
              <Navbar.Brand href="#">
                <h5 className="py-0 my-0 ">{date.current}</h5>
                <small className="py-0 my-0 ">{date.dateDetails}</small>
              </Navbar.Brand>
            </div>
            <div className="col-6 d-flex align-content-center justify-content-end flex-wrap">
              <Form.Select
                aria-label="Default select example"
                style={{ height: "40px" }}
                onChange={onChange}
                className="bg-transparent"
              >
                <option value={''} className="">Choose a city...</option>
                {cities.map((city, i) => (
                  <option key={i} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

MyNavbar.propTypes = {
  date: {
    date: PropTypes.string,
    dateDetails: PropTypes.string,
    onChange: PropTypes.any
  },
};

export default MyNavbar;
