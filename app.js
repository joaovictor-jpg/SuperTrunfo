var listaCartas = [
    carta1 = {
        nome: "Lionel Messi",
        imagem: "https://futhead.cursecdn.com/static/img/21/players_alt/p134375751.png",
        atributos: {
            drible: 99,
            passe: 99,
            finalizacao: 98
        }
    },
    carta2 = {
        nome: "Neymar jr",
        imagem: "https://www.futwiz.com/assets/img/fifa21/faces/117631383.png",
        atributos: {
            drible: 99,
            passe: 97,
            finalizacao: 94
        }
    },
    carta3 = {
        nome: "Cristiano Ronaldo",
        imagem: "https://www.futwiz.com/assets/img/fifa21/faces/151015745.png",
        atributos: {
            drible: 99,
            passe: 92,
            finalizacao: 99
        }
    }
];

var cartaJogador;
var cartaMaquina;
var nomeDoJogador;

function enviar() {
    nomeDoJogador = document.getElementById("nomeDojogador").value;
    document.getElementById("nomeDojogador").value = "";
    document.getElementById("btnSortear").disabled = false;
    alert(nomeDoJogador);
}


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = listaCartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while(numeroCartaJogador === numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = listaCartas[numeroCartaJogador];
    /*document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;*/
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        alert("Jogador: " + nomeDoJogador + " Vencedor T_T");
    } else if(cartaMaquina.atributos.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]){
        alert("Maquina Vencedora!!");
    } else {
        alert("Empate");
    }

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem} )`;
    var moldura =
     '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" class="moldura">';
     var opcoesTexto = "";
     var tagHtml = "<div id='opcoes' class='carta-status'> ";

     for(var atributo in cartaJogador.atributos){
        opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
     }
     var nome = `<p class="carta-subtitle">${cartaJogador.nome}</P>`;

    divCartaJogador.innerHTML = nome + moldura + tagHtml + opcoesTexto + "</div>";
}