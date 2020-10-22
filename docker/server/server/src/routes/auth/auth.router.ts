import express from 'express'
import AuthController from '../../controllers/AuthController'

const routes = express.Router()
const authController = new AuthController()


routes.post("/login", authController.login)
routes.post("/validate", authController.validate)

export default routes
