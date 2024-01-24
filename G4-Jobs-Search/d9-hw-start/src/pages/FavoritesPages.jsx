import { Button, Container, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
/* import { setRemoveFavorite } from "../redux/actions/favoritesActions"; */
import { Link } from "react-router-dom";
import { REMOVE_FAVORITE } from "../redux/actions/favoritesActions";
const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.list);

 /*  const deleteFavorite = (fav) => {
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: setRemoveFavorite(fav),
    });
  }; */
  return (
    <div>
      <Container>
        <div className="text-center ">
          <h1> Favorites </h1>
        </div>
        <div>
          <ListGroup defaultActiveKey="#link1">
            {favorites.lenght > 0 ? (
              favorites.map((favorite, index) => {
                return (
                  <ListGroup.Item action href="#link1" key={index}>
                    <Link to={"/" + favorite}>{favorite}</Link>
                    {/* <Button onClick={deleteFavorite(favorite)}> */}
                    <Button variant="outline-danger" onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: favorite })}>
                        
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
                  </ListGroup.Item>
                );
              })
            ) : (
              <div>
                <h1> There are no favorites </h1>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-return-left"
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
        </div>
      </Container>
    </div>
  );
};
export default FavoritesPage;
