const express = require('express')

const app = express()

app.get('', (req, res) => { // req = request, res = response
    res.send('<h1>This is a title</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.') //3000 default port
}) 

app.get('/help', (req, res) => {
    res.send({
        name: 'Mustafa',
        age: 25,
        title: 'Software Engineer'

    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About myself</h1><p>Hello, my name is Mustafa. This is my about page.</p>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Izmir, Turkey',
        forecast: 'Partly cloud and 3 degrees.'
    })
})