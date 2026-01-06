import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home'
import DriverLocation from './pages/DriverLocation'

const App = () => {
  return (
    <div>
      <Link to={"/location"}>Location</Link>
      <Routes>
        <Route  path='/' element={<Home/>}/>
         <Route  path='/location' element={<DriverLocation/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
