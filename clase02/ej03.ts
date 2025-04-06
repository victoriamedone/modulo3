// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
// (string), deporte (string), y energia (number). Luego, define una función entrenar
// que acepte el objeto deportista y un número de horas de entrenamiento,
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
// final, muestra el estado del deportista en la consola.

let deportista : {name : string, deporte: string, energia: number, entrenar: Function} = {
    name: "Victoria Medone", 
    deporte: "Muay Thai", 
    energia: 100, 
    entrenar(deportista: object, horasEntrenamiento: number): any{
        let energiaRestante : number = this.energia - (horasEntrenamiento*5);
        return energiaRestante
      }
    
    }; 
    
    console.log("Conozcamos a nuestrx deportista:");
    console.log([deportista.name, deportista.deporte , deportista.energia]);
    console.log("¡¡Ahora a entrenar!!");
    console.log("----------------------------------------------")
    console.log("Después de entrenar, nuestrx deportista se ve así: ",[deportista.name, deportista.deporte], "y su nueva energía es: ", deportista.entrenar([deportista], 3));