import 'dotenv/config';
import { ObjectId } from 'mongodb';
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

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}