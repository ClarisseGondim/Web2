const carro = {
marca: "Hyundai",
modelo: "Creta",
ano: "2020",
exibirInfo: function(){
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`);
}
}

carro.cor = "preto"
carro.ano = 2025
console.log(carro)
carro.exibirInfo()
