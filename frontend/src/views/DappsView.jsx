import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Loader from '../components/Loader'
import { Row, Col, Image } from 'react-bootstrap'

const DappsView = () => {
  const [dapps, setDapps] = useState([])
  const [loading, setLoading] = useState(true)

  let BASE_URL

  if (import.meta.env.VITE_ENV === 'production') {
    BASE_URL = import.meta.env.VITE_PROD_BASE_URL
  } else {
    BASE_URL = import.meta.env.VITE_DEV_BASE_URL
  }

  useEffect(() => {
    const getDapps = async () => {
      const apiUrl = `${BASE_URL}api/defi/dapps`
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setDapps(data)
      } catch (error) {
        console.log('Error Fetching Data', error)
      } finally {
        setLoading(false)
      }
    }

    const onRender = () => {
      window.scrollTo(0, 0)
    }

    onRender()
    getDapps()
  }, [])

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Dapps' />
      <Hero heading='Dapps' para='Decentralised Applications' />
      {loading ? (
        <Loader />
      ) : (
        <Row className='mt-3'>
          {dapps.map((dapp) => (
            <Col key={dapp._id} className='px-4' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a
                  href={dapp.url}
                  target='_blank'
                  rel='noreferrer'
                  className='card-link'>
                  <Image
                    className='mr-3'
                    src={dapp.image}
                    alt='dapp'
                    fluid='true'
                  />
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
    </div>
  )
}

export default DappsView
