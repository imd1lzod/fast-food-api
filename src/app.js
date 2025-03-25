import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all("/", (req, res) => {
    res.status(404).send({
        message: `Given url: ${req.url} and method: ${req.method} not found`
    })
})

export default app;