import express from 'express'
import RoleController from '../../controllers/RoleController'

const routes = express.Router()
const roleController = new RoleController()

routes.post("/create", roleController.create)
routes.post("/edit", roleController.edit)

routes.get("/list", roleController.index)

export default routes