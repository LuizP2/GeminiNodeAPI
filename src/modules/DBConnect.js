import DBconnect from '../config/configDB.js';

const conexao = await DBconnect(process.env.STRING_CONEXAO)

export async function getAllPosts(){
    const db = conexao.db("imersao-backend")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function createPost(novoPost) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}