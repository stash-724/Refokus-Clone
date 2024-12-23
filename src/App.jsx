import React from 'react'
import Navbar from "./components/Navbar"
import Work from "./components/Work"
function App() {
  return (
    <div className=" h-screen w-screen bg-zinc-900 text-white font-['satoshi']">
      <Navbar/>
      <Work/>
    </div>
  )
}

export default App
