import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Main from "./pages/homem/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from "./pages/contact-page/contactus";
import Leader from "./pages/LeaderShip/Leader";
import Coimbatore from "./pages/Coimbatore/Coimbatore";
import ParkPune from "./pages/PARKPune/ParkPune";
import Magarpatta from "./pages/Magarpatta/Magarpatta";
import Blog from "./pages/Blogs/Blog";
import Blog1 from "./pages/Blog1/Blog1";
function App() {
  return (
    <Router style={{ fontFamily:'Noto Sans JP'}}>
      <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Home />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/leadership" element={<Leader />} />
      <Route path="/Coimbatore" element={<Coimbatore />} />
      <Route path="/Pune" element={<ParkPune />} />
      <Route path="/Magarpatta" element={<Magarpatta />} />
      <Route path="/Blogs" element={<Blog />} />
      <Route path="/TowerD" element={<Blog1 />} />







        
      </Routes>
      
    </Router>
    
  );
}

export default App;
