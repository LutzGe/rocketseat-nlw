import express, { response } from 'express'
import cors from 'cors'
import routes from './routes'
const app = express()

// Métodos: GET, POST, PUT, DELETE entre outros
// Route params: é o que veio junto na rota --> /users/:id
// Quert params: os que vem depois do ?  --> ?page=2&name="l"

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)