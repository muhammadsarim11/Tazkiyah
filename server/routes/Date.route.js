import express from 'express'
import { getHijriDate } from '../controller/Date.controller.js'

const router = express.Router()

router.get('/',getHijriDate)
export default router