import Homepage from "./pages/Homepage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import FormPage from "./pages/FormPage";
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
