const express = require('express');
const exphbs = require('express-handlebars')
const morgan = require('morgan')
//body-parser
const bodyParser = require('body-parser')
const formidable = require('express-formidable')

// inicializations
const app = express();

//settings
app.set('port', process.env.PORT || 8080);

//Implementacion del body-parser
app.use(bodyParser.urlencoded({
    extended: app.use(bodyParser.json())
}))

//Configuracion de handlebars
app.set('views', `${__dirname}/views`);
app.engine('.hbs', exphbs({
    //esta madre deja por defecto la carga del main
    defaultLayout: 'main',
    //ruta de los layouts
    layoutsDir: `${app.get('views')}/layouts`,
    //ruta de partirals
    partialsDir: `${app.get('views')}/partials`,
    extname: '.hbs',
    //ruta de helpers(funciones de handlebars)
    helpers: require('./lib/handlebars')
}))
//configurar el motor de handlebars
app.set('view engine', '.hbs')

//middlewares
app.use(morgan('dev'));
//Configuracion de donde se guardaran las imagenes
app.use(formidable({keepExtensions:true, uploadDir: "./server/public/images"}))

//Routes
app.use(require('./routes/router'))
// app.use(require('./routes/authentication'))
app.use('/links',require('./routes/links'))
app.use('/posts',require('./routes/posts'))

//public
app.use(express.static(`${__dirname}/public`))

//Server
app.listen(app.get('port'), ()=>{
    console.log('https://fathomless-garden-00685.herokuapp.com/')
    console.log(`http://localhost:${app.get('port')}\n`);
})