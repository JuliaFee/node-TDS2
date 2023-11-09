import express from "express"; // serve para escutar as requisições
import { config } from "dotenv"; // serve para ler o arquivo .env
config(); // le o arquivo .env

const port = process.env.PORT || 5000; // define a porta q sera usada e substituira pela porta 5000 se algo der errado
const app = express(); // Cria o servidor recebendo todo conteudo do express
app.use(express.json()); // faz com que a variavel app converse em json

app.get ("/", (req, res) => {
    const nome = req.query.nome
    const qualquerNome = req.query.anime
    const page = req.query.page
    const limit = req.query.limit
    
    res.status(200).json({message: nome, anime: qualquerNome, pagina: page, limite: limit})
});

app.get ("/:nome/:sobrenome/:idade/:genero/:anime", (req, res) => {
    const nome = req.params.nome
    const sobrenome = req.params.sobrenome
    const idade = req.params.idade
    const genero = req.params.genero
    const anime = req.params.anime
    res.status(200).json({message:`ola meu nome é ${nome} ${sobrenome}, tenho ${idade} anos, meu genero é ${genero}
     e gosto do anime ${anime}` })
});

app.post("/", (req, res) =>{
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    res.status(200).json({nomeUsuario: nome, sobrenomeUsuario: sobrenome, idadeUsuario: idade})
})

app.put("/", (req, res) =>{
    res.status(200).json({message: "hello put"})
})

app.delete("/", (req, res) =>{
    res.status(200).json({message: "hello delete"})
})

app.listen(port, () =>{
    console.log(`server running on port http://localhost:${port}`);
})
