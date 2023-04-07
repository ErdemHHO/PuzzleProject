import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 


import SignupCom from '../components/SignupCom'

function SignupPage() {


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
        <SignupCom />
      </div>
    </div>
  )
}

export default SignupPage