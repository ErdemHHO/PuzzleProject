import React from 'react'

import {Container} from 'react-bootstrap'

import Navbar from '../components/Navbar'


import Social from '../components/Social'
import Puzzle from '../components/Puzzle'
import Footer from '../components/Footer'



function Homepage() {
  return (
    <div>
        <br />
        <Navbar />
        <Puzzle />
        <Social />
        <Footer />
    </div>
  )
}

export default Homepage