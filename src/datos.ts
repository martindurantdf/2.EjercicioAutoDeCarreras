/*
•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta
*/

let btnEnv = document.getElementById("btnEnviar");
let btnFin = document.getElementById("btnFinalizar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
let tiempoDeVuelta: number = 0;
let i: number = 0;

rotulo.innerHTML = "Ingrese el valor de vuelta";
btnEnv.addEventListener("click", () => {
  // Capturo el valor de vuelta
  i++;
  console.log("Vuelta " + i);
  tiempoDeVuelta = Number(dato.value) + tiempoDeVuelta;
});
btnFin.addEventListener("click", () => {
  // Hago los cálculos
  console.log("El tiempo total de vuelta total es " + tiempoDeVuelta);
  console.log("El tiempo promedio de vuelta es " + tiempoDeVuelta / i);
});
