import express from 'express';
import multer from 'multer';
import cors from 'cors';
import {listarTodosOsPosts, postarNovoPost, uploadImagem, atualizarNovoPost, excluirPost} from '../controllers/postsController.js';

//armazena as configurações de CORS
const corsOptions = {
    // especifica a origem permitida para acessar os recursos do servidor apenas requisições vindas de http://localhost:8000 serão aceitas
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

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
    app.use(cors(corsOptions)); // Configura o CORS com as opções especificadas
    //rota para buscar todos os posts
    app.get('/posts', listarTodosOsPosts );
    //rota para criar um novo post
    app.post('/posts', postarNovoPost );
    //rota para fazer upload das imagens
    app.post('/upload', upload.single('Imagem'), uploadImagem )
    //rota para atualizar posts
    app.put('/upload/:id', atualizarNovoPost );
    // rota para excluir um post
    app.delete('/posts/:id', excluirPost);
}

export default routes;
