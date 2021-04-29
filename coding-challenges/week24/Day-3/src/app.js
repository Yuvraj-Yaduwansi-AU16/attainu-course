const path = require('path');
const upload = require('express-fileupload');
const express = require('express');
const hbs = require('hbs');
const router = require('./routers/users')

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));
app.use(upload());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(port, () => console.log('Server is up on port ' + port));