import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js' 




const signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
  
    try {
      const kullanici = await User.findOne({ email });
  
      if (!kullanici) return res.status(404).json({ msg: 'Kullanıcı Bulunamadı' });
  
      const parolaKontrol = await bcrypt.compare(password, kullanici.password);
  
      if (!parolaKontrol) return res.status(400).json({ msg: 'Şifre Yanlış' });
  
      const token = jwt.sign({ email: kullanici.email }, 'secret-key', {
        expiresIn: '3h',
      });
  
      res.status(200).json({ result: kullanici, token, msg: 'Giriş Başarılı' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Sunucu hatası', error: error.message });
    }
  };
  


const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    console.log(req.body);
  
    try {
      const kullanici = await User.findOne({ email });
      if (kullanici) return res.status(400).json({ msg: 'Kullanıcı Zaten Var' });
  
      if (password !== confirmPassword)
        return res.status(400).json({ msg: 'Parolalar Aynı Değil' });
  
      const sifrelenmisParola = await bcrypt.hash(password, 12);
  
      const result = await User.create({
        email,
        password: sifrelenmisParola,
        firstName,
        lastName,
      });
  
      const token = jwt.sign({ email: result.email }, 'secret-key', {
        expiresIn: '3h',
      });
  
      res.status(200).json({ result, token, msg: 'Kayıt Başarılı' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Sunucu hatası', error: error.message });
    }
  };
  


export{
    signin,signup
}