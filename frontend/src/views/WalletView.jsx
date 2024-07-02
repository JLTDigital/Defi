import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const WalletView = () => {

  const [wallets, setWallets] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    onRender()
    getWallets()
  }, [])
  
  const getWallets = async () => {
    await axios.get('/api/wallets')
    .then(response => response.data)
    .then(data => setWallets(data))
    .catch(error => setError(error))
  }

  const onRender = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Wallets' />
      <Hero heading='Wallets' para='The best hardware and software wallets.' />
      {!wallets ? (<Loader />) : (
        <Row className='mt-3'>
          {wallets.map(wallet => (
            <Col key={wallet._id} className='px-4' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={wallet.url} target="_blank" rel="noreferrer" className='card-link'>
                  <Image className='mr-3' src={wallet.image} alt="Wallets" fluid='true' />
                  <div className='card-wrapper'>
                    <h3>{wallet.name}</h3>
                    <p>{wallet.description}</p>
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

export default WalletView
