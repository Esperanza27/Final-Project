import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import JobSearch from "../jobSearch/JobSearch";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../../reducers/actions/favoriteActions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  /*   const [jobs, setJobs] = useState([]); */
  const navigate = useNavigate();

  /*   const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  
    const handleChange = (e: any) => {
      setQuery(e.target.value);
    };
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
  
      try {
        const response = await fetch(baseEndpoint + query + "&limit=20");
        if (response.ok) {
          const { data } = await response.json();
          setJobs(data);
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    }; */
  const jobs = useSelector((state) => state.job.results)
  const dispatch = useDispatch()

  const handleChange = (e: any) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Button variant="outline-primary" onClick={() => navigate("/favorites")}>Vai ai preferiti</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData: any) => (
            <JobSearch key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;