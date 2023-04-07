import React , {useState,useEffect} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Link} from 'react-router-dom'


import {useDispatch} from 'react-redux'
import {signin} from '../actions/auth'
import {useNavigate} from 'react-router-dom' 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SigninCom() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

      const dispatch=useDispatch();
      const navigate=useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
          try {
            const response = await dispatch(signin(formData, navigate));
            console.log(response)
            if (response && response.success) {
              toast.success(response.msg);
            }
          } catch (error) {
            toast.error(error.message);
          }
      };
      
  return (
    <Form onSubmit={handleSubmit} >

        <h2 className='text-center'>        
        <img className='puzzlegif' src='/img/puzzlegif.gif' alt='gif'></img> 
        Puzzle Oyunu
        <img className='puzzlegif' src='/img/puzzlegif.gif' alt='gif'></img> 
        </h2>

        <h4 className='text-center'>Giriş Yap</h4>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-Posta</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Mail Adresinizi Giriniz"             
        onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
            } 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sifre</Form.Label>
        <Form.Control type="password" placeholder="Sifrenizi Giriniz" 
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        />
      </Form.Group>
        <div className="d-grid gap-2">
            <Button size="lg" type='submit' disabled={!formData.email || !formData.password}>
                Giriş Yap
            </Button>
            <Form.Text className="text-muted text-end">
                Henuz Bir Hesabın Yoksa <Link to='/signup'>Kayıt Ol</Link> 
            </Form.Text>
        </div>
    </Form>
  );
}

export default SigninCom;