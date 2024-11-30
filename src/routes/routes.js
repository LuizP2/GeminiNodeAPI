import express from "express"
import multer from "multer";
import { listAllPosts, postNewPost, uploadImage, atualizarNovoPost } from "../controllers/controllerPosts.js"
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
  }

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions))

    app.get('/', (req, res) =>{
        res.status(200).send('Bem vindos ao meu app')
    })
    
    app.get("/posts", listAllPosts);

    app.post('/posts', postNewPost)

    app.post('/upload', upload.single('image'), uploadImage)

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes
