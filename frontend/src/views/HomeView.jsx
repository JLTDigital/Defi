import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BlockchainDeFiImg from '../assets/blockchainDefi.png'
import Cyborg1 from '../assets/cyborg1.png'
import Cyborg2 from '../assets/cyborg2.png'
import { VFXImg } from 'react-vfx'
import Hero from '../components/Hero'
import Meta from '../components/Meta'

const HomeView = () => {
  return (
    <div>
      <Meta />
      <Hero heading={'Blockchain & DeFi Resources'} para='Find your way in the Blockchain and DeFi space.'/>
      <Row>
        <Col className='p-2 mx-auto text-center'>
          <VFXImg shader='rgbGlitch' className='home-img' src={BlockchainDeFiImg} alt="Blockchain & DeFi"/>
        </Col>
      </Row>
      <section className='home-section-1'>
        <Row className='mt-2'>
          <Col md={6} className='p-4'>
            <div className='wrapper'>
              <h3 className='' style={{ color: '#03ffc5'}}>New to this space?</h3>
              <p>Don't know what Blockchains are or how they work? <br/>Don't understand what Ethereum is or what it does? <br/>Interested in DeFi but don't know where to start?</p>
              <br/>
              <p>Don't worry you can find all this information right here..</p>
            </div>
          </Col>
          <Col md={6} className='p-2 text-center'>
            <Image className='home-section-img' src={Cyborg1} alt="New to this space." fluid='true' />
          </Col>
        </Row>
      </section>

      <section className='home-section-2'>
        <Row className='home-section-2'>
          <Col md={6} className='p-2 text-center'>
            <Image className='home-section-img' src={Cyborg2} alt="New to this space." fluid='true' />
          </Col>
          <Col md={6} className='p-4'>
            <div className='wrapper'>
              <h3 className='mt-2' style={{ color: '#03ffc5'}}>Information & links to get you started if your new to this space</h3>
              <p>If your new to this space have a look around and learn about blockchain technology, Ethereum and DeFi. Find some helpful links to applications, websites and materials that you can use to help you find your way around crypto world</p>
            </div>
          </Col>
        </Row>
      </section>

      <section className='home-section-3 mt-5'>
        <h3 className='text-center'>Get Started...</h3>
        <Row className='p-3'>
          <Col lg={4}>
            <div className="home-card mb-3">
              <h6>1. Get some Crypto</h6>
              <p>Visit one these exchanges and purchase your cryptocurrency.</p>
              <LinkContainer to='/exchanges'>
                <button className='btn btn-danger home-link'>Exchanges</button>
              </LinkContainer>
            </div>
          </Col>
          <Col lg={4}>
            <div className="home-card mb-3">
              <h6>2. Get a wallet</h6>
              <p>Get a hardsware or software wallet to hold your tokens.</p>
              <LinkContainer to='/wallets'>
                <button className='btn btn-danger home-link'>Wallets</button>
              </LinkContainer>
            </div>
          </Col>
          <Col lg={4}>
            <div className="home-card mb-3">
              <h6>3. Get stuck in</h6>
              <p>Vist some of these applications and have a look around</p>
              <LinkContainer to='/dapps'>
                <button className='btn btn-danger home-link'>Apps</button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
      </section>

      {/* <section className='home-section-4 mt-5'>
        <Row>
          <Col lg={12} className='p-3'>
            <Alert style={{ background: '#03ffc5'}} className='p-5'>
              <h4 style={{ color: '#000'}}>Updates</h4>
              <p style={{ color: '#000'}}>This site will be updated as frequently as possible with new information and links. Please note this will not be an exhustive list containing every project and token in the space. The goal is to give you solid information so that you can find your way to start with. It is then up to you to dig deeper and learn.</p>
            </Alert>
          </Col> 
          <Col lg={12} className='p-3'>
            <Alert style={{ background: '#FF2A6D'}} className='p-5'>
              <h4 style={{ color: '#000'}}>Remember...</h4>
              <p style={{ color: '#000'}}>If you are engaging in a DeFi project, buying crypto currency or moving money between wallets, always ensure you are have researched and understand what you are doing. Please be aware that you should only carry out transactions with the genuine projects, smart contracts and wallet addresses. Make sure you know where your money is going.</p>
            </Alert>
          </Col> 
        </Row>
      </section> */}
    </div>
  )
}

export default HomeView
