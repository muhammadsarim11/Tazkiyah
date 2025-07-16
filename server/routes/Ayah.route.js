import express from "express";
import { GetAyatToday } from "../controller/Ayah.controller.js";

const router =  express.Router()


router.get("/today",GetAyatToday)

export default router