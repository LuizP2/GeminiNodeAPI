import express from 'express';
import routes from './src/routes/routes.js';

const app = express();
routes(app)

app.listen(3333, () =>{
    console.log('Localhost conectado!')
});

