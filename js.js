var numero_dado1;
var numero_dado2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var suma_dados;
var turno  = 1;
var PUNTOS;

// Cuando la pagina carga, ejecuta la función init
window.onload = init;

function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);



	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
}



function tirardado(){
	return Math.floor(Math.random() * 6) + 1 ;
}



function actualizarDado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
}



function jugar(){
	numero_dado1 = tirardado(); //Retorna un numero entre 1 y 6
	numero_dado2 = tirardado();
	actualizarDado(dado1,numero_dado1);
	actualizarDado(dado2,numero_dado2);

	console.log("tuno actual",turno);
	suma_dados = numero_dado1 + numero_dado2 

	// Se mira si se esta en el turno 1
	if (turno == 1){
		// Validar regla 1, Ganas si suma_dados es igual a 7 o 11
		if(suma_dados == 7 || suma_dados == 11)
		{
		    alert("ganaste")
		    turno = 1
		    console.log("se reinicia el turno");
		}
		// Validar regla 2, pierde si suma_dados es igual a 2, 3. 12
		else if(suma_dados == 2 || suma_dados == 3 || suma_dados == 12)
		{
			        alert("you lose")
		}
		else{
			// Pasaste al turno 2
			turno = turno + 1
			PUNTOS = suma_dados
		}

	}
	// Se mira si ya no se está en el turno 1
	// Validar regla 3
	else if (suma_dados == PUNTOS)
	{
		alert("eres un crack")
		// resturar el juego desde 0
		turno = 1
	}
	// Validar regla 4
	else if (suma_dados == 7) {
		alert ("eres un perdedor")
		// resturar el juego desde 0
		turno = 1
	}



}