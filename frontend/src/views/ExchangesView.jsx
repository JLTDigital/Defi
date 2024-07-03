import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const ExchangesView = () => {
  const [exchanges, setExchanges] = useState([])
  const [error, setError] = useState('')

  let BASE_URL

  if (import.meta.env.VITE_ENV === 'production') {
    BASE_URL = import.meta.env.VITE_PROD_BASE_URL
  } else {
    BASE_URL = import.meta.env.VITE_DEV_BASE_URL
  }

  useEffect(() => {
    onRender()
    getExchanges()
  }, [])

  const getExchanges = async () => {
    await axios
      .get(`${BASE_URL}/api/exchanges`)
      .then((response) => response.data)
      .then((data) => setExchanges(data))
      .catch((error) => setError(error))
  }

  const onRender = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Meta title='Blockchain & DeFi Resources | Exchanges' />
      <Hero
        heading='Exchanges'
        para='Best places to make your crypto purchases, trades, loans and build some crypto savings.'
      />
      {!exchanges ? (
        <Loader />
      ) : (
        <Row className='mt-3'>
          {exchanges.map((exchange) => (
            <Col key={exchange._id} className='px-4' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a
                  href={exchange.url}
                  target='_blank'
                  rel='noreferrer'
                  className='card-link'>
                  <Image
                    className='mr-3'
                    src={exchange.image}
                    alt='Exchanges'
                    fluid='true'
                  />
                  <div className='card-wrapper'>
                    <h3>{exchange.name}</h3>
                    <p>{exchange.description}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      )}
      {error ? <Message>{error}</Message> : ''}
    </>
  )
}

export default ExchangesView
