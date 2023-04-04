

import { AUTH } from "../constants/actionTypes";
import * as api from '../api/index'

export const signin=(formData,navigate)=>async(dispatch)=>{

    try {
        const {data}=await api.girisYap(formData);
        dispatch({type:AUTH,data});
        navigate('/')
    } catch (error) {
        console.log('Hata');
    }

}

export const signup=(formData,navigate)=>async(dispatch)=>{

    try {
        const {data}=await api.uyeOl(formData);
        dispatch({type:AUTH,data});
        navigate('/')
    } catch (error) {
        console.log('Hata');
    }

}