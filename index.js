import express  from "express";
import baseRouter from "./routes/base.js";
import roomRouter from "./routes/room.js";

const PORT = process.env.PORT || 5000;

const app = express()

app.use('/', baseRouter)
app.use('/room', roomRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
