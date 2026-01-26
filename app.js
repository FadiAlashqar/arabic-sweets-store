const express = require('express');

const app = express();

const port = process.env.SERVER_PORT

const sweetsRouter = require('./routers/sweetsRouter')

app.use(express.static('public'));

app.use(express.json());

// ENTRY POINT
app.get('/', (req, res) => {
    res.send('Arabic sweets API server')
})

app.use('/API/sweets', sweetsRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})