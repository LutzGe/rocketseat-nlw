import express, { response } from 'express'
import cors from 'cors'
import authRouter from './routes/auth/auth.router'
import userRouter from './routes/user/user.router'
const app = express()

// TODO: Migrar para o postgres para poder visualizar a db melhor
app.use(cors())
app.use(express.json())
app.use("/", authRouter)
app.use("/user", userRouter)
// app.use("/auth", authRouter)

app.listen(3333)
// 