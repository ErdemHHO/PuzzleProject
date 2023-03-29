import { express } from "express";

import {createPuzzle} from '../controllers/user.js';


const router=express.Router();


router.post('/createpuzzle',createPuzzle);


export default router;