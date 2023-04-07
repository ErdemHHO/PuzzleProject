import React , {useState,useEffect} from 'react';
import { Container, Row ,Col} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signup} from '../actions/auth'
import {useNavigate} from 'react-router-dom' 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignupCom() {
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
        confirmPassword:''
      });

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
          try {
            const response = await dispatch(signup(formData,navigate))
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
        <img className='puzzlegif' src='/img/puzzlegif.gif'></img> 
        Puzzle Oyunu
        <img className='puzzlegif' src='/img/puzzlegif.gif'></img> 
        </h2>

        <h4 className='text-center'>Kayıt Ol</h4>

        <Container>
            <Row>
                    <Col>               
                        <Form.Group className="mb-3" >
                            <Form.Label>Ad:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Adınızı Giriniz"             
                            onChange={(e) =>
                                setFormData({ ...formData, firstName: e.target.value })
                                } 
                            />
                        </Form.Group>
                    </Col>
                    <Col>               
                        <Form.Group className="mb-3" >
                            <Form.Label>Soyad:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Soyadınızı Giriniz"             
                            onChange={(e) =>
                                setFormData({ ...formData, lastName: e.target.value })
                                } 
                            />
                        </Form.Group>
                    </Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>E-Posta</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="E-Posta Giriniz"             
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                    } 
                />
            </Form.Group>

            <Row>
                    <Col>               
                        <Form.Group className="mb-3" >
                            <Form.Label>Sifre:</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Sifrenizi Giriniz"             
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                                } 
                            />
                        </Form.Group>
                    </Col>
                    <Col>               
                        <Form.Group className="mb-3">
                            <Form.Label>Sifre Tekrar:</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Sifrenizi Tekrar Giriniz"             
                            onChange={(e) =>
                                setFormData({ ...formData, confirmPassword: e.target.value })
                                } 
                            />
                        </Form.Group>
                    </Col>
            </Row>
        </Container>
        <div className="d-grid gap-2">
            <Button size="lg" type='submit' disabled={!formData.email || !formData.password || !formData.firstName || !formData.lastName || !formData.confirmPassword}>
                Üye Ol
            </Button>
            <Form.Text className="text-muted text-end">
                Zaten Bir Hesabın Varsa <Link to='/signin'>Giris Yap</Link> 
            </Form.Text>
        </div>
    </Form>
  );
}

export default SignupCom;