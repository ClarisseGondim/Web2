// Importa o Express
const express = require("express");
const app = express();

// Porta do servidor
const PORT = 3000;


// Rota com PARÂMETRO DE ROTA
app.get("/saudacao/:nome", (req, res) => {
    const nome = req.params.nome; 
    res.send(`Olá, ${nome}!`);
});


// Rota com QUERY STRING

app.get("/soma", (req, res) => {
    const a = Number(req.query.a); 
    const b = Number(req.query.b); 

    // Validação simples
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ erro: "Os parâmetros 'a' e 'b' devem ser números." });
    }

    const soma = a + b;

  
    res.json({
        a,
        b,
        soma
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

