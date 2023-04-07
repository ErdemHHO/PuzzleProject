import React,{useState,useEffect} from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import * as api from "../api/index";

function Puzzle() {

    const [dataImages, setDataImages] = useState();

    const correctImages=[      
        'http://localhost:4000/uploads/parca_1.jpg',
        'http://localhost:4000/uploads/parca_2.jpg',
        'http://localhost:4000/uploads/parca_3.jpg',
        'http://localhost:4000/uploads/parca_4.jpg',
        'http://localhost:4000/uploads/parca_5.jpg',
        'http://localhost:4000/uploads/parca_6.jpg',
        'http://localhost:4000/uploads/parca_7.jpg',
        'http://localhost:4000/uploads/parca_8.jpg',
        'http://localhost:4000/uploads/parca_9.jpg',
        'http://localhost:4000/uploads/parca_10.jpg',
        'http://localhost:4000/uploads/parca_11.jpg',
        'http://localhost:4000/uploads/parca_12.jpg',
        'http://localhost:4000/uploads/parca_13.jpg',
        'http://localhost:4000/uploads/parca_14.jpg',
        'http://localhost:4000/uploads/parca_15.jpg',
        'http://localhost:4000/uploads/parca_16.jpg'];

      const puzzleess = async () => {
        const response = await api.fetchPuzzle();
      
        if (Array.isArray(response.data.images)) { 
          setDataImages(response.data.images); 
      
          const shuffledImages = [...response.data.images].sort(() => Math.random() - 0.5);
          setDataImages(shuffledImages);
        } else {
          console.log("Bir Hata Oluştu");
        }
      };

        useEffect(() => {
          puzzleess();
        }, []);

    
      const [firstIndex, setFirstIndex] = useState(null);
      const [secondIndex, setSecondIndex] = useState(null);

      function arraysEqual(dataImages, correctImages) {
        for (let i = 0; i < dataImages.length; i++) {
          if (dataImages[i] !== correctImages[i]) {
            return console.log("Hatalı");
          }
        }
        return  console.log("Tebrikler Çözdünüz");
      }

      const handleClick = (index) => {
        if (firstIndex !== null) {
            setSecondIndex(secondIndex === null ? index : secondIndex);
          }
          
          if (firstIndex !== null && firstIndex !== index) { // İlk tıklama yapıldıysa
            const newImages = [...dataImages];
            const firstImage = newImages[firstIndex];
            const secondImage = newImages[index];
            
            // Yer değiştirme işlemi
            newImages[firstIndex] = secondImage;
            newImages[index] = firstImage;
          
            // State'i güncelleme
            setDataImages(newImages);
            setFirstIndex(null);
            setSecondIndex(null);
            arraysEqual(newImages,correctImages);
            console.log("son",newImages);
            console.log("doğru",correctImages)
          } else { // İlk tıklama yapılmamışsa
            setFirstIndex(index);
          }  
      };
  return (
    <div className='puzzle'>
      {dataImages ? (
        <div>
             <div class='point bg-info text-center mt-1 mx-3 p-1'>
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, marginRight: '20px' }}>Süre: 15:03</div>
                  <div style={{ flex: 1, marginRight: '20px' }}>Hamle Sayısı: 16</div>
                  <div style={{ flex: 1, marginRight: '20px' }}>Puan : 65</div>
                  <div style={{ flex: 1 }}>Tarih: 19.09.2001</div>
                </Container>
              </div>

          <Container className='genislik pt-3 text-center'>
            <Row>
                {dataImages.slice(0, 4).map((img, index) => (
                    <Col key={index} className="field-wrapper">
                    <img src={img} alt="Logo" onClick={() => handleClick(index)} />
                    </Col>
                ))}
            </Row>
            <Row>
                {dataImages.slice(4, 8).map((img, index) => (
                    <Col key={index + 4} className="field-wrapper">
                    <img src={img} alt="Logo" onClick={() => handleClick(index + 4)} />
                    </Col>
                ))}
            </Row>
            <Row>
            {dataImages.slice(8, 12).map((img, index) => (
                <Col key={index + 8} className="field-wrapper">
                <img src={img} alt="Logo" onClick={() => handleClick(index + 8)} />
                </Col>
            ))}
            </Row>
            <Row>
            {dataImages.slice(12, 16).map((img, index) => (
                <Col key={index + 12} className="field-wrapper">
                <img src={img} alt="Logo" onClick={() => handleClick(index + 12)} />
                </Col>
            ))}
            </Row>
          </Container>          
        </div>

      ) : (
          <div className="loading pt-5 p-5">Yükleniyor&#8230;</div>
        )}
    </div>
  )
}

export default Puzzle
