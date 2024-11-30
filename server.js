import express from 'express';
import routes from './src/routes/routes.js';

const app = express();
app.use(express.static("uploads"))
routes(app)

app.listen(3333, () =>{
    console.log('Localhost conectado!')
});

