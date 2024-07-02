import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { VFXProvider } from 'react-vfx'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeView from './views/HomeView'
import BlockchainView from './views/BlockchainView'
import EthereumView from './views/EthereumView'
import DappsView from './views/DappsView'
import DefiView from './views/DefiView'
import DeveloperView from './views/DeveloperView'
import ExchangesView from './views/ExchangesView'
import GamesView from './views/GamesView'
import NFTView from './views/NftView'
import LinksView from './views/LinksView'
import LiteratureView from './views/LiteratureView'
import WalletView from './views/WalletView'

function App() {
  return (
    <VFXProvider>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/blockchain' component={BlockchainView} exact />
            <Route path='/ethereum' component={EthereumView} exact />
            <Route path='/dapps' component={DappsView} exact />
            <Route path='/defi' component={DefiView} exact />
            <Route path='/games' component={GamesView} exact />
            <Route path='/nft' component={NFTView} exact />
            <Route path='/developer' component={DeveloperView} exact />
            <Route path='/exchanges' component={ExchangesView} exact />
            <Route path='/links' component={LinksView} exact />
            <Route path='/literature' component={LiteratureView} exact />
            <Route path='/wallets' component={WalletView} exact />
            <Route path='/' component={HomeView} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </VFXProvider>
  )
}

export default App
