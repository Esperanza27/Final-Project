import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Container from "react-bootstrap/esm/Container";
import ResultPage from "./pages/risult/ResultPage";
import NoPage from "./pages/noPage/NoPage";

function App() {
  return (
    <Container fluid className="px-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

