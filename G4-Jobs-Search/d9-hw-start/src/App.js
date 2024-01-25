import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./pages/companySearchResults/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/favorites/FavoritesPages";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favoritesPage" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
    </Provider> 
  );
}

export default App;
