import express from 'express'

const app = express()


// middlewares
app.use(express.json())

// server
app.listen(3300, () => console.log(`Server is up`))