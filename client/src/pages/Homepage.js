import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 

import Navbar from '../components/Navbar'


import Social from '../components/Social'
import Puzzle from '../components/Puzzle'
import Footer from '../components/Footer'



function Homepage() {

    const [user] = useState(JSON.parse(localStorage.getItem('profile')));

    const navigate=useNavigate();

      useEffect(() => {
        if (!user) {
        navigate("/signin");
        }
    }, []);

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