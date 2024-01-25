import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './reducers/store/store';
import CompanySearchResults from './components/companySearchResults/CompanySearchResults';
import Favorites from './pages/favorites/favorites';
import MainSearch from './components/mainSearch/MainSearch';



function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
