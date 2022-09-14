const express = require('express')
const connection = require('./sqlConnection')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000
const corsMiddleware = require('./middleware/cors.middleware')

const app = express()

app.use(corsMiddleware)
app.use(express.json())
app.use('/auth', authRouter)

const start = () => {
    try {
        connection.connect()
        app.listen(PORT, () => console.log('server started on PORT ' + PORT))
    } catch (error) {
        console.log(error)
    }
}

start()