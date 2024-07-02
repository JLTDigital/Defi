import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, author, keywords }) => {
  return (
      <Helmet>
        <title>{title}</title>
        <meta name='descripton' content={description} />
        <meta name='author' content={author} />
        <meta name='keywords' content={keywords} />
      </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Blockchain & DeFi Resources | Home',
  description: 'Blockchain & DeFi Resources. Curated resources for beginners in the Crypto and DeFi space. Everything from Blockchain, Ethereum to Wallets, NFTs and Games.',
  author: 'Jonathan Taft - Full Stack Developer at JLTDigital',
  keywords: 'Blockchain, Cryptocurrency, Crypto, Web3, Bitcoin, Ethereum, Blockchain Developer, NFT, Crypto Wallets, DeFi, Decentralised Finance'
}

export default Meta
