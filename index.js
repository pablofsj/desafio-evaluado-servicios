import express from 'express'
import { engine } from 'express-handlebars';
import path from 'path'
import serviceRoutes from './routes/service.route.js'
import productRoutes from './routes/product.route.js'


const app = express()

const __dirname = import.meta.dirname

//Public directory
app.use(express.static(path.join(__dirname, '/public')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))


// Motor de plantillas hbs
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
    return res.render('home', { title: 'Home page 2.0'});
});

// Rutas middlewares
app.use('/services', serviceRoutes)
app.use('/products', productRoutes)


//404 para cualquier ruta
app.get('*', (req, res) => {

    return res.status(404).render('404', { title: 'No se encuentra la pagina' })
      
});


app.listen(5001, () => {
    console.log('Server ok, escuchando peticiones')
})