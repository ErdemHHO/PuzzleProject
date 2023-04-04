import mongoose from "mongoose";
import Jimp from "jimp";
import puzzleShema from '../models/puzzle.js'

const createPuzzle = async (req, res) => {
    try {
      const file = req.file;
      console.log(req.file)
      console.log(req.body)
  
      const image = await Jimp.read(file.path); 
      const width = image.bitmap.width; 
      const height = image.bitmap.height;
  
      const pieceWidth = Math.ceil(width / 4); 
      const pieceHeight = Math.ceil(height / 4);
  
      for (let y = 0; y < height; y += pieceHeight) {
        for (let x = 0; x < width; x += pieceWidth) {
          const pieceNum = ((y / pieceHeight) * 4) + (x / pieceWidth) + 1;
          const piece = image.clone().crop(x, y, Math.min(pieceWidth, width - x), Math.min(pieceHeight, height - y));
          await piece.writeAsync(`uploads/parca_${pieceNum}.jpg`);
        }
      }

      const newPuzzle = new puzzleShema({ selectedFile: file.path });
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
        return res.status(200).json(puzzles);
    } catch (error) {
        return res.status(404).json(error.message);
    }
}

export{
    createPuzzle,getPuzzle
}