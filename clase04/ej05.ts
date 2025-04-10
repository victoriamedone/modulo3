// Crea una variable de tipo any y haz una conversión con aserciones dobles para
// convertirla en un number. Muestra el resultado.

let valor : any = 46;
let valorNumerico: number = (valor as unknown as number);

console.log(valorNumerico);
