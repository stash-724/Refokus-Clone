import React from 'react'
import Navbar from "./components/Navbar"
import Work from "./components/Work"
import Stripes from './components/Stripes'
import Products from './components/Products'
function App() {
  return (
    <div className=" bg-zinc-900 text-white font-['satoshi']">
      <Navbar/>
      <Work/>
      <Stripes />
      <Products />
    </div>
  )
}

export default App
