import React from 'react'
import Navbar from '../components/Navbar'
import PhotoForm from '../components/PhotoForm'
import Puzzle from '../components/Puzzle'

import {Container} from 'react-bootstrap'


function Homepage() {
  return (
    <Container className="bg-light">
    <div>
        <br />
        <Navbar />
        {/* <PhotoForm/> */}
        <Puzzle />
    </div>
    </ Container >
  )
}

export default Homepage