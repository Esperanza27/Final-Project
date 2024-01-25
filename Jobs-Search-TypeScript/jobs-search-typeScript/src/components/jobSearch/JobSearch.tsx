import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../../reducers/actions/favoriteActions'

type TJobSearchProps = {
  data: any
} 
const JobSearch = ({data}:TJobSearchProps) => {
   const favorites = useSelector((state:any) =>state.favorites?.list)
   console.log(favorites);
   
  const dispatch = useDispatch()
 
  const isFavorite = favorites?.list.includes(data.company_name)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        {isFavorite ? (
          <Button onClick={() =>
            dispatch(removeFromFavorite(data.company_name))
          }></Button>

        ) : (
          <Button
            variant="outline-success"
            onClick={() => dispatch(addToFavorite(data.title))}
          >
            Aggiungi preferito
          </Button>
        )
        }
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default JobSearch