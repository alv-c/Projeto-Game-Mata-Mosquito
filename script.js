
var largura = 0
var altura = 0
var vidas = 1
var tempo = 20
var tempoCriaMosquito = 1500

var nivel = window.location.search /*recupera a variavel enviada via get (retorna tudo a direita do 
ponto de interrogação, inclusive o ponto de interrogação)*/

nivel = nivel.replace ('?', '') //replace para remover o ponto de interrogação recuperado de window.location.search

if (nivel === 'normal') {
	tempoCriaMosquito = 1500
}

else if (nivel === 'hard') {
	tempoCriaMosquito = 1000
}

else if (nivel === 'Chucknorris') {
	tempoCriaMosquito = 750
}


function ajustaTamanho () {
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanho()

var cronometro = setInterval (function () {
	
	tempo --

	if (tempo < 0) {
		window.location.href = 'vencedor.html'
		clearInterval (cronometro)
		clearInterval (criaMosquito)
		
	}

	else {
		document.getElementById ('cronometro').innerHTML = tempo		
	}

}, 1000)

function posicaoRandonica () {

	if (document.getElementById ('mosquito')) { //verifica se ja existe um element com este id no frame 
		document.getElementById ('mosquito').remove () //se sim, remova-o

		if (vidas > 3) {
			window.location.href = "fim_de_jogo.html"
		}

		else {
			document.getElementById ('v' + vidas).src = 'imagens/coracao_vazio.png'
			vidas ++
		}

	}

	var posicaoX = Math.floor(Math.random () * largura) - 120
	var posicaoY = Math.floor(Math.random () * altura) - 120

	posicaoX = posicaoX < 0 ? 10 : posicaoX
	posicaoY = posicaoY < 0 ? 10 : posicaoY

	console.log(posicaoX, posicaoY)

	var mosquito = document.createElement ('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio () + ' ' + ladoAleatorio ()
	mosquito.style.position = 'absolute'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.id = 'mosquito'
	mosquito.onclick = function () {
		this.remove ()
	}


	document.body.appendChild (mosquito)
}



function tamanhoAleatorio () {
	var classe = Math.floor(Math.random () * 3)

	switch (classe) {
		case 0: 
			return 'mosquito0'

		case 1:
			return 'mosquito1'

		case 2:
			return 'mosquito2'
	}
}

function ladoAleatorio () {
	var classe = Math.floor (Math.random() * 2)

	switch (classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}




