import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

function MyCard({ icon, type, currentValue, dynamicValue }) {
  return (
    <Container className=" h-100 w-100 border rounded">
      <Row className="d-flex align-items-center mx-p-2 p-md-2 p-lg-4">
        <Col xs={4}>{icon}</Col>
        <Col xs={4}>
          <div>
            <div className="fs-6" style={{ whiteSpace: "nowrap" }}>
              {type}
            </div >
            <strong style={{ whiteSpace: "nowrap" }}>{currentValue}</strong>
          </div>
        </Col>
        <Col xs={4}>
          <div style={{ fontSize: "10px", whiteSpace: "nowrap" }}>
            {dynamicValue}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

MyCard.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.string,
  currentValue: PropTypes.string,
  dynamicValue: PropTypes.string,
};

export default MyCard;
