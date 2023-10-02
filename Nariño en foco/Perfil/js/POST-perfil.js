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
	/*Galeria img*/
	
	
let index = 0,
  sliders,
  timer,
  next,
  prev;
document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos solo una vez y ocultarlos
  slides = document.querySelectorAll(".mySlides");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Obtener botones y asignar evento
  document.querySelector('.prev').addEventListener('click', () => showSlides(-1));
  document.querySelector('.next').addEventListener('click', () => showSlides(1));
  // Asignar evento para funcionar con teclado
  document.addEventListener('keyup', (e) => {
    if(e.keyCode == 37) {
      // Tecla izquierda
      showSlides(-1);
    } else if(e.keyCode == 39) {
      // Tecla derecha
      showSlides(1);
    }
  });
  showSlides(0);
});

function showSlides(n) {
  // Cancelar temporizador para evitar comportamientos extraños
  clearTimeout(timer);
  // Ocultar elemento actual
  slides[index].style.display = 'none';
  index += n;
  if (index >= slides.length) {
    // Ir al inicio
    index = 0;
  } else if(index < 0) {
    // Ir al final
    index = slides.length - 1;
  }
  // Mostrar elemento
  slides[index].style.display = "block";  
  timer = setTimeout(showSlides, 4000, 1);
}







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
	/*Create a lightbox*/



// Create a lightbox

// Create a lightbox
(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Add data to lighbox

    $img.attr('src', src);
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());


