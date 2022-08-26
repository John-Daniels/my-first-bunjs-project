console.log("Hello via Bun!");


import express from 'express'


const port = process.env.PORT || 5000
const app = express()


app.get('/', (req, res) => {
    res.send('hello world!, Bun is the fastest compiler i have ever seen!')
})



app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})