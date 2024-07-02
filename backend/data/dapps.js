const dapps = [
  {
    name: "Aave",
    description: "The Aave token is the native token of the Aave protocol. The protocol itself provides lending and borrowing in many ERC-20 Ethereum tokens through liquidity pools. When you contribute to these pools you can earn a certain level of variable interest",
    url: "https://aave.com/",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/aave.png"
  },
  {
    name: "Uniswap",
    description: "Uniswap is a token exchange platform in which you can exchange tokens to any other ERC-20 as well as allowing you to earn interest on providing liquidity. As well as this Uniswap allows anybody to create liquidity pools",
    url: "https://uniswap.org/",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/uniswap.png"
  },
  {
    name: "SushiSwap",
    description: "The SushiSwap protocol realigns incentives for network participants by introducing revenue sharing and forum-driven network efforts to the popular AMM model",
    url: "https://www.sushi.com/",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/sushiswap.png"
  },
  {
    name: "Compound",
    description: "Compound is again another platform that allows you to borrow, lend, and earn interest against the amount that you have staked to Compound liquidity pools.Compound just like Maker operates through community governance of the platform that allows holders of the native COMP tokens to propose changes and vote on any changes to the protocol",
    url: "https://compound.finance/",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/compound.png"
  },
  {
    name: "Synthetix",
    description: "Synthetix platform exists on the Ethereum blockchain to create synthetic assets that track the value of assets that exist in the real world. The assets that are tracked range from Fiat currencies, crypto, and commodities all the way up to indices and stocks",
    url: "https://synthetix.io/",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/synthetix.png"
  },
  {
    name: "PancakeSwap",
    description: "PancakeSwap, the leading DEX on Binance Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE",
    url: "https://pancakeswap.finance/",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/pancakeSwap.png"
  },
  {
    name: "Wault Finance",
    description: "Wault Finance is a decentralized finance hub that connects all of the primary DeFi use-cases within one simple ecosystem, on the Binance Smart Chain. In short, an all-in-one DeFi Platform!",
    url: "https://wault.finance/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/WaultFinance.png"
  },
  {
    name: "Curve Finance",
    description: "Curve is an exchange liquidity pool on Ethereum designed for: extremely efficient stablecoin trading, low risk, supplemental fee income for liquidity providers",
    url: "https://curve.fi/",
    category: "DeFi",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/curveFinance.png"
  },
  {
    name: "CryptoVoxels",
    description: "Cryptovoxels is a virtual world powered by the Ethereum blockchain. Players can buy land and build stores and art galleries. Editing tools, avatars and text chat are built in",
    url: "https://www.cryptovoxels.com/",
    category: "Games",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/cryptovoxels.jpg"
  },
  {
    name: "Dark Forest",
    description: "Dark Forest is an MMO space-conquest game where players discover and conquer planets in an infinite, procedurally-generated, cryptographically-specified universe",
    url: "https://zkga.me/",
    category: "Games",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/darkforest.png"
  },
  {
    name: "Light Bringer",
    description: "LiteBringer is the first true Litecoin game. Level up RPG characters, trade with other players and earn real money",
    url: "https://www.litebringer.com/",
    category: "Games",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/lightbringer.jpg"
  },
  {
    name: "Alien Worlds",
    description: "Alien Worlds is defi NFT metaverse where you can collect and play with unique digital items. You can farm Trilium and NFTs within Alien Worlds by playing the mining and fighting games and by owning land where you charge rental commission.",
    url: "https://alienworlds.io/",
    category: "Games",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/alienworlds.jpg"
  },
  {
    name: "Aavegotchi",
    description: "AAavegotchi is a DeFi-enabled crypto collectibles game developed by Singapore-based Pixelcraft Studios that allows players to stake Non-fungible tokens (NFTs) avatars with interest-generating aTokens and interact with the Aavegotchi metaverse. It is a unique combination of Decentralized Finance (DeFi) and NFTs",
    url: "https://aavegotchi.com/",
    category: "Games",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/aavegotchi.png"
  },
  {
    name: "Rarable",
    description: "Rarible is a software allowing digital artists and creators to issue and sell custom crypto assets that represent ownership in their digital work",
    url: "https://rarible.com/",
    category: "NFT",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/rarable.jpg"
  },
  {
    name: "Opensea",
    description: "The world’s largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs), including ERC721 and ERC1155 assets. Buy, sell, and discover exclusive digital assets like Axies, ENS names, CryptoKitties, Decentraland, and more",
    url: "https://opensea.io/",
    category: "NFT",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/opensea.jpg"
  },
  {
    name: "CryptoPunks",
    description: "10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain",
    url: "https://www.larvalabs.com/cryptopunks",
    category: "NFT",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/cryptopunks.jpg"
  },
  {
    name: "NBA Top Shots",
    description: "Thousands of NBA Fans from around the world collecting over 7.6 million Top Shot Moments. Start building your roster of Rookies, Vets, and Rising Star Players",
    url: "https://nbatopshot.com/",
    category: "NFT",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/nbatopshot.jpg"
  },
  {
    name: "Marble Cards",
    description: "MarbleCards is a platform for collecting internet content and measuring its value. Any unique web page URL can be marbled into a collectible card on Ethereum but only once and by one collector.",
    url: "https://marble.cards/",
    category: "NFT",
    image: "https://blockchaindefiresources.s3.eu-west-2.amazonaws.com/marblecards.png"
  }
]

export default dapps