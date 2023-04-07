
import React, { useState,useEffect } from 'react';
import * as api from "../api/index";

import {useNavigate} from 'react-router-dom' 

import {Form,Container,Row,Button} from 'react-bootstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';

import * as actionType from '../constants/actionTypes.js';



const PhotoForm = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const [postData, setPostData] = useState({
    fileName: null,
    creator: `${user?.result?._id}`
  });

  const [formTrue, setFormTrue] = useState(false);
  console.log(formTrue)

  const handlePhotoChange = (event) => {
    setPostData({ ...postData, fileName: event.target.files[0] });
  };


  const navigate = useNavigate();

  const dispatch = useDispatch();


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (!user) {
      navigate("/signin");
    } else {
      setUser(user);
    }
  }, []);



    const logout = () => {
      dispatch({ type: actionType.LOGOUT });

      navigate('/signin');

      setUser(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("fileName", postData.fileName);
    formData.append("creator", postData.creator);

    try {
      const response = await api.createPuzzle(formData);
      console.log(response);
      toast.success(response.data.msg);
      navigate("/home");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.msg);
      } else {
        toast.error("Kare veya Kareye Yakın Bir Fotoğraf Kullanmalısınız");
      }
    }
  };

  return (
    <div>
      <Form>
        <Container className='bg-light p-3 border border-1 rounded-3 border-dark'>
          <Row className="d-flex justify-content-center">
              <h3 className="text-center">Puzzle Oluştur Oyuna Başla</h3>
              <hr/>
              <Form.Group className='mb-3' controlId='textInput'>
                  <div>
                  <Form.Control
                      placeholder='Bir Fotoğraf Seç'
                      key="file-input"
                      type='file'
                      className='form-control-file'
                      accept='image/*'
                      onChange={handlePhotoChange}
                  />
                  </div>
              </Form.Group>
              <Button variant="info" type="submit" className='justify-content-center' onClick={handleSubmit}  disabled={!postData.fileName}>
                  Oluştur
              </Button>
              <Form.Text className="text-muted text-end">
                Vaz Mı Geçtin <strong className='text-black' onClick={logout} to='/singin'>Cıkıs Yap</strong> 
              </Form.Text>
          </Row>
          </Container>
          
        </Form>      
    </div>

  );
};

export default PhotoForm;
