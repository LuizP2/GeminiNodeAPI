import {getAllPosts, createPost, atualizarPost } from "../modules/DBConnect.js";
import fs from "fs";
import gerarDescricaoComGemini from "../service/services.js";

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

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3333/${id}.jpeg`

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.jpeg`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);  

    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}