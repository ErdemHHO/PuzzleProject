import express from "express";

import {createPuzzle,getPuzzle} from '../controllers/user.js';


import { upload } from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const router=express.Router();

router.post('/createpuzzle',upload.single('fileName'), createPuzzle);


router.get('/puzzle',getPuzzle);




export default router;