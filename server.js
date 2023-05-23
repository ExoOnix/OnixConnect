const express = require('express')


const app = express()

app.get('/', (req, res) => {
    res.send("API SENT")
})






const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log('Server Started on ${PORT}')
})