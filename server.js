import express from 'express';

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Duas mulheres de costas",
        imagem: "https://cdn.pixabay.com/photo/2022/07/24/11/35/women-7341444_1280.jpg"
      },
      {
        id: 3,
        descricao: "Paisagem incrível do mar",
        imagem: "https://cdn.pixabay.com/photo/2022/01/13/00/08/austria-6934184_640.jpg"
      },
      {
        id: 4,
        descricao: "Cachorro brincando no parque",
        imagem: "https://cdn.pixabay.com/photo/2015/05/02/23/32/golden-retriever-750565_640.jpg"
      },
      {
        id: 5,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
      },
      {
        id: 6,
        descricao: "Uma bela flor",
        imagem: "https://cdn.pixabay.com/photo/2018/06/24/23/21/daylily-3495722_640.jpg"
      }
];

const app = express(); //inicia o servidor 
app.use(express.json());//conversão de conteúdo para formato json

app.listen(3000, ()=>{
    console.log('Servidor escutando..'); 
});

app.get('/posts', (req, res)=>{
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
}

app.get('/posts/:id', (req, res)=>{
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});