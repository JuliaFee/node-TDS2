import express from "express"; // serve para escutar as requisições
import { config } from "dotenv"; // serve para ler o arquivo .env
config(); // le o arquivo .env

const port = process.env.PORT || 5000; // define a porta q sera usada e substituira pela porta 5000 se algo der errado
const app = express(); // Cria o servidor recebendo todo conteudo do express
app.use(express.json()); // faz com que a variavel app converse em json

app.get ("/", (req, res) => {
    res.status(200).json({message: "hello get"})
});

app.post("/", (req, res) =>{
    res.status(200).json({message: "hello post"})
})

app.put("/", (req, res) =>{
    res.status(200).json({message: "hello put"})
})

app.delete("/", (req, res) =>{
    res.status(200).json({message: "hello dele"})
})

app.listen(port, () =>{
    console.log(`server running on port http://localhost:${port}`);
})
