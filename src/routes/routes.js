import express from "express"
import multer from "multer";
import { listAllPosts, postNewPost, uploadImage } from "../controllers/controllerPosts.js"

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

    app.get('/', (req, res) =>{
        res.status(200).send('Bem vindos ao meu app')
    })
    
    app.get("/posts", listAllPosts);

    app.post('/posts', postNewPost)

    app.post('/upload', upload.single('image'), uploadImage)
}

export default routes
