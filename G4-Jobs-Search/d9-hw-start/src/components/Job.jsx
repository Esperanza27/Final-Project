import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
 import { setAddFavorite } from '../redux/actions/favoritesActions'; 
import { Star, StarFill } from "react-bootstrap-icons";

const Job = ({ data }) => {
   const dispatch = useDispatch();
  const favorites = useSelector(state=>state.list);
  const isFavorite = favorites.includes(data.company_name); 
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
    {/* {isFavorite ? (
          <StarFill
            color="gold"
            size={22}
            className="me-2 my-auto"
            onClick={() =>
              dispatch({
                type: "REMOVE_FAVORITE",
                payload: data.company_name
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={22}
            className="me-2 my-auto"
            onClick={() =>
              dispatch({
                type: "ADD_FAVORITE",
                payload: data.company_name
              })
            }
          />
        )} */}
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
}

export default Job
