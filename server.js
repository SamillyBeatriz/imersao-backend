import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express(); //inicia o servidor 
app.use(express.static('uploads'));// exibe arquivos estáticos para todos os acessos
routes(app)

app.listen(3000, ()=>{
    console.log('Servidor escutando..'); // para confirmar a conexão com servidor
});
