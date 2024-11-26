import { getTodosPosts } from "../models/postsModel.js";

export default async function listarTodosOsPosts (req, res)
{
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
}