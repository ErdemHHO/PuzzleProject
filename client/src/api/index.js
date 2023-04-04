import axios from "axios";


const url1='/puzzle'
const url2='/createpuzzle'


const API=axios.create({baseURL:'http://localhost:4000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
      req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})


export const fetchPuzzle = () => {
  return axios.get(url1);
};

export const createPuzzle = (newPuzzle) => {
  return API.post(url2,newPuzzle);
};

export const girisYap=(formData)=>axios.post('/auth/signin',formData);
export const uyeOl=(formData)=>axios.post('/auth/signup',formData);
