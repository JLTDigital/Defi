import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const LiteratureView = () => {

  const [literatures, setLiteratures] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getLiterature()
  }, [])
  
  const getLiterature = async () => {
    await axios.get('/api/literature')
    .then(response => response.data)
    .then(data => setLiteratures(data))
    .catch(error => setError(error))
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Literature' />
      <Hero heading='Literature' para='Great books to help build your understanding and discover new things about Blockchain technology, Crypto and DeFi.' />
      {!literatures? (<Loader />) : (
        <Row className='mt-3'>
          {literatures.map(literature => (
            <Col key={literature._id} className='px-4' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={literature.url} target="_blank" rel="noreferrer" className='card-link'>
                  <Image className='mr-3' src={literature.image} alt="Literature" fluid='true' />
                  <div className='card-wrapper'>
                    <h3>{literature.name}</h3>
                    <p>{literature.description}</p>
                    <p>Author: {literature.author}</p>
                  </div>
                </a>
              </div>
            </Col>  
          ))}
        </Row>
       )}
       {error ? (<Message>{error}</Message>) : ''}
    </div>
  )
}

export default LiteratureView
