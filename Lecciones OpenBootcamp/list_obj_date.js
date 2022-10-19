// Listas, ARRAYS, arreglos
const list = [1,"array", [1,2,3,"hola",true], {a:1,b:"esto se entiende"}, undefined, null];
const list2 = new Array(1,"array",[1,2,3,"buenas",true],{a:1,b:"esto se entiende"}, undefined, null);
const list3 = new Array(3);
const list4 = [list,list2,list3];
// llamadas
console.log(list);
console.log(list2);
console.log(list3);
//Objetos
const people = {
    name:"Rodri",
    lastname:"Cantudo",
    age: 36,
    contact:{
        phone:6666666,
        email:"rrr@email.com"
    }
}
console.log(people);

//Fechas


const ahora = new Date();
console.log(ahora);

const date_mili = new Date(10);
console.log(date_mili);

const date_string = new Date("oct 19 2022");
console.log(date_string);


const date_value = new Date(2021, 10, 19);
console.log(date_value);


const now = new Date();

const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

console.log(day, month, year);

