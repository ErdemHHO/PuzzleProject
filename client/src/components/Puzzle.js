import React,{useState,useEffect} from 'react'
import {Container,Col,Row,Modal,Button} from 'react-bootstrap'
import {useNavigate,Link} from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/tr' ;
import * as api from "../api/index";


function Puzzle() {
  const navigate=useNavigate();
    //Post İşlemleri
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [postData, setPostData] = useState({
        time:'',
        numberOfMoves:'',
        point:'',
        creator: `${user?.result?._id}`
      });
    

    const [dataImages, setDataImages] = useState();

    //Toplam Tıklanma Sayısını Tutuyor
    const [numberOfMoves, setNumberOfMoves] = useState(0);

    //Oyunun Oynandığı Tarih Bilgisini Moment Paketi İle İstenilen Formatta Ayarlanması
    const now = moment();
    const formattedDate = now.format('DD/MM/YYYY');

    //Puan Bilgisini Tutuyor
    const [point, setPoint] = useState(0);

    //Doğruluk Bilgisini Tutuyor
    const [success, setSuccess] = useState(false);
    const [modalShow, setModalShow] =useState(false);

    //Puzzle Parçalarının Doğru Halini Oyun Sonuna Kadar Değişmeyecek Şekilde Tuttuğumuz Ve Kontrol Sağladığımız Dizi
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


      // Serverdan Puzzle Parçalarını Çekiyoruz Ve Karıştırıyoruz
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


      //Puzzle Kontrol İşlemleri
      function arraysEqual(dataImages, correctImages) {
        for (let i = 0; i < dataImages.length; i++) {
          if (dataImages[i] !== correctImages[i]) {
            return console.log();
          }
        }
        return  setModalShow(true);
      }    


      //Puzzle Parçaları Tıklanma İşlemleri
      const [firstIndex, setFirstIndex] = useState(null);
      const [secondIndex, setSecondIndex] = useState(null);

      const handleClick = (index) => {
        if(success){
          setModalShow(true)
        }else{
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

              if(newImages[index]===correctImages[index]){
                  setPoint(prevPoint => prevPoint + 5);
              }else{
                  setPoint(prevPoint => prevPoint -10 );
              }
            
              // State'i güncelleme
              setDataImages(newImages);
              setFirstIndex(null);
              setSecondIndex(null);
              arraysEqual(newImages,correctImages);

              setNumberOfMoves(prevNumberOfMoves => prevNumberOfMoves + 1);
            } else { // İlk tıklama yapılmamışsa
              setFirstIndex(index);
            }            
          }
      };



      //Timer İşlemleri
      const [seconds, setSeconds] = useState(0);

      useEffect(() => {
        setPostData({
          ...postData,
          time: sayac,
          numberOfMoves: numberOfMoves,
          point: point
        });
        let intervalId = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
      
        // stopTimer fonksiyonu
        const stopTimer = () => {
          clearInterval(intervalId);
        };
      
        // modalShow değiştiğinde stopTimer fonksiyonunu çağır
        if (modalShow) {
          stopTimer();
        }
      
        // useEffect temizleyici fonksiyon
        return () => {
          stopTimer();
        };
      }, [modalShow]);

      
      const displayTime = () => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}.${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      }
      const sayac = displayTime(); 

      const handleSubmit = async (event) => {
        event.preventDefault();

        await setPostData({
          ...postData,
          time: sayac,
          numberOfMoves: numberOfMoves,
          point: point
        });


        try {
          if(postData.time){
            const response = await api.createPoint(postData);

          }
        } catch (error) {
          console.error(error);
        }
      };
      

  return (
    <div className='puzzle'>
    {dataImages ? (
      modalShow ? (
      <div className='tebrik bg-success text-light text-center mt-5 mx-5 p-1 '>

        <h1 className='mt-3 mb-3'>TEBRIKLER PUZZLI TAMAMLADIN</h1>
        <hr />
        <Container className='tebrik-div mt-5' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>Tamamlama Süren: {displayTime()}</div>
          <div style={{ flex: 1, marginRight: '20px' }}>Hamle Sayın: {numberOfMoves}</div>
          <div style={{ flex: 1, marginRight: '20px' }}>Puanın : {point}</div>
          <div style={{ flex: 1 }}>Tarih: {formattedDate}</div>
        </Container>
        <Row className='text-center p-5'>
            <Col className='d-grid gap-2'>
              <Link to="/statistics">
                <Button variant="danger" size="lg" className="w-100">
                  Skor Tablosu
                </Button>
              </Link>
            </Col>  
            <Col className='d-grid gap-2'>
                <Button variant="info" size="lg" className="w-100" href='/' onClick={handleSubmit}>
                  Sonucu Kaydet Ve Yeni Puzzla Geç
                </Button>
            </Col>  
        </ Row>

      </div>

      ) : (
        <div>
          <div>
              <div className='point bg-info text-center mt-1 mx-3 p-1'>
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, marginRight: '20px' }}>Süre: {displayTime()}</div>
                  <div style={{ flex: 1, marginRight: '20px' }}>Hamle Sayısı: {numberOfMoves}</div>
                  <div style={{ flex: 1, marginRight: '20px' }}>Puan : {point}</div>
                  <div style={{ flex: 1 }}>Tarih: {formattedDate}</div>
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
        </div>
      )
    ) : (
      <div className="loading pt-5 p-5">Yükleniyor&#8230;</div>
    )}
     </div>
  )
}

export default Puzzle
