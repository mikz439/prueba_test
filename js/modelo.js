/* Peticiones */

function peticion (nombre) {
	$.ajax({
		url: "secciones/" + nombre + ".html",
		cache: true,
		success: function(response){
					$(".contenido").html(response).fadeIn(1200);
				},
		error: $(".contenido").fadeIn(800)		
	});
}