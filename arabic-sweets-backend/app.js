const express = require('express');

const app = express();

const port = process.env.SERVER_PORT

const cors = require('cors')

const sweetsRouter = require('./routers/sweetsRouter')

const notFound = require('./middlewares/notFound')
const errorsHandler = require('./middlewares/errorsHandler')
const imagePath = require('./middlewares/imagePath')

app.use(cors({ origin: process.env.FE_APP }))

app.use(express.static('public'));

app.use(express.json());

app.use(imagePath)

// ENTRY POINT
app.get('/', (req, res) => {
    res.send('Arabic sweets API server')
})

app.use('/API/sweets', sweetsRouter)

app.use(notFound)

app.use(errorsHandler)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})