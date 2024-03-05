import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Body from './components/Body'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation /> 
      <Body />
    </>
  )
}

export default App
