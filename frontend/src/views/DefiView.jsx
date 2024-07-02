import React from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import MainCard from '../components/MainCard'
import DeFi from '../assets/Defi.jpeg'
import { Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const DefiView = () => {
  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | DeFi' />
      <Hero heading='DeFi' para='Decentralised Finance.' />
      <Row className='mt-1'>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>What is Decentralised Finance (DeFi)</h3>
              <p>
              Decentralised Finance or DeFi for short is simply a term that refers to financial services such as borrowing, lending, and trading that are conducted on decentralised blockchain platforms as opposed to being carried out in the centralised manner of current financial services. Many of these functions can be conducted by something called Smart Contracts.
              </p>
            </div>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>The purpose of DeFi</h3>
              <p>
              DeFi is pushing the accelerator on its attempts to create a financial system that is beyond centralised governance and instead gives people full control over their assets and be able to partake in the financial system that is open, fair, and built for the technological world we live in. As can be seen in this graph the DeFi space has skyrocketed in 2020 with the total value standing at $23.85 billion dollars as of 16th January 2021.
              </p>
            </div>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>What can DeFi be used for</h3>
              <ul>
                <li>
                Borrowing and lending services
                </li>
                <li>
                Banking services
                </li>
                <li>
                Marketplaces and exchanges
                </li>
              </ul>
            </div>
            <LinkContainer to='/dapps'>
              <button className='btn btn-danger home-link'>DApps</button>
            </LinkContainer>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Advantages of DeFi</h3>
              <ul>
                <li>
                DeFi applications do not need any intermediaries or arbitrators as the code they are written in acts to resolve all possible disputes
                </li>
                <li>
                Single points of failure are eliminated due to the dectranlised nature of using a P2P based system.
                </li>
                <li>
                As data is recorded on blockchains and spread across thousands of nodes, shutdowning or cencoring anything becomes extremly difficult if not imposible
                </li>
                <li>
                Due to the open ecosystem it makes it easy for everyone to access the services. This is especially important for people who may not have access to other financial services
                </li>
              </ul>
            </div>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Disadvantages of DeFi</h3>
              <ul>
                <li>
                  Due to the nature of blockchains transactions are irreversible and any errors within the code of smart contracts will cause problems, especially given that they cannot be changed once they have been deployed to a blockchain
                </li>
                <li>
                  Scalability can be a big problem. Transactions take a long time to process as well as being very extremely expensive at times of congestion on the network
                </li>
                <li>
                  Vulnerability linked to Smart contracts. If there is a slight flaw in the code of a smart contract, it can lead to loss of funds
                </li>
                <li>
                  Liquidity issues. The amount of money in DeFi projects is still small compared to the traditional financial system
                </li>
                <li>
                  There is no real insurance. As insurance will protect investors in the event of a hacks or other fraudulent activities. Not having this cover could be problematic if something goes wrong
                </li>
              </ul>
            </div>
          </Col>

          <Row className='mt-2'>
            <Col md={12} className='px-4 text-center'>
              <div className='wrapper'>
                <h3 style={{ color: '#03ffc5'}}>Check out my article on Medium for a more information on DeFi</h3>
              </div>
            </Col>
            <Col md={12} className='p-4'>
              <MainCard title='DeFi' text='The Decentralised Finance future is starting now…' image={DeFi} link='https://johnny-taft.medium.com/defi-b102486a216c' />
            </Col>
          </Row>
        </Row>

    </div>
  )
}

export default DefiView
