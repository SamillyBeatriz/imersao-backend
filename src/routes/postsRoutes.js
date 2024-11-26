import express from 'express';
import multer from 'multer';
import {listarTodosOsPosts, postarNovoPost, uploadImagem} from '../controllers/postsController.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})  //configura o multer com a pasta destino e configuração de arquivos windows

const routes = (app) => {
    app.use(express.json());//conversão de conteúdo para formato json
    //rota para buscar todos os posts
    app.get('/posts', listarTodosOsPosts );
    //rota para criar um novo post
    app.post('/posts', postarNovoPost );
    //rota para fazer upload das imagens
    app.post('/upload', upload.single('Imagem'), uploadImagem )
}

export default routes;
