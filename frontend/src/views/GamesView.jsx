import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const GamesView = () => {
  const [games, setGames] = useState([])
  const [error, setError] = useState('')

  let BASE_URL

  if (import.meta.env.VITE_ENV === 'production') {
    BASE_URL = import.meta.env.VITE_PROD_BASE_URL
  } else {
    BASE_URL = import.meta.env.VITE_DEV_BASE_URL
  }

  useEffect(() => {
    getGames()
  }, [])

  const getGames = async () => {
    await axios
      .get(`${BASE_URL}/api/defi/games`)
      .then((response) => response.data)
      .then((data) => setGames(data))
      .catch((error) => setError(error))
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Games' />
      <Hero
        heading='Games'
        para='Some of the best games right now, built on blockchains.'
      />
      {!games ? (
        <Loader />
      ) : (
        <Row className='mt-3'>
          {games.map((game) => (
            <Col key={game._id} className='px-4' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a
                  href={game.url}
                  target='_blank'
                  rel='noreferrer'
                  className='card-link'>
                  <Image
                    className='mr-3'
                    src={game.image}
                    alt='Games'
                    fluid='true'
                  />
                  <div className='card-wrapper'>
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      )}
      {error ? <Message>{error}</Message> : ''}
    </div>
  )
}

export default GamesView
