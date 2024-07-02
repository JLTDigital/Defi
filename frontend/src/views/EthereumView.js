import React from 'react'
import Eth from '../assets/ethereum.png'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import MainCard from '../components/MainCard'
import { VFXImg } from 'react-vfx'
import CryptoPunks from '../assets/cryptopunks.jpg'
import { Col, Row, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BiLinkExternal } from 'react-icons/bi'


const EthereumView = () => {
  return (
  <>
    <Meta title='Blockchain & DeFi Resources | Ethereum' />
    <Hero heading='Ethereum' />
    <Row>
      <Col md={12} className='p-4 text-center'>
        <VFXImg shader='rgbGlitch' className='ethereum' src={Eth} alt="Ethereum"/>
      </Col>
      <Col md={12} className='p-2 text-center'>
        <h6 style={{ color: '#fff' }}>You can find out more about Ethereum over on their website 
        <a className='p-2' target="_blank" rel="noreferrer" href="https://ethereum.org/en/">
          <BiLinkExternal color='#03ffc5' />
        </a> 
        </h6>
      </Col>
    </Row>

    <Row className='mt-1'>
        <Col md={12} className='px-5'>
          <div className='wrapper'>
            <h3 style={{ color: '#03ffc5'}}>Ethereum</h3>
            <p>
            Ethereum is an open-source, blockchain-based, decentralized platform that is used for its own cryptocurrency, Ether, as well as enabling the use of Smart Contracts and Distributed Applications (ĐApps) to be built and run without any downtime, fraud, control, or interference from a third party.
            <br />
            <br />
            The community working on Ethereum has built a booming digital economy which is creating new ways for people to earn, create and work.
            </p>
          </div>
        </Col>
        <Col md={12} className='px-5'>
          <div className='wrapper'>
            <h3 style={{ color: '#03ffc5'}}>Ethereum Virtual Machine (EMV)</h3>
            <p>
            The Ethereum Virtual Machine (EVM) is the runtime environment for smart contracts in Ethereum. It is a 256-bit register stack designed to run the same code exactly as intended. It is the fundamental consensus mechanism for Ethereum.
            <br />
            <br />
            <span style={{ fontStyle: 'italic' }}>
            "The Ethereum protocol itself exists solely for the purpose of keeping the continuous, uninterrupted, and immutable operation of this machine. The EVM is the environment in which all Ethereum accounts and smart contracts live, and at any given block in the chain, Ethereum has one and only one 'canonical' state, and the EVM is what defines the rules for computing a new valid state from block to block.""
            </span>
            </p>
          </div>
        </Col>
        <Col md={12} className='px-5'>
          <div className='wrapper'>
            <h3 style={{ color: '#03ffc5'}}>Smart Contracts</h3>
            <p>
            Ethereum supports Smart Contracts and they are one of the core functions of the platform. A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. This code exists across a decentralized blockchain network, which in this case is the Ethereum blockchain. 
            <br />
            <br />
            Smart contracts are typically written in the programming language Solidity, which is the most popular as well as Vyper, a lanuguage based off the Python language.
            </p>
          </div>
          <div className='text-center mt-5'>
          <a href='https://blockgeeks.com/graphics/' target='_blank' rel="noreferrer"><Image className='blockchain-img' src='https://blockgeeks.com/wp-content/uploads/2019/05/smartcontractexplainer.jpg' alt='How Smart Contracts Work' border='0' fluid='true' /></a>
          </div>
        </Col>
        <Col md={12} className='px-5'>
          <div className='wrapper'>
            <h3 style={{ color: '#03ffc5'}}>Dapps</h3>
            <p>
            Decentralised applications have grown massivly in recent times and are now growing in capability to disrupt traditional businesses and create new types of businesses.
            <br />
            <br />
            DApps run on a P2P network or a blockchain network whereby multiple participants are consuming content, feeding or seeding content, or simultaneously performing both functions. In a public blockchain they offer a decentralized environment free from a central authority control.
            <br />
            <br />
            Some of the advantages of DApps are that with robust code they are resilient, transparent and and offer users and developers a technological landscape that could change many different Industries in society
            </p>
            <LinkContainer to='/dapps'>
              <button className='btn btn-danger home-link'>DApps</button>
            </LinkContainer>
          </div>
          <div className='text-center mt-5'>
            <a href='https://blockgeeks.com/graphics/' target='_blank' rel="noreferrer"><Image className='blockchain-img' src='https://blockgeeks.com/wp-content/uploads/2019/05/developingonethereum.jpg' alt='Ethereum Dapps' border='0' fluid='true' /></a>
          </div>
        </Col>
        <Col md={12} className='px-5'>
          <div className='wrapper'>
            <h3 style={{ color: '#03ffc5'}}>Non-Fungible Tokens (NFTs)</h3>
            <p>
            An NFT is a Non Fungible Token that is simply a digital token that is generated through cryptographic hashing to create a digital asset that cannot be replicated. These then exist on a blockchain, specifically the Ethereum blockchain. They are powered through smart contracts and right now are being used to sell exclusive items, collectibles, and digital artwork on dApps and other decentralised marketplaces such as Rarible and OpenSea.
            <br />
            <br />
            The NFT is in effect data stored in the ledger on a blockchain that identifies and certifies them as unique digital assets that are not interchangeable.
            <br />
            <br />
            The non-fungibility aspect of them is very important as well and is probably the most important part given how they are a form of exchange. If you have a £10 note and someone borrows it from you and will give you back that £10, you don’t expect to receive the exact same note back from them. As long as it is of the same value it doesn’t matter. This is the fungibility of cryptocurrency and other fiat currencies.
            </p>
            <LinkContainer to='/nft'>
              <button className='btn btn-danger home-link'>NFTs</button>
            </LinkContainer>
          </div>
        </Col>
      </Row>

      <Row className='mt-2'>
          <Col md={12} className='px-4 text-center'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Check out my article on Medium for a more information on NFTS</h3>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <MainCard title='NFTs' text='NFTs. What are they all about?' image={CryptoPunks} link='https://johnny-taft.medium.com/nfts-what-are-they-all-about-67e53dc71156' />
          </Col>
      </Row>
    </>
  )
}

export default EthereumView
