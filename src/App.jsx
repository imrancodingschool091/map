import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import DriverLocation from './pages/DriverLocation'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home/>}/>
         <Route  path='/location' element={<DriverLocation/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
