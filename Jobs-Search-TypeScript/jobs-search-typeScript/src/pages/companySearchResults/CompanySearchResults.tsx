import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, CloseButton } from "react-bootstrap";
import JobSearch from "../../components/jobSearch/JobSearch";
import { Link, useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="d-flex justify-content-between p-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}><CloseButton /></Link>
        </Container>

      </Navbar>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData: any) => (
            <JobSearch key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;