let pedra = document.querySelector("#pedra");
let papel = document.querySelector("#papel");
let resultado = document.querySelector("#resultado");
let tesoura = document.querySelector("#tesoura");
let minhaPontuacao = document.querySelector("#voce span");
let maquinaPontuacao = document.querySelector("#maquina span"); 


let humano = (suaEscolha) => {
    jogada(suaEscolha, maquina());
};


let maquina = () => {
    let escolhasMaquina = ["papel", "pedra", "tesoura"];
    let numeroAleatorio = Math.floor(Math.random() * 3);
    return escolhasMaquina[numeroAleatorio];
};

let jogada = (humanoEscolha, maquinaEscolha) => {

    if (humanoEscolha === maquinaEscolha) {

        resultado.innerHTML = `Empatou! Você escolheu ${humanoEscolha} e a máquina também escolheu ${maquinaEscolha}.`;
   
    } else if (

        (humanoEscolha === "pedra" && maquinaEscolha === "tesoura") ||
        (humanoEscolha === "tesoura" && maquinaEscolha === "papel") ||
        (humanoEscolha === "papel" && maquinaEscolha === "pedra")

    ) {
        resultado.innerHTML = `Você ganhou! Você escolheu ${humanoEscolha} e a máquina escolheu ${maquinaEscolha}.`;

       
        let pontuacaoAtual = parseInt(minhaPontuacao.innerHTML);
        minhaPontuacao.innerHTML = pontuacaoAtual + 1;

    } else {
        resultado.innerHTML = `Máquina ganhou! Você escolheu ${humanoEscolha} e a máquina escolheu ${maquinaEscolha}.`;

       
        let pontuacaoAtual = parseInt(maquinaPontuacao.innerHTML);
        maquinaPontuacao.innerHTML = pontuacaoAtual + 1;
    }
};
