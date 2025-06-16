require('dotenv').config();
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 5000;


app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000', // หรือ origin ของ frontend
  credentials: true
}));

app.use(cookieParser())

const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')


app.use(authRouter)
app.use(userRouter)
app.use(postRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
