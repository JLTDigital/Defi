import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
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
import MainLayout from './layouts/mainLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path='/blockchain' element={<BlockchainView />} exact />
        <Route path='/ethereum' element={<EthereumView />} exact />
        <Route path='/dapps' element={<DappsView />} exact />
        <Route path='/defi' element={<DefiView />} exact />
        <Route path='/games' element={<GamesView />} exact />
        <Route path='/nft' element={<NFTView />} exact />
        <Route path='/developer' element={<DeveloperView />} exact />
        <Route path='/exchanges' element={<ExchangesView />} exact />
        <Route path='/links' element={<LinksView />} exact />
        <Route path='/literature' element={<LiteratureView />} exact />
        <Route path='/wallets' element={<WalletView />} exact />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
