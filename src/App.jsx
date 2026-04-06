import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import data from './data.json'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
    <UserContextProvider>
      <Navbar />

      <div className='grid grid-cols-4 gap-3.5 py-6 px-4'>
        {
          data.map((item) => (
            <Card item={item} />
          ))
        }
      </div>

      <Footer />
    </UserContextProvider>
  )
}

export default App
