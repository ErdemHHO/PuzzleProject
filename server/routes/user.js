import express from "express";

import {createPuzzle,getPuzzle,createPoint} from '../controllers/user.js';


import { upload } from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const router=express.Router();

router.post('/createpuzzle',auth,upload.single('fileName'), createPuzzle);

router.get('/puzzle',getPuzzle);

router.post('/point',auth ,createPoint);




export default router;