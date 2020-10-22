import express from 'express'
import AuthController from '../../controllers/AuthController'
import UserController from '../../controllers/UserController'

const routes = express.Router()
const userController = new UserController()

routes.get("/list", userController.index)
routes.post("/create", userController.create)
routes.post("/edit", userController.edit)

export default routes
