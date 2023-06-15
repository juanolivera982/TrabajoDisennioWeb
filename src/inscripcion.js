function iniciar()
{
	var boton = document.getElementById("enviar");
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");

	nombre.addEventListener("input", () => {
		if(!soloLetras(nombre)){
			nombre.setCustomValidity("Inserte solo caracteres alfabéticos");
			nombre.style.background = "#ffdddd";
		}else{
			nombre.setCustomValidity("");
			nombre.style.background = "#ffffff";
		}
	});

	apellido.addEventListener("input", () => {
		if(!soloLetras(apellido)){
			apellido.setCustomValidity("Inserte solo caracteres alfabéticos");
			apellido.style.background = "#ffdddd";
		}else{
			apellido.setCustomValidity("");
			apellido.style.background = "#ffffff";
		}

	});

	boton.addEventListener("click", enviarFormulario);
}

function soloLetras(input)
{
	//nos aseguramos de que el input solo contenga caracteres alfabéticos
	if(input.value.match(/^[A-Za-z]+$/)){
		return true;
	}
	return false;
}

function enviarFormulario()
{
	var form = document.querySelector("form[name='formulario']");

	if(form.checkValidity()){
		form.submit();
	}else{
		alert("Los campos no son validos");
	}
}

window.addEventListener("load", iniciar);
