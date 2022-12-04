import express from 'express'

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (reg, res) => {
    res.send("dsfd")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${PORT}`)
  })