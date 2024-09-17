
// function unaFuncion(){
// }
// let numeros = [1,'jaime',true,unaFuncion,5,6]
// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])
// console.log(numeros[5])
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