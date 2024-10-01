
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


/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8,];

let numerosPares = numeros.map(function (numero) {

    return numero * 4 */
/*  if (numero % 2 == 0) {
     return numerosPares
 } */
/* })
console.log(numerosPares)
console.log(numeros) */


/* numeros.map(function(numero){  //función regular
    console.log(numero)
    
}); */

/* numeros.map((numero)=>{     //funcion flecha anónimas
 console.log(numero)
});  */





/* let nombres = ["Ana", "Camila", "Andrea", "Felipe"]
let nombresCompletos = nombres.map((nombre) => {
    return nombre + " Zapata";
})

console.log(nombresCompletos); */


//método filter//



/* 
let nombres = ["Luisa", "Camila", "Ana", "Luisa", "Miguel",    //buscar nombre por consola
    "Adriana", "Andrea", "Felipe", "Camilo", "Ana"]

    let nombreTeclato = prompt("Ingrese el nombre a buscar")
    let nombresNuevos = nombres.filter((nombre) => {
       if (nombre == nombreTeclato){
        return nombre
       }
    })
 */
/* let nombres = ["Luisa", "Camila", "Ana", "Luisa", "Miguel", 
    "Adriana", "Andrea", "Felipe", "Camilo", "Ana"]



    let nombresNuevos = nombres.filter((nombre) => {
       if (nombre == "Ana" || nombre == "Luisa"){
        return nombre
       }
    }) */
/*     console.log(nombresNuevos); */


//método find

/*    let nombres = ["Luisa", "Camila", "Ana", "Luisa", "Miguel",    //retorna el primer elemento que encuentre y retorna el elemento solo (no como arreglo) 
    "Adriana", "Andrea", "Felipe", "Camilo", "Ana"]
    let nuevoNombre = nombres.find((nombre)=>{
        if (nombre == "Ana"){
            return nombre
        }
    })
    console.log(nuevoNombre); */


//________________________________________________________________



//OBJETO LITERAL

/* let objetoUno = {
    "nombre": "Jaime",
    "id": 10203040

}

let objetoDos = {
    "nombre": "Jaime",
    "id": 9900234,
    "telefono": "5505550",
    "direccion": "AV 34-20" 

}

let nuevoArreglo = [objetoUno, "Ana", objetoDos, "Luisa"];
console.log(nuevoArreglo);

for (let index = 0; index < 4; index++) {
    if (nuevoArreglo[index].id == 9900234) {
     console.log(nuevoArreglo[index])  
    }
    
}
 */
/* 
let persona = {
    "nombre": "Jaime Zapata",
    "edad": 33,
    "profesion": "Developer",
    "direccion": {
        "calle": 20,
        "carrera": 45,
        "barrio": "Niquia"
    },

    "hobbies": ["Caminar", "Comer", "Dormir"]
}


let personaDos = {
    "nombre": "Camila Restrepo",
    "edad": 33,
    "profesion": "Developer",
    "direccion": {
        "calle": 20,
        "carrera": 45,
        "barrio": "Niquia"
    },

    "hobbies": ["Caminar", "Comer", "Dormir"]
}

console.log(persona); */



//________________________________________________________________


//OBJETO POR CONSTRUCTOR

function Persona(nombre, edad, profesion){
    this.nombre = nombre
    this.edad = edad
    this.prfesion = profesion

}

let nuevoObjetoUno= new Persona("Jaime Zapata", 33, "Ing Sistemas")
let nuevoObjetoDos= new Persona("Camila Restrepo", 38, "Ing Software")


console.log(nuevoObjetoUno, nuevoObjetoDos)


//________________________________________________________________

let persona = {
    "nombre": "Jaime",
    "edad": "33",
    "profesion": "Developer",
}

let personaDos = {
    "nombre": "Ana",
    "edad": "28",
    "profesion": "UX,UI",
}



console.log(persona, personaDos)