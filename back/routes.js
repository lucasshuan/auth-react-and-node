const express = require('express')
const route = express.Router()

let users = [] // Lista de usuários cadastrados
let logged = {} // Informação do usuário logado

route.get('/users', (req, res) => {
    res.send(users)
})

route.get('/login', (req, res) => {
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
            return res.json({msg:'success'})
        }
        return res.json({msg: 'invalid-password'})
    }
    return res.json({msg: 'invalid-user'})
})

route.post('/register', (req, res) => {
    const user = req.body
    if(user.email && user.name && user.password) {
        const user_found = users.find(el => el.name === user.name)
        const email_found = users.find(el => el.email === user.email)
        if (user_found || email_found) return res.json({msg: 'already-registered'})
        users.push(user)
        return res.json({msg: 'success'})
    }
    return res.json({msg: 'registration-failed'})
})

module.exports = route