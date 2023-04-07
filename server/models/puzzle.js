import mongoose from 'mongoose';

const puzzleShema = mongoose.model('puzzle',{
    creator:{
        type: String,
        required: true
    },
    selectedFile:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:new Date()
    }
});

export default puzzleShema;