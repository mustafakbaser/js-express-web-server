const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//nodemon src/app.js -e js,hbs


const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') //if we need to change views folder name, we need to define it here (for example templates) 
const partialsPath = path.join(__dirname, '../templates/partials')

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
        title: 'Home Page',
        name: 'Mustafa Baser'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mustafa Baser'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help - FAQ',
        help: 'Hello, contact me to get support!',
        name: 'Mustafa Baser'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must specify an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })
        })
    })
    // res.send({
    //     location: 'Izmir, Turkey',
    //     forecast: 'Partly cloud and 3 degrees.',
    //     address: req.query.address
    // })
})

//weather?address=izmir

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }

    console.log(req.query.search)
})

// 404 Page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mustafa Baser',
        errorMessage: 'This page cannot be found!'
    })
})

//Matching anything after help/
app.get('/help/*', (req, res) => {
    res.send('Help article cannot be found!')
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mustafa Baser',
        errorMessage: 'Help article cannot be found!'
    })
})