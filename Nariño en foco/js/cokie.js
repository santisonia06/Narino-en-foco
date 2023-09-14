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
	/*Cokie*/
function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies != 'true'){
    cajacookies.style.display = 'block';
  }
  

}

/* aquí guardamos la variable de que se ha
aceptado el uso de cookies así no mostraremos
el mensaje de nuevo */
function aceptarCookies() {
 localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';

}

/* ésto se ejecuta cuando la web está cargada */
$(document).ready(function () {
  compruebaAceptaCookies();
   
});
