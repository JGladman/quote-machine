const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)
app.use(cors())

app.get('/quote', async (req, res) => {
    const quote = await axios.get("https://officeapi.dev/api/quotes/random")
    console.log(quote.data.data.content)
    res.send({
        content: quote.data.data.content,
        character: {
            firstname: quote.data.data.character.firstname,
            lastname: quote.data.data.character.lastname
        }
    })
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
)