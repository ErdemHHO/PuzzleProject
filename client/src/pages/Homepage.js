import React from 'react'

import {Container} from 'react-bootstrap'

import Navbar from '../components/Navbar'
import Puzzle from '../components/Puzzle'
import Footer from '../components/Footer'



function Homepage() {
  return (
    <div>
        <br />
        <Navbar />
        <Puzzle />

        <Footer />
    </div>
  )
}

export default Homepage