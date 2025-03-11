
# Projeto: Consulta de Jogadores via API

## Descrição
Este projeto consiste em uma aplicação web que consome uma API desenvolvida em **Node.js com Express** para exibir informações sobre jogadores de futebol. A API fornece dados estáticos de jogadores, incluindo nome, idade, clube, gols, assistências, partidas e uma imagem representativa.

O frontend permite que o usuário pesquise um jogador pelo nome e visualize suas estatísticas.

## Tecnologias Utilizadas
- **Backend:** Node.js, Express, CORS
- **Frontend:** HTML, CSS, JavaScript (fetch API para consumo de dados)

## Funcionalidades
- Servidor backend com um endpoint GET (`/api/jogadores`) que retorna uma lista de jogadores.
- Interface web que permite pesquisar jogadores pelo nome.
- Exibição dinâmica das informações do jogador selecionado, incluindo imagem e estatísticas.

## Como Executar o Projeto
### **1. Clonar o Repositório**
```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
```

### **2. Configurar o Backend**
1. Instale as dependências:
```bash
    npm install
```
2. Inicie o servidor:
```bash
    node index.js
```


### **3. Abrir o Frontend**
1. Abra o arquivo `index.html` no navegador ou use uma extensão como "Live Server" no VS Code.
2. Digite o nome de um jogador na barra de pesquisa e clique em "Buscar".
3. As informações do jogador serão exibidas dinamicamente.


## Endpoints da API
### **1. Obter todos os jogadores**
**Rota:** `GET /api/jogadores`

**Resposta Exemplo:**
```json
[
  {
    "nome": "Lionel Messi",
    "idade": 37,
    "clube": "Inter Miami",
    "gols": 852,
    "assistencias": 326,
    "partidas": 1075,
    "titulos": 43,
    "imagem": "http://localhost:3000/imagens/messi.jpg"
  }
]
```



## Autor
Desenvolvido por Gabriel Di Lucas

