/*
    ------------------------------------------------------------------------------------------------------------
    ------------------------------------------------------------------------------------------------------------
	------------------------------------------------------------------------------------------------------------
	
    Nariño en Foco Copyright © 2023 Nariño en Foco -
    Todos los derechos reservados
	
	------------------------------------------------------------------------------------------------------------
	------------------------------------------------------------------------------------------------------------
	------------------------------------------------------------------------------------------------------------
	------------------------------------------------------------------------------------------------------------
	
	*/
	/*Tag Recomendaciones*/

function MedioAmbiente(){
	var tag = document.getElementById("MedioAmbiente");
    let textoTag = document.querySelector('#noteUno');
	tag.style.borderStyle = "dotted";
	textoTag.style.color = "red";
}

function MedioAmbienteOcul(){
    var tag = document.getElementById("MedioAmbiente");
	let textoTag = document.querySelector('#noteUno');
	tag.style.borderStyle = "none";	
	textoTag.style.color = "yellow";
}

//Tag Musica
function Musica(){
	var tagMusica = document.getElementById("Musica");
	let textoTagR = document.querySelector('#noteDos');
	tagMusica.style.borderStyle = "dotted";	
	textoTagR.style.color = "red";
}

function MusicaOcul(){
     var tagMusica = document.getElementById("Musica");
     let textoTagR = document.querySelector('#noteDos');
     tagMusica.style.borderStyle = "none";	
	 textoTagR.style.color = "#9f00ff";
}

//Tag Cultura
function Cultura(){
	 var tagCultura = document.getElementById("Cultura");
     let textoTagT = document.querySelector('#noteTres');
     tagCultura.style.borderStyle = "dotted";	
	 textoTagT.style.color = "red";
}

function CulturaOcul(){
     var tagCultura = document.getElementById("Cultura");
     let textoTagT = document.querySelector('#noteTres');
     tagCultura.style.borderStyle = "none";	
	 textoTagT.style.color = "rgb(70 7 255)";
}
//Tag Politica
function Politica(){
	 var tagPolitica = document.getElementById("Politica");
     let textoTagS = document.querySelector('#noteCuatro');
     tagPolitica.style.borderStyle = "dotted";	
	 textoTagS.style.color = "red";
}

function PoliticaOcul(){
     var tagPolitica = document.getElementById("Politica");
     let textoTagS = document.querySelector('#noteCuatro');
     tagPolitica.style.borderStyle = "none";	
	 textoTagS.style.color = "#c54816";
}
//Tag Paisaje
function Paisaje(){
	 var tagPaisaje = document.getElementById("Paisaje");
     let textoTagD = document.querySelector('#noteCinco');
     tagPaisaje.style.borderStyle = "dotted";	
	 textoTagD.style.color = "red";
}

function PaisajeOcul(){
     var tagPaisaje = document.getElementById("Paisaje");
     let textoTagD = document.querySelector('#noteCinco');
     tagPaisaje.style.borderStyle = "none";	
	 textoTagD.style.color = "#2ff300";
}