import React,{useState} from 'react';
import {  Form, Container,Row,Button} from 'react-bootstrap';

function PhotoForm() {

    const [postData, setPostData] = useState({
        selectedFile: null
      });
      console.log(postData);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setPostData({ ...postData, selectedFile: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('selectedFile', postData.selectedFile);

        try {
            
        } catch (error) {
            
        }
    }
    

  return (
    <div >
    <Form onSubmit={handleSubmit}>
        <Container className='form-bg p-3 border border-1 rounded-3 border-dark'>
        <Row className="d-flex justify-content-center">
            <h3 className="text-center">Puzzle Oluştur</h3>
            <hr/>
            <Form.Group className='mb-3' controlId='textInput'>
                <div>
                <Form.Control
                    placeholder='Bir Fotoğraf Seç'
                    key="file-input"
                    type='file'
                    className='form-control-file'
                    accept='image/*'
                    onChange={handleFileInputChange}
                />
                </div>
            </Form.Group>
            <Button variant="warning" type="submit" className='justify-content-center' onClick={handleSubmit}>
                Oluştur
            </Button>
        </Row>
        </Container>
    </Form>
    </div>
  )
}

export default PhotoForm