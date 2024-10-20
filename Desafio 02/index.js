function qtdVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldo = qtdVitorias(100, 15);
let nivel;

if(saldo < 0 ){
    console.log("Este saldo não existe!")
} 

else if (saldo <= 10) {
    nivel = "FERRO";
} 

else if (saldo <= 20) {
    nivel = "BRONZE";
} 

else if (saldo <= 50) {
    nivel = "PRATA";
} 

else if (saldo <= 80) {
    nivel = "OURO";
} 

else if (saldo <= 90) {
    nivel = "DIAMANTE";
} 

else if (saldo <= 100) {
    nivel = "LENDÁRIO";
} 

else {
    nivel = "IMORTAL";
}

console.log(`O jogador tem de saldo ${saldo} e está no nível de ${nivel}.`);