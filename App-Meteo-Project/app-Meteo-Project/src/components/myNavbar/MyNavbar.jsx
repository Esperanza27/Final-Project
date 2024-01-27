import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { cities } from "../../store/mocks/weatherMock";

const MyNavbar = ({ dateDetails, onChange }) => {
const {current = '', dateToday = ''} = dateDetails

  return (
    <div>
      <Navbar className="border border-1 rounded-3 ">
        <Container className="d-flex justify-content-center">
          <div className="row d-flex w-100 align-content-center">
            <div className="col-6 d-flex align-content-center">
              <Navbar.Brand href="#">
                <h5 className="py-0 my-0 ">{current}</h5>
                <small className="py-0 my-0 ">{dateToday}</small>
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
    dateDetails: PropTypes.object,
    onChange: PropTypes.func
};

export default MyNavbar;
