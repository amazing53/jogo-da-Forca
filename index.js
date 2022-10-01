let palavras = Array(
	"gorila",
	"tigre",
	"cavalo",
	"cachorro",
	"macaco",
	"elefante",
	"vaca",
	"tartaruga",
	"girafa",
	"onça",
	"raposa",
	"jacare",
	"porco",
	"gato",
	"galinha",
	"calopsita",
	"papagalho"
);

let palavraOc = ""; // palavra oculta
let palavraAdiv = ""; // palavra que adivinha o usuário
let vidas = 4;
document.getElementById("botao").addEventListener("click", comprovar);

function inicia() {
	palavraOc = palavras[Math.floor(Math.random() * palavras.length)];
	console.log(palavraOc);

	for (let i = 0; i < palavraOc.length; i++) {
		palavraAdiv = palavraAdiv + "_ ";
	}
	document.getElementById("frase").innerHTML = palavraAdiv;
}

inicia();

function comprovar() {
	let letra = document.getElementById("letra").value.toLowerCase();

	palavraOc = palavraOc.toLocaleLowerCase();

	let novo = "";

	for (let i = 0; i < palavraOc.length; i++) {
		if (letra === palavraOc[i]) {
			novo = novo + letra + " ";
		}else{
      novo=novo + palavraAdiv[i*2] + " "
    }
	}
  if(novo==palavraAdiv){
    vidas--
    document.getElementById("vida").innerHTML="El numero de vidas que quedan son:" + vidas

  }
  palavraAdiv=novo
  document.getElementById("frase").innerHTML=palavraAdiv

  if(vidas==0){
    alert("poxa você perdeu :(")
  }
  if(palavraAdiv.search("_")==-1){
    alert("uhuuu você venceu :D!!")
    
  }

  document.getElementById("letra").value=""
  document.getElementById("letra").focus()

}




