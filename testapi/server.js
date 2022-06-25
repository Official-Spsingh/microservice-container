const express = require('express')
const app = express()
const TEST_PORT = 8001

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Test microservice running!' })
})
app.get('/welcome', (req, res) => {
    res.status(200).json({ message: 'Hello world from Test microservice' })
})

app.listen(TEST_PORT, () => {
    console.log(`Test app listening on port ${TEST_PORT}`)
})