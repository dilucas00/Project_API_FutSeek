const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const jogadores = [
  {
    nome: "Lionel Messi",
    idade: 37,
    clube: "Inter Miami",
    gols: 852,
    assistencias: 326,
    partidas: 1075,
    titulos: 43,
    imagem:
      "https://img.goodfon.com/original/5700x3800/e/80/lionel-andres-messi-lionel-messi-kubok-mira-vzgliad-argentin.jpg",
  },
  {
    nome: "Cristiano Ronaldo",
    idade: 39,
    clube: "Al-Nassr",
    gols: 930,
    assistencias: 275,
    partidas: 1271,
    titulos: 32,
    imagem:
      "https://cdn.record.pt/images/2023-10/img_1200x676$2023_10_31_09_51_41_2186297.jpg",
  },
  {
    nome: "Neymar Jr",
    idade: 32,
    clube: "Santos",
    gols: 450,
    assistencias: 300,
    partidas: 600,
    titulos: 30,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3nbTmL_ckAfY0UvxfPw9TuunIzv2IHnfNOQ&s",
  },
  {
    nome: "Kylian Mbappé",
    idade: 25,
    clube: "Real Madrid",
    gols: 300,
    assistencias: 150,
    partidas: 450,
    titulos: 15,
    imagem:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/mbappe-psg-eliminado-champions-league-e1715123830445.jpg",
  },
  {
    nome: "Mohamed Salah",
    idade: 32,
    clube: "Liverpool",
    gols: 381,
    assistencias: 162,
    partidas: 726,
    titulos: 12,
    imagem:
      "https://s2-ge.glbimg.com/tQ5gRdv6qKtqQuDrY4nXqNEBdAI=/0x0:3723x2563/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/r/F/CGNn7uSaOesJumtRgWWg/gettyimages-2191506102.jpg",
  },
  {
    nome: "Rodrygo",
    idade: 24,
    clube: "Real Madrid",
    gols: 97,
    assistencias: 54,
    partidas: 380,
    titulos: 9,
    imagem:
      "https://lncimg.lance.com.br/uploads/2024/12/rodrygo-1-aspect-ratio-512-320.jpg",
  },
  {
    nome: "Robert Lewandowski",
    idade: 35,
    clube: "Barcelona",
    gols: 650,
    assistencias: 200,
    partidas: 900,
    titulos: 26,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBwoXp2NxGDxDHjcTFx6xNUbhRMLznNg6BQ&s",
  },
];

app.get("/api/jogadores", (req, res) => {
  res.json(jogadores);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
