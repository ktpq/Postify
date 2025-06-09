require('dotenv').config();
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())

const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')


app.use(authRouter)
app.use(userRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
