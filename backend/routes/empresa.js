import express from 'express'
import {getEmpresa, addEmpresa} from "../controlles/empresa.js"

const router = express.Router();

router.get("/", getEmpresa);
router.post("/", addEmpresa);

export default router;