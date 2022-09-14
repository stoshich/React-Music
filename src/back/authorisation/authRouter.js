const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')


router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть не меньше 4 и не больше 10 символов').isLength({ min: 4, max: 10 })],
    controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['Admin']), controller.getUsers)
router.get('/auth', authMiddleware, controller.auth)

module.exports = router