import express from 'express'
import {getEmpresa, addEmpresa, addVacany} from "../controlles/empresa.js"

const router = express.Router();

router.get("/", getEmpresa);
router.post("/", addEmpresa);
router.post("/vacany", addVacany);

export default router;