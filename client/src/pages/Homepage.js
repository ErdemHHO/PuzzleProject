import React from 'react'
import Navbar from '../components/Navbar'
import PhotoForm from '../components/PhotoForm'
import Puzzle from '../components/Puzzle'

function Homepage() {
  return (
    <div>
        <br />
        <PhotoForm/>
        <Puzzle />
    </div>
  )
}

export default Homepage