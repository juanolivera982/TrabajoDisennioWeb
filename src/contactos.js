


function iniciar()
{
	var boton = document.getElementById("botonContacto");
	boton.addEventListener("click", enviarFormulario);
}

function enviarFormulario()
{
	var form = document.querySelector("form[name='formularioContacto']");
	var valido=form.checkValidity();
	if(valido){
		alert("SE A ENVIADO PERFECTAMENTE");
		form.submit();
	}else{
		alert("Los campos no son validos");
	}
}

window.addEventListener("load", iniciar);





