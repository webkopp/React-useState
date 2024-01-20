import { useState } from 'react'
import './App.css'
import Faq from './assets/components/faq/Faq'

function App() {
  const [faqMode, setFaqMode] = useState(false)

  return (
    <>
      <Faq
        setFaqMode={setFaqMode}
        faqMode={faqMode}
      />
    </>
  )
}

export default App