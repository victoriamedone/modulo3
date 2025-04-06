// Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
// titulo (string), autor (string) y paginas (number). La función debe devolver un
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y
// muestra sus detalles en la consola.


function crearLibro(titulo:string, autor:string, paginas:number): any {
   return {titulo,autor,paginas}
};

console.log(crearLibro("Los peligros de fumar en la cama", "Mariana Enriquez", 235));
console.log(crearLibro("El estado y la revolución", "Vladimir Lenin", 138));
