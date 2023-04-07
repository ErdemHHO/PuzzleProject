import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 

import SigninCom from '../components/SigninCom'

function SigninPage() {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));

  const navigate=useNavigate();

    useEffect(() => {
      if (user) {
      navigate("/");
      }
  }, []);

  return (
    <div className="deneme bg-info">
      <div className="deneme1 bg-light p-4">
        <SigninCom />
      </div>
    </div>
  )
}

export default SigninPage