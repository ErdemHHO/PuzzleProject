import React from 'react'

import { FaLinkedin,FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa'

function Social() {
  return (
    <div className='social'>
        <div className='icon p-1 linkedin'> <FaLinkedin size={32}  /></div>
        <div className='icon p-1 facebook'><FaFacebookF size={32}  /> </div>
        <div className='icon p-1 instagram'> <FaInstagram size={32}  /></div>
        <div className='icon p-1 twitter'><FaTwitter size={32}  /></div>    
    </div>
  )
}

export default Social