import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import data from './data.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div className='grid grid-cols-4 gap-3.5 py-6'>
        {
          data.map((item) => (
            <Card item={item} />
          ))
        }
      </div>

      <Footer />
    </>
  )
}

export default App
