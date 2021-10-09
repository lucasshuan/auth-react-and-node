const express = require('express')
const route = express.Router()

let users = [] // Lista de usuários cadastrados
let logged = {} // Informação do usuário logado

route.get('/users', (req, res) => {
    res.send(users)
})

route.get('/login', (req, res) => {
    console.log(logged.name)
    res.json(logged.name)
})

route.post('/login', (req, res) => {
    const user = req.body
    const found = users.find(el => el.name === user.name)
    if (found) {
        const index = users.findIndex(el => el.name === user.name)
        const auth = users[index].password === user.password ? true : false
        if (auth) {
            logged = {name:user.name,password:user.password};
            return res.redirect('http://localhost:3000/home')
        }
        return res.json({msg: 'invalid-password'})
    }
    res.json({msg: 'invalid-user'})
})

route.post('/register', (req, res) => {
    const user = req.body
    if(!user.name || !user.password) {
        const found = users.some(el => el.name === user.name)
        if (found) return res.send('Username already registered')
        return res.send('Failed to register')
    }
    users.push(user)
    res.redirect('http://localhost:3000/')
})

module.exports = route