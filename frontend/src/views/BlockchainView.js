import React from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import MainCard from '../components/MainCard'
import BlockchainArt from '../assets/blockchainArt.jpg'
import { Col, Row, Image } from 'react-bootstrap'

const BlockchainView = () => {
  return (
    <>
      <Meta title='Blockchain & DeFi Resources | Blockchain'  />
      <Hero heading='Blockchain' />
      <Row className='mt-2'>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>What is a Blockchain?</h3>
              <p>
              A blockchain is a type of distributed ledger technology (DLT) where a digital ledger records transactions across an entire network that is linked to a particular blockchain. The digital information is stored in the block and distributed across the network like a chain, in a way that it can’t be changed or hacked. A record of each transaction on the blockchain is publicly recorded to the ledger of every participant.
              </p>
            </div>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>How do they work?</h3>
              <p>
              Computers connected to the network or nodes as they are referred to, add new transcations to the blockchain in chronological order by performing mathematical calculations to generate new blocks containing the transaction information. Cryptographic hashing is used to ensure security of the information held, each block contains the hash used in the previous block which is then hashed. 
              <br />
              <br />
              Due to the decentralized nature of blockchains, all transactions can be transparently viewed by either having a personal node or by using blockchain explorers that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as new blocks are confirmed.
              </p>
            </div>
            <div className='text-center mt-5'>
              <a href='https://blockgeeks.com/graphics/' target='_blank' rel="noreferrer">
                <Image className='blockchain-img' src='https://blockgeeks.com/wp-content/uploads/2019/05/transactioncycle.jpg' alt='Transaction Cycle' border='0' fluid='true' />
              </a>
            </div>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>How secure are Blockchains?</h3>
              <p>
              The security of blockchains is one of the highlight features and blockchains account for the security in serveral ways.
              <br />
              <br />
              Blocks get added to the end of the blockchain and once they are added it is extremely difficult to go back and alter the previous block due to the Cryptographic nature of the blocks containing part of the previous blocks hash. A majority consensus on the network would be needed in order to make a change, which would be very difficult to get unless it was for something extremly imporant on the network.
              <br />
              <br />
              Due to the distributed ledger technology where everyone in the network has their own copy of the transactions, if someone were to alter their own copy of the ledger it would no longer match with everybody else's and in turn everyone would be able to see where someone made an attempt to hack or cheat the system. This is a critical part of the security of blockchains that gives it the trust worthiness because every can see what everyone is doing. You can't get away with being dishonest when everyone knows that you are.
              <br />
              <br />
              The only way to successfully hacj a blockchain is to control at least 51% of the network so that a hacker can then effectively overidde to rest of the network. Such a attack though would require an immense amount of money and resources to alter all the blocks on the chain that it is near enough worthless to even try.
              </p>
            </div>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Where does Cryptocurrency fit in?</h3>
              <p>
              Cryptocurrencies are digital or virtual currencies that are secured with cryptography and cannot be double spent.
              <br />
              <br />
              A lot of Cryptocurrencies are based on blockchain technologies and are therefore decentralised by nature and are not subject to central authority or control. Cryptocurrencies are often referred to as "Crypto" due to the encryption algorithms and techniques used in the recording of transactions as well as the mining and processing of the currencies.
              <br />
              <br />
              Often Cryptocurrency is not really the best to use when describing them as for the most part they are simply tokens used to operate the protocol they run on. Take for example Ethereum, Ether is used to run the Ethereum network through Gas which is charged to all transactions on the network. This is a significant diference to something that was designed to be a digitised currency from the outset such a Bitcoin.
              <br />
              <br />
              Like the principles of blockchains, cryptocurrencies promise to make it easy to transfer funds without the need of a middleman or third party. These will instead use public and private keys to send and receive payments to wallets or as they simply are "account addresses".
              </p>
            </div>
            <div className='text-center mt-3'>
            Please include attribution to www.blockgeeks.com  with this graphic.
              <a href='https://blockgeeks.com/graphics/' target='_blank' rel="noreferrer"><Image className='blockchain-img' src='https://blockgeeks.com/wp-content/uploads/2019/05/opensthedoor.jpg' alt='Blockchain Technological Possibility' border='0' fluid='true' /></a>
            </div>
          </Col>
          <Col md={12} className='px-5'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Web 3.0</h3>
              <p>
              We've had the start of the internet, Web 1.0. We have the current internet, Web 2.0, well next is what could be the future, Web 3.0. This is the backend revolution as some have called it and refers to the next evolutionary stage of the internet. 
              <br />
              <br />
              It is felt that the current web that supports platforms such as social media and other organisations which use our data as well as store this on central servers has brought about a disconnect between ourselves and our data. We no longer control our personal data online and through data sovereignity on decentralised networks a new stateful data layer can be created which will be key in trasferring and managing values. The frontend of the internet remains the same but behind the scenes the P2P networks and blockchains replace the centralised servers that companies hold our data on.
              <br />
              <br />
               Blockchains and decentralised protocols can expect a convergence that will be seemlessly intergrated and automated through smart contracts to power anything from the smallest transactions to changing the very very complanies operate their businessess.
               <br />
               <br />
               Just see below at some of the impacts Web 3 and blockchains can have.
              </p>
            </div>
            <div className='text-center mt-3'>
            Please include attribution to www.blockgeeks.com  with this graphic.
            <p><a href='https://blockgeeks.com/graphics/' target='_blank' rel="noreferrer"><Image className='blockchain-img' src='https://blockgeeks.com/wp-content/uploads/2019/05/web3.0blockchainbusiness.jpg' alt='Web 3 and Blockchain Businesses' border='0' fluid='true' /></a>
            </p>
            </div>
          </Col> 
          <Row className='mt-2'>
            <Col md={12} className='px-4 text-center'>
              <div className='wrapper'>
                <h3 style={{ color: '#03ffc5'}}>Check out my article on Medium for a more information on 5 ways Blockchains will become important.</h3>
              </div>
            </Col>
            <Col md={12} className='p-3'>
              <MainCard title='5 Ways Blockchain Will Be Important In The Future.' text='How can Blockchain be used in the real world? Is it still important?' image={BlockchainArt} link='https://johnny-taft.medium.com/5-ways-blockchain-will-be-important-in-the-future-c9ece499e6a4' />
            </Col>
          </Row>
        </Row>
    </>
  )
}

export default BlockchainView
