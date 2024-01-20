import { useState } from 'react'
import './App.css'
import Change from './assets/components/change/Change'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>

      <Change darkMode={darkMode} setDarkMode={setDarkMode} />

    </>
  )
}

export default App
