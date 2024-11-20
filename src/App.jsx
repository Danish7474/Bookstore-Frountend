import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"

import Courses from './courses/Courses'
import Sigup from './componets/Sigup'



function App() {
  return (
    <>
    <div  className='dark:bg-slate-900 dark:text-white'>
     <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
       <Route path='/sigup' element={<Sigup/>}/>
        
       
     </Routes>
     </div>
    </>
  )
}

export default App
