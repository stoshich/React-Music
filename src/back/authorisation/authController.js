const connection = require('./sqlConnection')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')
const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, secret, { expiresIn: '24h' })
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Ошибка при регистрации', errors })
            }
            const { username, password } = req.body
            const sqlFind = `SELECT * FROM user WHERE user=?`
            const candidate = await connection.query(sqlFind, username)
            if (candidate[0][0]) {
                return res.status(400).json({ message: 'Пользователь с таким именем сущестует' })
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const sqlCreate = `INSERT INTO user(user,password) VALUES(?,?)`
            const user = await connection.query(sqlCreate, [username, hashPassword])
            return res.json({ message: 'Пользователь был успешно зарегестрирован' })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Registration error' })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            console.log('Пользователь ', req.body)
            const sqlFind = `SELECT * FROM user WHERE user=?`
            const user = await connection.query(sqlFind, username)
            if (!user[0][0]) {
                return res.status(400).json({ message: 'Пользователь с таким именем не найден' })
            }
            const validPassword = bcrypt.compareSync(password, user[0][0].password)
            if (!validPassword) {
                return res.status(400).json({ message: 'Неверный пароль' })
            }
            const token = generateAccessToken(user[0][0].id, user[0][0].role)
            const currentUser = {
                id: user[0][0].id,
                username
            }
            res.json({ token, currentUser })

        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Login error' })
        }
    }

    async getUsers(req, res) {
        try {
            const sqlFind = `SELECT * FROM user`
            const users = await connection.query(sqlFind)
            res.json(users[0])
        } catch (error) {
            console.log(error)
        }
    }

    async auth(req, res) {
        try {
            const sqlFind = `SELECT * FROM user WHERE id=?`
            const user = await connection.query(sqlFind, req.user.id)
            const token = generateAccessToken(user[0][0].id, user[0][0].role)
            const currentUser = {
                id: user[0][0].id,
                username: user[0][0].user
            }
            res.json({ token, currentUser })

        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Login error' })
        }
    }
}

module.exports = new authController()