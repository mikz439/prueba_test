/* Controles JS */

$(document).on('ready', function(){
	clickDeLinks();
});

function clickDeLinks () {
	var navegacion = $('.navegacion ul li');

	navegacion.click(function(){
		$(".contenido").fadeOut();
		peticion(this.id);
	})
	
}