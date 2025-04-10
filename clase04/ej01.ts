// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
// bucle for...in para recorrer y mostrar cada propiedad y su valor.


const persona = {
    name:  "Victoria",
    age: 25,
    city: "Buenos Aires"
};

for (const propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad as keyof typeof persona]);
};