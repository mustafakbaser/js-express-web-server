const express = require('express')

const app = express()

app.get('', (req, res) => { // req = request, res = response
    res.send('Hello express!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.') //3000 default port
}) 

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('Hi, I am Mustafa.')
})

app.get('/weather', (req, res) => {
    res.send('Partly cloud.')
})