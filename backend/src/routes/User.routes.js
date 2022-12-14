const userRouter = require('express').Router()

const UserController = require('../controllers/UserController')

const verifyToken = require('../helpers/VerifyToken')
const { imageUpload } = require('../helpers/UploadImage')

userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)
userRouter.get('/checkUser', UserController.checkUser)
userRouter.get('/:id', UserController.getUserById)
userRouter.patch('/edit/:id', verifyToken, imageUpload.single('image'), UserController.editUser)

module.exports = userRouter