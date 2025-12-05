const express = require("express");
const app = express();

const PORT = 3000;

// ROTA 
app.get("/produto", (req, res) => {
    const id = req.query.id; 

    if (id === "1") {
        return res.json({ nome: "Mouse", preco: 100 });
    }

    if (id === "2") {
        return res.json({ nome: "Teclado", preco: 200 });
    }

    // Caso o ID seja qualquer outro valor:
    return res.status(404).send("Produto não encontrado");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//como acessar pelo navegador url = http://localhost:3000/produto?id=1
