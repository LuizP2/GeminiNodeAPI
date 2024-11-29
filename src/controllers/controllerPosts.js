import {getAllPosts, createPost } from "../modules/DBConnect.js";
import fs from "fs";

export async function listAllPosts(req, res){

    const posts = await getAllPosts()
    return res.status(200).json(posts)
}

export async function postNewPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await createPost(novoPost);
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function uploadImage(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await createPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpeg`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}