const express = require('express');
const app = express();
const cors =  require('cors')
const route = require('./routes.js')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(route)

app.listen(3001, () => console.log('Example app is listening on port 3001.'));