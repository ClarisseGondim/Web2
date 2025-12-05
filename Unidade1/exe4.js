class Livro {
    constructor (titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    detalhes() {
        console.log(`Livro: ${this.titulo}, ${this.autor}, ${this.ano}`);
}
}



const livro = new Livro("Amor", "Cleide", 2002);
const livro1 = new Livro("Paz", "Ana Clara", 2016);

livro.detalhes()
livro1.detalhes()
