import express, { response } from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'
import UsersController from './controllers/UsersController'

const routes = express.Router()
const classController = new ClassesController()
const connectionsController = new ConnectionsController()
const usersController = new UsersController()

routes.post('/classes', classController.create)
routes.get('/classes', classController.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

routes.post('/login', usersController.validate)

routes.post('/user', usersController.create)
routes.get('/user', usersController.index)

export default routes