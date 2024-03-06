// import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Body from './components/Body'
function App() {
  // const [count, setCount] = useState(0)

  return (
   
    <div className='appContainer'>
      <Navigation /> 
      <Body />
    </div>
   
  )
}

export default App
