let resultado = document.querySelector("#resultado");
let pontuaçãoJogador = document.querySelector("#voce");
let pontuaçãoMaquina = document.querySelector("#maquina");

let humano = (suaEscolha) => {

    jogo(suaEscolha, maquina());

}

let maquina = () => {

    let maquinaEscolhas = ["pedra", "papel", "tesoura"];
    let numerosAleatorios = Math.floor(Math.random() * 3);

    return maquinaEscolhas[numerosAleatorios];

}

let MeusPontos = 0
let PontosMaquina = 0


let jogo = (escolhaJogador, escolhaMaquina) => {


    if (escolhaJogador === escolhaMaquina) {

        resultado.innerHTML = "Parece que Empatou hahahaha";

    } else if (

        (escolhaJogador === "pedra" && escolhaMaquina === "tesoura") ||
        (escolhaJogador === "tesoura" && escolhaMaquina === "papel") ||
        (escolhaJogador === "papel" && escolhaMaquina === "pedra")

    ) {

        MeusPontos++
        pontuaçãoJogador.innerHTML = `Minha Pontuação: ${MeusPontos}`
        resultado.innerHTML = `Você escolheu ${escolhaJogador} e a Maquina escolheu ${escolhaMaquina}`

    } else {

        PontosMaquina++
        pontuaçãoMaquina.innerHTML = `Pontuação Da Maquina ${PontosMaquina}`
        resultado.innerHTML = `Você escolheu ${escolhaJogador} e a Maquina escolheu ${escolhaMaquina}`

    }
    
}