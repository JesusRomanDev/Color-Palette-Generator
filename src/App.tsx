import { useState } from 'react'
import './App.css'
import Palette from './components/Palette'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Color Palette Generator</h1>
      <Palette />
    </>
  )
}

export default App
