import React from 'react'
import { Card } from 'react-bootstrap'

const MainCard = ({ link, image, title, text }) => {
  return (
    <div className="card-wrapper align-items-center">
      <Card style={{ width: '18rem' }}>
        <a target="_blank" rel="noreferrer" href={link}>
          <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ color: '#000'}}>
              {text}
            </Card.Text>
          </Card.Body>
        </a>
      </Card> 
    </div>

  )
}

MainCard.defaultProps = {
  link: '',
  image: '',
  title: '',
  text: ''
}

export default MainCard
