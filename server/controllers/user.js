import mongoose from "mongoose";
import Jimp from "jimp";
import puzzleShema from '../models/puzzle.js'

const createPuzzle = async (req, res) => {

    try {
      const file = req.file;
      if (!file) return res.status(400).json({ msg: 'Bir Fotoğraf Yüklemelisiniz' });
      
      const {creator}=req.body;
  
      const image = await Jimp.read(file.path); 
      const width = image.bitmap.width; 
      const height = image.bitmap.height;

      if((height/width) <= 0.96 || (width/height) <= 0.96 ){
        return res.status(400).send({msg:'Fotoğraf Kare Olabilecek Boyutlarda Olmalıdır'})}

      const pieceWidth = Math.ceil(width / 4); 
      const pieceHeight = Math.ceil(height / 4);
  
      for (let y = 0; y < height; y += pieceHeight) {
        for (let x = 0; x < width; x += pieceWidth) {
          const pieceNum = ((y / pieceHeight) * 4) + (x / pieceWidth) + 1;
          const piece = image.clone().crop(x, y, Math.min(pieceWidth, width - x), Math.min(pieceHeight, height - y));
          await piece.writeAsync(`uploads/parca_${pieceNum}.jpg`);
        }
      }

      const newPuzzle = new puzzleShema({ selectedFile: file.path, creator_id : creator });
      await newPuzzle.save();
      return res.status(201).json({ newPuzzle, msg: 'Puzzle Oluşturuldu' });
    } catch (error) {
      console.error(error);
      return res.status(409).json({ msg: error.message });
    }
  };
  

const getPuzzle=async(req,res)=>{
    
    try {
        const puzzles=await puzzleShema.find();
        const images=[      
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

        return res.status(200).json({puzzles,images});

    } catch (error) {
        return res.status(404).json(error.message);
    }
}

export{
    createPuzzle,getPuzzle
}