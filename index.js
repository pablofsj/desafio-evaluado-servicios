import express from 'express'
import { engine } from 'express-handlebars';

import {services} from './data/services.data.js'
import path from 'path'

const app = express()

const __dirname = import.meta.dirname

//Public directory
app.use(express.static('public'))


app.use('/css', express.static('node_modules/bootstrap/dist/css'))
app.use('/js', express.static('node_modules/bootstrap/dist/js'))
app.use('/js', express.static('node_modules/jquery/dist'))


// Motor de plantillas hbs
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('home', { title: 'Home page 2.0'});
});

app.get('/services', (req, res) => {
    res.render('services', { services: services });
});



app.get('/services/:name', (req, res) => {

    const nameURL = req.params.name

    const service = services.find((item)=> item.url === `/services/${nameURL}`)

    if(!service){
        return res.render ('404', { title: 'No se encuentra el servicio' })
    }

    console.log(service)

    res.render('service', {service})
    
});


//404 para cualquier ruta


app.get('*', (req, res) => {

    return res.status(404).render('404', { title: 'No se encuentra la pagina' })
      
});


app.listen(5001, () => {
    console.log('Server ok, escuchando peticiones')
})