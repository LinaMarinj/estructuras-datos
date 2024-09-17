
// function unaFuncion(){
// }
// let numeros = [1,'jaime',true,unaFuncion,5,6]
// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])
// console.log(numeros[5])

/* 
function unaFuncion(){
    console.log('Esto es una funcion')
}
let numeros = [1,5,'caso',unaFuncion,2,8,9,10,20,4,5,6]
if(numeros[0] == 1){
    console.log('Numeros iguales')
}
numeros[3]()
switch (numeros[2]) {
    case 9:
        break;
    case 'caso':
        console.log('Esta es la posición 2')
        break; 
    default:
        break;
}
console.log(unaFuncion)
unaFuncion()
 */


/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < 9; index++) {
    if (numeros[index] % 2 == 0) {
        console.log("El número: " + numeros[index] + " es un par");
    }

} */

/* 
let estudiantes = ["Lina", "Paola", "Carol", "Emmanuel", "David", "Mateo"];
let estudiante = prompt("Ingrese el nombre del estudiante: ");
for (let index = 0; index < 6; index++) {

    if (estudiante == estudiantes[index]) {
        console.log("El estudiante: " + estudiante + " existe en la basa de datos");
        break;
    }

} */


/*  let personas = ["Camila", "Luisa", "Felipe", "Ana", "Tomas", "Andrea"];
 let edades = [17, 22, 35, 15, 23, 18];

 for (let index = 0; index < 6; index++) {
     if(edades[index] >= 18){
         console.log("La persona: " + personas[index] + " tiene " + edades[index] + " años")
     }
     
 } */

/* 
let personas = [];
let edades = [];


for (let index = 0; index < 5; index++) {
    let persona = prompt("Ingrese el nombre de la persona: ");
    let edad = prompt("Ingrese la edad de la persona: ");
    personas[index] = persona;
    edades[index] = edad;

}



for (let index = 0; index < 5; index++) {
    if (edades[index] >= 18) {
        console.log("La persona: " + personas[index] + " tiene " + edades[index] + " años")
    }
} */


//métodos en Java Script 


//push

/* let nombres = ["Andrea"];
console.log(nombres);
nombres.push("Jaime");
nombres.push("Luisa");
nombres.push("Camila");
console.log(nombres); */




/* 
let nombres = ["Andrea"];
console.log(nombres);
nombres.push("Jaime"); //push agrega en la ultima posición
nombres.push("Luisa");
nombres.push("Camila");
nombres.unshift("Camilo");  //unshift agrega en la primera posición
nombres.unshift("Karen");
console.log(nombres);
nombres.pop();  //elimina la última posición
console.log(nombres);
nombres.shift();  //elimina la primera posición 
console.log(nombres);
 */



/* let numeros = [1, 2, 3, 4, 5, 6, 7,8,9];
numeros.splice(0,1);
console.log(numeros); */