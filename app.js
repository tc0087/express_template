const http = require('http')
const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs({layoutsDir: path.join(__dirname, 'views/layouts'), defaultLayout: 'main.hbs'}))
app.set('view engine', 'hbs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(shopRoutes)
app.use(adminRoutes)

app.use((req, res, next) => {
	res.status(404).render('404', {pageTitle: 'Not found'})
})

app.listen(3000)