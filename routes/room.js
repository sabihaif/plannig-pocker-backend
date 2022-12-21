import {Router} from "express";
import { getRoom } from "../controllers/room.js";

const roomRouter = Router()

roomRouter.get('/:roomId', getRoom)

export default roomRouter