import { Button, CloseButton, Col, Container, ListGroup, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { REMOVE_FROM_FAVORITE } from "../../reducers/actions/favoriteActions";


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector((state: any) => state.reducer.list);

    const navigate = useNavigate();

    return (
        <>
            <Container fluid className="">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid className="d-flex justify-content-between px-3">
                    <Button variant="outline-primary" className="border border-0" onClick={() => navigate("/")} >Home</Button>
                        <Link to={"/"}><CloseButton /></Link>
                    </Container>
                </Navbar>
            </Container>
            <Container className="d-flex justify-content-center align-content-center">
                <Row className="d-flex flex-column" style={{width: "550px",}}>
                    <Col xs={12} >
                        <div >
                            <h1 className="display-3 mt-5"> Favorites </h1>
                        </div>
                        
                    </Col>
                    <Col xs={12} >
                        <ListGroup >
                            {favorites?.length > 0 ? (
                                favorites.map((favorite: string, index: number) => {
                                    return (
                                        <ListGroup.Item key={index}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row ">
                                                        <div className="col-9 text-start"> <Link to={'/' + favorite}>{favorite}</Link></div>
                                                        <div className="col-3">
                                                            <Button
                                                                variant="outline-danger"
                                                                className="border border-0 px-2 py-0"
                                                                onClick={() => dispatch({ type: REMOVE_FROM_FAVORITE, payload: favorite })}>
                                                                <svg
                                                                    xmlns="http://www.w3.o rg/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    className="bi bi-trash3-fill"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                                                </svg>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </ListGroup.Item>
                                    );

                                })
                            ) : (
                                <div>
                                    <h1> There are no favorites </h1>
                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="currentColor"
                                            className="bi bi-arrow-return-left border border-1 rounded p-3 " 
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </>

    )

}

export default Favorites;