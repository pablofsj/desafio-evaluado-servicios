import express from 'express'
import { engine } from 'express-handlebars';

const app = express()

// Motor de plantillas hbs
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(5001, () => {
    console.log('estoy escuchando peticiones')
})