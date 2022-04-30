/*

Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

const shortCourgettes = [];
const longCourgettes = [];


const courgetteVariety = [
  {
    nome: "zucchino nero di Milano",
    peso: 10,
    lunghezza: 10
  },
  {
   nome: "zucchino romanesco",
   peso: 20,
   lunghezza: 14
 },
 {
   nome: "zucchino ortolano di Faenza",
   peso: 10,
   lunghezza: 9
 },
 {
   nome: "zucchina lunga fiorentina",
   peso: 13,
   lunghezza: 14
 },
 {
   nome: "zucchino siciliano",
   peso: 10,
   lunghezza: 18
 },
 {
   nome: "zucchina striata di Napoli",
   peso: 7,
   lunghezza: 13
 },
 {
   nome: "zucchina bianca triestina",
   peso: 10,
   lunghezza: 27
 },
 {
   nome: "zucchina rigata pugliese",
   peso: 10,
   lunghezza: 5
 },
 {
   nome: "zucchino tondo di Piacenza",
   peso: 18,
   lunghezza: 20
 },
 {
   nome: "zucchino tondo di Nizza",
   peso: 11,
   lunghezza: 12
 },
 ];
 
//  console.log(courgetteVariety);
//  console.log(courgetteVariety[2].peso);
 
//  let pesoTot = 0;
 
//  for (let i = 0; i < courgetteVariety.length; i++) {
 
//    pesoTot += courgetteVariety[i].peso;
   
//  };
 
//  console.log(pesoTot);

let smallCourgettesWeight = 0;
let bigCourgettesWeight = 0;


for (let i = 0; i < courgetteVariety.length; i++) {
  
  let currentLength = courgetteVariety[i].lunghezza;

  if (currentLength <= 15 ) {
    shortCourgettes.push(courgetteVariety[i]);
    smallCourgettesWeight += courgetteVariety[i].peso;
   } else {
    longCourgettes.push(courgetteVariety[i]);
    bigCourgettesWeight += courgetteVariety[i].peso;

  }
};
console.log("zucchina short", shortCourgettes);
console.log("zucchina long", longCourgettes);

console.log("peso piccole", smallCourgettesWeight);
console.log("peso grandi", bigCourgettesWeight);






