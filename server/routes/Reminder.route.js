import express from "express";
import protect from "../middleware/Protect.middleware.js";
import { CreateReminder, DeleteReminder, GetReminder, UpdateReminder } from "../controller/Reminder.controller.js";


const router = express.Router()

router.post('/',protect,CreateReminder)
router.get('/',protect,GetReminder)
router.put('/:id',protect,UpdateReminder)
router.delete('/:id',protect,DeleteReminder)



export default router