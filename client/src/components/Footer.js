import React from 'react'

import {Form,Container,Row,Col,Button} from 'react-bootstrap';


function Footer() {
  return (
    <div>
        <Container fluid className='footer text-center bg-danger p-5 text-white mt-5'>
            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={4}>
                            <img className='Fpuzzlegif' src='/img/puzzlegif.gif' alt='gif'></img> 
                        </Col>
                        <Col md={8}>
                            <h4 className='baslik1'><strong>PUZZLE OYUNU</strong></h4>
                        </Col>
                    </Row>
                </Col>
                <Col className='text-center' md={6}>
                    <div>
                        <Form>
                            <Container className='p-3'>
                                <Row className="d-flex justify-content-center">
                                    <h3 className="text-center">Öneri , Istek ve Sikayet</h3>
                                    <Form.Control
                                        className='footer-form'
                                        type="text"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                    <Button variant="info" type="submit" className='justify-content-center mt-3'>
                                        Gönder
                                    </Button>
                                </Row>
                            </Container>
                        </Form>      
                    </div>
                </Col>
            </Row>
            <hr />
            <span className='Designed-By'> Erdem Hacihasanoglu | Özer Armagan | Seher Melike Unaldi </span> 
        </Container>
    </div>
  )
}

export default Footer
