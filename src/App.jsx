import { useState } from 'react'
import Navbar from './components/Navbar'
import Terminal from './components/Terminal'

function App() {

  return (
    <div className='w-full h-screen'>
     <Navbar/>
     <Terminal/>
    </div>
  )
}

export default App
