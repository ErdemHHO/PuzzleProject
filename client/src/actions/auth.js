

import { AUTH } from "../constants/actionTypes";
import * as api from '../api/index'

export const signin = (formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.girisYap(formData);
      dispatch({ type: AUTH, data });
      navigate('/')
      return { success: true, msg: data.msg };
    } catch (error) {
        throw new Error(error.response.data.msg);
    }
  };

export const signup=(formData,navigate)=>async(dispatch)=>{

    try {
        const {data}=await api.uyeOl(formData);
        dispatch({type:AUTH,data});
        navigate('/')
        return { success: true, msg: data.msg };
    } catch (error) {
        throw new Error(error.response.data.msg);
    }

}