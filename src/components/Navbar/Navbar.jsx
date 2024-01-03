import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../images/Indialand Logo-03.png'
import "./main.css";

function Navbar() {
	

	return (
			<nav className="navbar  navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">IndiaLand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul className="dropdown-menu"   style={{backgroundColor:' #0f2542', color:'#fff'}}>
            <li><a className="dropdown-item" href="/about"  style={{backgroundColor:' #0f2542', color:'#fff'}}>About IndiaLand</a></li>
            <li><a className="dropdown-item" href="/leadership" style={{backgroundColor:' #0f2542', color:'#fff'}}>Leadership</a></li>
            <li><a className="dropdown-item" href="/Chairman's Corner" style={{backgroundColor:' #0f2542', color:'#fff'}}>Chairman's Corner</a></li>
          </ul>
        </li>
		<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu"   style={{backgroundColor:' #0f2542', color:'#fff'}}>
            <li><a className="dropdown-item" href="/Coimbatore"  style={{backgroundColor:' #0f2542', color:'#fff'}}>IndiaLand tech park, Coimbatore</a></li>
            <li><a className="dropdown-item" href="/INDIALAND GLOBAL INDUSTRIAL PARK, Pune" style={{backgroundColor:' #0f2542', color:'#fff'}}>IndiaLand Global Industrial Park, Pune</a></li>
            <li><a className="dropdown-item" href="/Magarpatta" style={{backgroundColor:' #0f2542', color:'#fff'}}>Cyber City Magarpatta, Pune</a></li>
			<li><a className="dropdown-item" href="/Chennai" style={{backgroundColor:' #0f2542', color:'#fff'}}>IndiaLand Industrial And Logistic Park Orgadam, Chennai</a></li>
			<li><a className="dropdown-item" href="/Chairman's Corner" style={{backgroundColor:' #0f2542', color:'#fff'}}>Grand Highstreet, Hinjewadi Pune</a></li>
			<li><a className="dropdown-item" href="/Chairman's Corner" style={{backgroundColor:' #0f2542', color:'#fff'}}>IndiaLand Global Tech Park, Hinjewadi Pune</a></li>
			<li><a className="dropdown-item" href="/Chairman's Corner" style={{backgroundColor:' #0f2542', color:'#fff'}}>Build to suit</a></li>




          </ul>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
	);
}

export default Navbar;