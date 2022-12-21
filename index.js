import express  from "express";
import { Server } from "socket.io";
import { createServer } from "http";

import baseRouter from "./routes/base.js";
import roomRouter from "./routes/room.js";

const PORT = process.env.PORT || 5000;

const app = express()
const server = createServer(app)

const io = new Server(server)

io.on("connection", (socket) => {
    console.log("A new connection")
})

app.use('/', baseRouter)
app.use('/room', roomRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
