import React,{useState,useEffect} from 'react'
import {Container,Col,Row} from 'react-bootstrap'

function Puzzle() {
    const [images, setImages] = useState([
      "/img/parca_1.jpg",
      "/img/parca_2.jpg",
      "/img/parca_3.jpg",
      "/img/parca_4.jpg",
      "/img/parca_5.jpg",
      "/img/parca_6.jpg",
      "/img/parca_7.jpg",
      "/img/parca_8.jpg",
      "/img/parca_9.jpg"
    ]);
    const correctImages=[
      "/img/parca_1.jpg",
      "/img/parca_2.jpg",
      "/img/parca_3.jpg",
      "/img/parca_4.jpg",
      "/img/parca_5.jpg",
      "/img/parca_6.jpg",
      "/img/parca_7.jpg",
      "/img/parca_8.jpg",
      "/img/parca_9.jpg"];
    
    useEffect(() => {
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      setImages(shuffledImages);
    }, []);
    
      const [firstIndex, setFirstIndex] = useState(null);
      const [secondIndex, setSecondIndex] = useState(null);

      function arraysEqual(images, correctImages) {
        for (let i = 0; i < images.length; i++) {
          if (images[i] !== correctImages[i]) {
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
            const newImages = [...images];
            const firstImage = newImages[firstIndex];
            const secondImage = newImages[index];
            
            // Yer değiştirme işlemi
            newImages[firstIndex] = secondImage;
            newImages[index] = firstImage;
          
            // State'i güncelleme
            setImages(newImages);
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
    <div className='p-5 text-center'>
        <Container className='genislik'>
            <Row>
                {images.slice(0, 3).map((img, index) => (
                    <Col key={index} className="field-wrapper">
                    <img src={img} alt="Logo" onClick={() => handleClick(index)} />
                    </Col>
                ))}
            </Row>
            <Row>
                {images.slice(3, 6).map((img, index) => (
                    <Col key={index + 3} className="field-wrapper">
                    <img src={img} alt="Logo" onClick={() => handleClick(index + 3)} />
                    </Col>
                ))}
            </Row>
            <Row>
            {images.slice(6, 9).map((img, index) => (
                <Col key={index + 6} className="field-wrapper">
                <img src={img} alt="Logo" onClick={() => handleClick(index + 6)} />
                </Col>
            ))}
            </Row>
        </Container>
    </div>
  )
}

export default Puzzle