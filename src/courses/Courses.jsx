import React from 'react'
import Navbar from '../componets/Navbar'
import Course from '../componets/Course'
import Footer from '../componets/Footer'


function Courses() {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen py-2'>
      <Course></Course>
      </div>
      <Footer></Footer>

    </>
  )
}

export default Courses
