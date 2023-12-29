import React from 'react'
import PropTypes from 'prop-types';
import { Card, Container, Image } from 'react-bootstrap';
import img1 from '../../images/coimbatore.png'
import './index.css'

const ImgCard = () => {
  return (
    <div style={{ position: 'relative'}}>
    <Container className="mt-3" >
      <Card  className='card'>
        <Image src={img1} alt="Card image" style={{position:'relative', left:'25px', transform:'translateY(-60px)'}}/>
        <Card.Body>
          <Card.Title style={{alignText:'center', transform:'translateY(-460px)'}}>Card Title</Card.Title>
          <Card.Text style={{alignText:'center', transform:'translateY(-460px)', opacity:'0'}}>
            This is a sample card with some text content. You can customize this content as needed.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

      
    </div>
  )
}

export default ImgCard
