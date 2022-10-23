/*En este ejercicio practicarás las estructuras de control, para ello deberás crear:
Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, 
el bloque de código que tendrá el bucle deberá:
Incrementar el valor de la variable en uno cada vez que se ejecute.
Mostrarlo por pantalla cada vez que se ejecute.
Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, 
se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de 
la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para 
cuando el valor de la variable no sea una estación.*/

let numeroIf = -3;

if (numeroIf > 0) {
    console.log(numeroIf + " es positivo");
} else if (numeroIf < 0) {
    console.log(numeroIf + " es negativo");
} else { 
    console.log("El número es cero");
}

console.log("----------");
let numeroWhile = 0;

while (numeroWhile < 3) {
    console.log(numeroWhile);
    numeroWhile += 1;
}

console.log("----------");

do {
    console.log(numeroWhile)
    numeroWhile += 1;
} while (numeroWhile < 1)

console.log("----------");

for (let numeroFor = 0; numeroFor <= 3; numeroFor++){
    console.log(numeroFor);
}

let estacion = "Primavera"
console.log("----------");
switch (estacion) {
  case "Verano":
        console.log("La estación es Verano");
        break
  case "Invierno":
        console.log("La estación es Invierno");
        break
  case "Otoño":
        console.log("La estación es Otoño");
        break
  case "Primavera":
        console.log("La estación es Primavera");
        break
  default:
    console.log(
      "El valor ingresado no es una estación o está mal escrito. Verifique por favor"
    );
}