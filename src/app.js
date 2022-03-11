const path = require('path')
const express = require('express')

console.log(__dirname) //directory name, to get the directory path

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.listen(3000, () => {
    console.log('Server is up on port 3000.') //3000 default port
})

app.set('view engine', 'hbs')


app.use(express.static(publicDirectoryPath))

app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Mustafa Baser'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        help: 'Hello, contact me to get support!'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Izmir, Turkey',
        forecast: 'Partly cloud and 3 degrees.'
    })
})


/*
app.get('', (req, res) => { // req = request, res = response
    res.send('<h1>This is a title</h1>')
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
})*/