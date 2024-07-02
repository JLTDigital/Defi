import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const DappsView = () => {

  const [dapps, setDapps] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    onRender()
    getDapps()
  }, [])
  
  const getDapps = async () => {
    await axios.get('/api/defi/dapps')
    .then(response => response.data)
    .then(data => setDapps(data))
    .catch(error => setError(error))
  }

  const onRender = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Dapps' />
      <Hero heading='Dapps' para='Decentralised Applications' />
      {!dapps? (<Loader />) : (
        <Row className='mt-3'>
          {dapps.map(dapp => (
            <Col key={dapp._id} className='px-4' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={dapp.url} target='_blank' rel="noreferrer" className='card-link'>
                  <Image className='mr-3' src={dapp.image} alt="dapp" fluid='true' />
                  <div className='card-wrapper'>
                    <h3>{dapp.name}</h3>
                    <p>{dapp.description}</p>
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

export default DappsView
