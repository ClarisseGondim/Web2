// Seleciona o display
const display = document.getElementById("display");

// Seleciona todos os botões
const botoes = document.querySelectorAll(".btn");

// Função para adicionar número ou operador no display
function adicionarAoDisplay(valor) {
    display.value += valor;
}

// Função para limpar o display
function limparDisplay() {
    display.value = "";
}

// Função para calcular o resultado usando eval
function calcularResultado() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}

// Adiciona eventos para todos os botões
botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        
        const valor = btn.getAttribute("data-valor");
        const acao  = btn.getAttribute("data-acao");

        // Se é um número ou operador
        if (valor) {
            adicionarAoDisplay(valor);
        }

        // Se é limpar
        if (acao === "limpar") {
            limparDisplay();
        }

        // Se é resultado
        if (acao === "resultado") {
            calcularResultado();
        }
    });
});
