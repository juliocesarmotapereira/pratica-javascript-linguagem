console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0; // primeiro comando do for
let destinoExite = false;
while (contador < 3) {
  // segundo comando do for
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino exite");
    destinoExite = true;
    break;
  }
  contador += 1; // terceiro comando do for
}

console.log("Destino existe: ", destinoExite);

if (podeComprar && destinoExite) {
  console.log("Boa viagem!");
} else {
  console.log("Desculpe tivemos um erro!");
}

for (let i = 0; i < 3; i++) {
    if(listaDeDestinos[i] == destino) {
        destinoExite =true;
    }
}
