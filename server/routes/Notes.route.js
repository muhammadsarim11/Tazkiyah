import express from 'express'
import { CreateNotes, DeleteNotes, GetNotes, updateNotes } from '../controller/Notes.controller.js'
import protect from '../middleware/Protect.middleware.js'


const router = express.Router()

router.post("/",protect,CreateNotes)
router.get("/",protect,GetNotes)
router.put('/:id',protect,updateNotes)
router.delete('/:id',protect,DeleteNotes)

export default router