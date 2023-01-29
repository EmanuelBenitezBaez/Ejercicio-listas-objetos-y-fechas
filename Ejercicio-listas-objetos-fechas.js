/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */

var nacimiento = new Date(1989, 03, 01);
var fecha = new Date(1991, 10, 21);

const libro_favorito = {
  titulo: "Querido nadie",
  autor: "Berlie Doherty",
  fecha: fecha,
  url: "https://www.amazon.com/-/es/BERLIE-DOHERTY/dp/B00V7AZT6C",
};
const lista = ["Emanuel", 33, true, nacimiento, libro_favorito];
console.log(lista);
