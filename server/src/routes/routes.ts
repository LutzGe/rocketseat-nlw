import express, { response } from 'express'
import ClassesController from '../controllers/ClassesController'
import ConnectionsController from '../controllers/ConnectionsController'
import AuthController from '../controllers/AuthController'
import UserController from '../controllers/UserController'
import RoleController from '../controllers/RoleController'
// import { checkJwt } from "../middlewares/checkJwt";
// import { checkRole } from "../middlewares/checkRole";

const routes = express.Router()
const classController = new ClassesController()
const connectionsController = new ConnectionsController()
const authController = new AuthController()
const userController = new UserController()
const roleController = new RoleController()

// Edit one user
//   router.patch(
//     "/:id([0-9]+)",
//     [checkJwt, checkRole(["ADMIN"])],
//     UserController.editUser
//   );

// 1 ADMIN
// 2 TEACHER
// 3 USER


// ROLES
routes.post('/create-role', roleController.create)
routes.post('/edit-role', roleController.edit)

routes.get('/show-role', roleController.index)
routes.get('/all-roles', roleController.all)

// USERS
routes.get('/user', userController.index)
routes.post('/user', userController.create)
routes.post('/edit-user', userController.edit)

// AUTH
routes.post("/login", authController.login)


routes.post('/classes',
    // [checkJwt, checkRole([2])], <= BOTAR ONDE PRECISAR AUTH
    classController.create
)
routes.get('/classes', 
    // [checkJwt, checkRole([2, 3])],
    classController.index
)

routes.post('/connections', 
    // [checkJwt, checkRole([2, 3])],
    connectionsController.create)
routes.get('/connections', 
    // [checkJwt, checkRole([2, 3])],
    connectionsController.index)

export default routes