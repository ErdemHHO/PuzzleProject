import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 
import PhotoForm from '../components/PhotoForm';

function FormPage() {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));

  const navigate=useNavigate();

    useEffect(() => {
      if (!user) {
      navigate("/signin");
      }
  }, []);

  return (
    <>
      {user ? (
        <div className='text-center'>
          <div>
            <div className='form-page bg-danger'>
              <h1 className='welcome-message text-white text-center mb-3'>
                HOSGELDIN {user?.result.firstName} {user?.result.lastName}
              </h1>
              <div className='form-page1  p-4'>
                <PhotoForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='loading pt-5 p-5'>Yükleniyor&#8230;</div>
      )}
    </>
  );
}

export default FormPage;
