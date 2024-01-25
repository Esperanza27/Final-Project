import { Row, Col, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
 import { AddFavorite, RemoveFavorite, setAddFavorite } from '../redux/actions/favoritesActions'; 

const Job = ({ data }) => {
  
  console.log(useSelector(state=> state))

   const favorites = useSelector(state=>state.list); 
   console.log(favorites);
   const isFavorite = favorites?.includes(data.company_name); 
  const dispatch = useDispatch();
  return(
<Container>
<Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
     <Button 
            variant="outline-success"
            onClick={() => dispatch(setAddFavorite(data.title))}
          >
            Aggiungi preferito
            </Button>
            {isFavorite ? (
            <Button onClick={() =>
              dispatch(RemoveFavorite(data.company_name))
            }></Button>

          ) : (
            <Button className='p-1 border border-0'
              variant="outline-success"
              onClick={() => dispatch(AddFavorite(data.title))}
            >
              ⭐
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
</Container>
  )

  
}

export default Job
