
import mongoose from 'mongoose';

const pointShema = mongoose.model('point',{
    gamer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    numberOfMoves:{
        type:Number,
        required: true
    },
    time:{
        type:String,
        required: true
    },
    point:{
        type:Number,
        required: true
    },
    playDate:{
        type:Date,
        default:new Date()
    }
});

export default pointShema;