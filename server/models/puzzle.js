import mongoose from 'mongoose';

const puzzleShema = mongoose.model('puzzle',{
    creator_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
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