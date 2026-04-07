import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import data from './data.json'
import UserContextProvider from './context/UserContextProvider'


function App() {

  const [themeMode, setThemeMode] = useState('light')
  console.log(themeMode);

  return (
    <UserContextProvider>

      <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />

      <div className={`grid grid-cols-4 gap-3.5 py-6 px-4 ${themeMode}`}>
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
