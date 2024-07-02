import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import { database } from './db/database.js'

import dapps from './data/dapps.js'
import developer from './data/developer.js'
import exchanges from './data/exchanges.js'
import links from './data/links.js'
import literature from './data/literature.js'
import wallet from './data/wallet.js'

import Dapps from './schema/Dapps.js'
import Developer from './schema/Developer.js'
import Exchanges from './schema/Exchanges.js'
import Links from './schema/Links.js'
import Literature from './schema/Literature.js'
import Wallet from './schema/Wallet.js'


dotenv.config()

database()

const importData = async () => {
  try {
    await Dapps.deleteMany()
    await Developer.deleteMany()
    await Exchanges.deleteMany()
    await Links.deleteMany()
    await Literature.deleteMany()
    await Wallet.deleteMany()

    await Dapps.insertMany(dapps)
    await Developer.insertMany(developer)
    await Exchanges.insertMany(exchanges)
    await Links.insertMany(links)
    await Literature.insertMany(literature)
    await Wallet.insertMany(wallet)

    console.log('Data Imported'.green.inverse)
    process.exit()

  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Dapps.deleteMany()
    await Developer.deleteMany()
    await Exchanges.deleteMany()
    await Links.deleteMany()
    await Literature.deleteMany()
    await Wallet.deleteMany()

    console.log('Data Destroyed'.red.inverse)
    process.exit()

  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if(process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}