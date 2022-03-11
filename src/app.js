const path = require('path')
const express = require('express')
const hbs = require('hbs')

//nodemon src/app.js -e js,hbs


const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views') //if we need to change views folder name, we need to define it here (for example templates) 
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebard engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath) //also need to connect with viewsPath for using app.set('views', viewsPath)
hbs.registerPartials(partialsPath) 

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.listen(3000, () => {
    console.log('SERVER: Server is up on port 3000.') //3000 default port
})

app.get('', (req, res) => {
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
        title: 'Help Page',
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