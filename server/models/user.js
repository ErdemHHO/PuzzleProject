import mongoose from 'mongoose';

const userShema = mongoose.model('user',{
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
});

export default userShema;