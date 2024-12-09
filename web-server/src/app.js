const path = require('path')
const express = require('express');
const hbs = require('hbs');
const { title } = require('process');
const { error } = require('console');

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express()

// Define paths for Express config
// 
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and view location
app.set('views', viewPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jerry Castro Luz'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About Me',
        name: 'Jerry Castro Luz'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This website is really cool',
        title: 'Help',
        name: 'Jerry Castro Luz'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'it is clear',
        location: 'charlotte'
    })
})

app.get('/help/*', (req, res) => {
    res.render( '404Page', {
        title: '404',
        error: 'Help article not found',
        name: 'Jerry Castro Luz' 
    })
})

app.get('*', (req, res) => {
    res.render('404Page', {
        title: '404',
        error: 'Page not found',
        name: 'Jerry Castro Luz'
    })
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})
