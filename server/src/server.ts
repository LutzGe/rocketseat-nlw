import express, { response } from 'express'
import cors from 'cors'
import routes from './routes/routes'
const app = express()

// TODO: Migrar para o postgres para poder visualizar a db melhor
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
// 