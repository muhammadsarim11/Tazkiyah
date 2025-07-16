import express from 'express';
import { RegisterUser, LoginUser, logoutUser, forgotPassword, resetPassord } from '../controller/Auth.controller.js';

const router = express.Router();


router.post('/register', RegisterUser);
router.post('/login', LoginUser);
router.get('/logout',logoutUser)
router.post('/forgot-password',forgotPassword)
router.post('/reset-password/:token',resetPassord)

export default router