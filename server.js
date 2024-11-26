import express from 'express';
import connectDB from "./src/config/configDB.js"
const log = console.log;

await connectDB(process.env.STRING_CONEXAO)

const app = express();
app.use(express.json())
const pub = [
    {
        ID: 1,
        descrição: "imagem de um gatinho",
        imagem: 'https://placecats.com/millie/300/150',
        texto: 'Não fode node'
    },
    {
        ID: 2,
        descrição: "imagem de um gatinho",
        imagem: 'https://placecats.com/millie/300/150',
        texto: 'Não fode node'
    },
    {
        ID: 3,
        descrição: "imagem de um cachorro",
        imagem: 'https://placedog.net/300/150',
        texto: 'Não fode node'
    },
    {
        ID: 4,
        descrição: "imagem de uma paisagem",
        imagem: 'https://placeimg.com/300/150/nature',
        texto: 'Não fode node'
    },
    {
        ID: 5,
        descrição: "imagem de uma cidade",
        imagem: 'https://placeimg.com/300/150/city',
        texto: 'Não fode node'
    },
    {
        ID: 6,
        descrição: "imagem de uma montanha",
        imagem: 'https://placeimg.com/300/150/mountains',
        texto: 'Não fode node'
    },
    {
        ID: 7,
        descrição: "imagem de uma praia",
        imagem: 'https://placeimg.com/300/150/beach',
        texto: 'Não fode node'
    },
    {
        ID: 8,
        descrição: "imagem de um céu estrelado",
         imagem: 'https://placeimg.com/300/150/night',
         texto: 'Não fode node'
    }
    
]

app.listen(3333, () =>{
    log(' enche o saco não Node')
});

function getPostbyId(ID){
    return pub.findIndex((pub) =>{
        
        return pub.ID === Number(ID)
    }

    )}

app.get('/posts/:ID', (req, res) =>{

    const index = getPostbyId(req.params.ID)

    res.status(200).json(pub[index])
})
