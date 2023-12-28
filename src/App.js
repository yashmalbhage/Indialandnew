import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Main from "./pages/homem/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from "./pages/contact-page/contactus";

function App() {
  return (
    <Router style={{ fontFamily:'Noto Sans JP'}}>
      <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Home />} />
      <Route path="/contact" element={<Contactus />} />


        
      </Routes>
      
    </Router>
    
  );
}

export default App;
