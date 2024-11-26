import express from 'express';
import listarTodosOsPosts from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json());//conversão de conteúdo para formato json
    //rota para buscar todos os posts
    app.get('/posts', listarTodosOsPosts );
}

export default routes;
