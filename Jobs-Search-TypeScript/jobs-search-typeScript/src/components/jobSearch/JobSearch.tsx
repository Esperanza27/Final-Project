import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../../reducers/actions/favoriteActions'

type TJobSearchProps = {
  data: any
}
const JobSearch = ({ data }: TJobSearchProps) => {
 /*  console.log(useSelector(state=> state));  */
 const favorites = useSelector((state: any) => state.job.results)
 
  const dispatch = useDispatch()

  const isFavorite = favorites?.includes(data.company_name) 

  return (
    <Container>
      <Row
        className="mx-0 mt-3 p-3 d-flex "
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={12} >
          <Row >
            <Col xs={5} className='text-start px-0'>
              <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
          </Col>
            <Col xs={4} md={5}>
              <Link to={`/${data.company_name}`}>{data.company_name}</Link>
              </Col>
            <Col xs={2}>
              {isFavorite ? (
            <Button onClick={() =>
              dispatch(removeFromFavorite(data.company_name))
            }></Button>

          ) : (
            <Button className='p-1 border border-0'
              variant="outline-success"
              onClick={() => dispatch(addToFavorite(data.title))}
            >
              ⭐
            </Button>
          )
          } </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default JobSearch