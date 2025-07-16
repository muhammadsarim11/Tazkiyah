import express from 'express'
import { CreateTasbeeh, GetTasbeeh, resetTasbeeh, updateTasbeeh } from '../controller/Tasbeeh.controller.js'
import protect from '../middleware/Protect.middleware.js'

const router = express.Router()

router.post("/",protect,CreateTasbeeh)
router.get("/",protect,GetTasbeeh)
router.patch("/:id",protect,updateTasbeeh)
router.delete("/:id",protect,resetTasbeeh)


export default router