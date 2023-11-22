import { useState } from 'react'
import './App.css'
import Header from './sections/Header'
import Nav from './sections/Nav'
import Results from './sections/Results'
import requests from './request'

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <main>
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </main>
  )
}

export default App
