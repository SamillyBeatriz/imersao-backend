import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.find().toArray(); //lista todos os posts registrados do banco
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);// cria um novo post dentro do banco
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    const objectID = ObjectId.createFromHexString(id);//converte o parametro id da função para o formato compreendido pelo MongoDB
    return colecao.updateOne({_id: new ObjectId(objectID)}, {$set: novoPost})
}

