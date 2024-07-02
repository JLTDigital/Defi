import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Hero = ({ heading, para }) => {
  return (
    <section className='p-2 hero'>
      <Row>
        <Col md={12} className='text-center mx-auto mt-2'>
            <h1 className='hero-heading'>{heading}</h1>
          <p className='mt-4'>{para} </p>
        </Col>
      </Row> 
    </section>
  )
}

Hero.defaultProps = {
  heading: '',
  para: ''
}

export default Hero
