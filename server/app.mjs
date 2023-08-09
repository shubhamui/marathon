import express from 'express'
import cors from 'cors'
import userRouter from "./routes/user.mjs"

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use(userRouter)


app.listen(PORT, err => err ? console.log(err) : console.log(`Server running on the Port:${PORT}`))