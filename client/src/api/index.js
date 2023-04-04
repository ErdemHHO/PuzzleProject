import axios from "axios";


const url1='/puzzle'
const url2='/createpuzzle'

export const fetchPuzzle = () => {
  return axios.get(url1);
};

export const createPuzzle = (newPuzzle) => {
  return axios.post(url2,newPuzzle);
};

export const girisYap=(formData)=>axios.post('/auth/signin',formData);
export const uyeOl=(formData)=>axios.post('/auth/signup',formData);
