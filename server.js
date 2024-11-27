import express from 'express';
import DBconnect from './src/config/configDB.js';


const log = console.log;

const conexao = await DBconnect(process.env.STRING_CONEXAO)

async function getAllPosts(){
    const db = conexao.db("Imersao-backend")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

const app = express();
app.use(express.json())
const posts = [
    {
        ID: 1,
        descrição: "imagem de um gatinho",
        imagem: 'https://placecats.com/millie/300/150',
        
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
        
    },
    {
        ID: 4,
        descrição: "imagem de uma paisagem",
        imagem: 'https://placeimg.com/300/150/nature',
        
    },
    {
        ID: 5,
        descrição: "imagem de uma cidade",
        imagem: 'https://placeimg.com/300/150/city',
        
    },
    {
        ID: 6,
        descrição: "imagem de uma montanha",
        imagem: 'https://placeimg.com/300/150/mountains',
        
    },
    {
        ID: 7,
        descrição: "imagem de uma praia",
        imagem: 'https://placeimg.com/300/150/beach',
       
    },
    {
        ID: 8,
        descrição: "imagem de um céu estrelado",
         imagem: 'https://placeimg.com/300/150/night',
        
    }
    
]

app.listen(3333, () =>{
    log('Localhost conectado!')
});

function getPostbyId(ID){
    return posts.findIndex((posts) =>{
        
        return posts.ID === Number(ID)
    }

    )}

app.get('/posts', async(req, res) =>{

    const posts = await getAllPosts()

    res.status(200).json(posts)
})
