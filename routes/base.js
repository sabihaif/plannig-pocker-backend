import {Router} from "express";
import { baseFunc } from "../controllers/base.js";

const baseRouter = Router()

baseRouter.get('/', baseFunc)

export default baseRouter