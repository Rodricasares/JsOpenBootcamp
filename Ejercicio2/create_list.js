let fechaNacimiento = new Date(1986, 2, 13);
let book = new Date("January 25 1883");
let today = new Date();

const list = [{
    Nombre: "Rodri",
    Edad: 36,
    Developer:true,
    Fecha_nacimiento: fechaNacimiento,

    Libro : {
        Titulo:"Pinocho",
        autor:"Carlo Collodi",
        fecha: book,
        Pais:"Italia",
        url: "https://www.amazon.es/Story-Pinocchio-Picture-Books/dp/0746070357"

    } 
}
];
console.log(list); 