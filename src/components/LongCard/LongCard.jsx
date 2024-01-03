// Card.js
// ... (previous code)
import React from 'react'
import Button from '../Button/button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './lc.css'


const Cardlong = ({ image, title, content, buttonText, onButtonClick, url }) => {
    return (
        <Link to={url}>
             <div className="card text-center" style={{ margin: '0 auto', background:" #0f2542", borderRadius:"10px" }}>
        {image && <img src={image} className="card-img" alt={title}  style={{ objectFit: 'cover', padding:'0' }}/>}
        <div className="card-body "  style={{ marginBottom: '30px' }}>
          <h6 className="card-title" style={{color:" #FEC300", textDecoration:'none'}}>{title}</h6>

         
          
        </div>
      </div>
        </Link>
     
    );
  };
  
  export default Cardlong
  