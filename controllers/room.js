const getRoom = (req, res) => {
    const {roomId} = req.params
    res.send(`Welcome from room ${roomId}`)
}

export {getRoom}