import React, { useState } from 'react';
import PhotoForm from '../components/PhotoForm';

function FormPage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

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
