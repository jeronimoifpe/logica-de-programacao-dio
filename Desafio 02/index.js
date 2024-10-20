let saldo = qtdVitorias(100, 15)
let nivel
let vitorias
let derrotas

function qtdVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

if(saldo <= 10){
    nivel = "FERRO"
}
    
else if(saldo >= 11 && saldo <= 20){
    nivel = "BRONZE"
}
    
else if(saldo >= 21 && saldo <= 50){
    nivel = "PRATA"
}

else if(saldo >= 51 && saldo <= 80){
    nivel = "OURO"
}

else if(saldo >= 81 && saldo <= 90){
    nivel = "DIAMANTE"
}

else if(saldo >= 91 && saldo <= 100){
    nivel = "LENDÁRIO"
}

else if(saldo >= 101){
    nivel = "IMORTAL"
}

else{
    console.log("Esse valor não existe!")
}
    
console.log(`O jogador tem de saldo ${saldo} e está no nível de ${nivel}.`)