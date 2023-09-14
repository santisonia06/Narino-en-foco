/*
Buscar Articulo
*/
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

function Buscar() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('main');
    let fai = document.getElementById("N_Search");
	
    for (i = 0; i < x.length;  i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
			
            fai.style.display="block";			
            document.getElementById("N_Search").innerHTML = "Articulo No Encontrado..";  
        }
		
		
        else {
            x[i].style.display="list-item";
            x[i].style.backgroundColor = 'rgb(24 27 29)';
			
			 fai.style.display="none";	
             fai.innerText = "Buscar Articulo..";
			 document.getElementById("N_Search").innerHTML = "Buscar Encontrado..";  
			 
        }
    }
 


}

