var typed = new Typed('.presentacion-texto', {
	strings: [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quis blanditiis, explicabo possimus voluptate reiciendis!",
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quis blanditiis, explicabo possimus voluptate doloro sit!"
	],
	typeSpeed: 20, // Velocidad en mlisegundos para poner una letra,
	startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 35, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
