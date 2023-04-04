import Homepage from "./pages/Homepage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Container } from "react-bootstrap";

function App() {
  return (
    
    <BrowserRouter>
      <Container className="bg-light">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
