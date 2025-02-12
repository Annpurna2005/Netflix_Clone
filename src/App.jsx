
import './App.css'

import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import Trending from './Components/Trending/Trending'
import Reasons from './Components/Reasons/Reasons'
import Questions from './Components/Questions/Questions'
import { Footer } from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='App'>
    <LandingPage />
    </div>
   <div id="Trend">
   <Trending />
   </div>
   <div>
    <Reasons />
   </div>
   <div>
    <Questions />
   </div>
   <div>
    <Footer />
   </div>
    </>
  )
}

export default App