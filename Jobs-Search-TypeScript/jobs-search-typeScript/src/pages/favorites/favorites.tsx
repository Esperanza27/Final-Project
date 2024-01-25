import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { REMOVE_FROM_FAVORITE } from "../../reducers/actions/favoriteActions";


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector((state: any) => state.favorites.list);

    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Preferiti</h1>
                    <Button variant="outline-primary" onClick={() => navigate("/")} >Ritorna alla Home</Button>
                </Col>
                <Col>
                    <ListGroup>
                        {favorites.length > 0 ? (
                            favorites.map((favorite: string, index: number) => (
                                <ListGroup.Item key={index}>
                                    <Button variant="outline-danger" onClick={() => dispatch({ type: REMOVE_FROM_FAVORITE, payload: favorite })}>Elimina</Button>
                                    {/* {fav} */}
                                    <Link to={'/' + favorite}>{favorite}</Link>
                                </ListGroup.Item>
                            ))
                        ) : (
                            <ListGroup.Item>Non ci sono preferiti</ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )

}

export default Favorites;