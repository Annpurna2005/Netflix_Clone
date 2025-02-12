
import './App.css'

import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import Trending from './Components/Trending/Trending'

const App = () => {
  return (
    <>
    <div className='App'>
    <LandingPage />
    </div>
   <div id="Trend">
   <Trending />
   </div>
    </>
  )
}

export default App