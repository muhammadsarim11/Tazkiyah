import express from 'express'
import protect from "../middleware/Protect.middleware.js"
import { getTodayPrayer, UpdatePrayer } from "../controller/Prayer.controller.js"


const router = express.Router()

router.get("/prayers",protect,getTodayPrayer)
router.post("/prayers",protect,UpdatePrayer)

export default router