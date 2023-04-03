import mongoose from 'mongoose';

const puzzleShema = mongoose.model('puzzle',{
    selectedFile:{
        type: String,
        required: true
    }
});

export default puzzleShema;