import express from 'express';
import {listarTodosOsPosts, postarNovoPost} from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json());//conversão de conteúdo para formato json
    //rota para buscar todos os posts
    app.get('/posts', listarTodosOsPosts );
    //rota para criar um novo post
    app.post('/posts', postarNovoPost ); 
}

export default routes;
