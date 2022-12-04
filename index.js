import express from 'express'

const PORT = 5000

const app = express()

app.get('/', (reg, res) => {
    res.status(200).json("dsfd")
})