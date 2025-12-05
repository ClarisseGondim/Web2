// Elementos do DOM
const pokemon = document.getElementById("pokemon");
const Buscar = document.getElementById("Buscar");
const resultado = document.getElementById("resultado");

// Clique no botão
Buscar.addEventListener("click", function () {

    const nomePokemon = pokemon.value.toLowerCase(); // API exige minúsculas

    if (nomePokemon.trim() === "") {
        resultado.innerHTML = "<p>Digite um nome válido.</p>";
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

    // Fazer requisição com fetch()
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon não encontrado");
            }
            return response.json(); // converter para JSON
        })
        .then(data => {
            // Exibir dados no DOM
            resultado.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Altura:</strong> ${data.height}</p>
                <p><strong>Peso:</strong> ${data.weight}</p>
            `;
        })
        .catch(error => {
            resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
});
