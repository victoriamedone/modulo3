// Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
// TypeScript.

let dia : "Lunes" | "Martes" | "Miércoles";

dia = "Lunes";
//dia = "Jueves";

console.log(`Qué dia es hoy? ${dia}`);