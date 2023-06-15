const formulario=document.getElementById("formularioContacto");

function iniciar()
{
	var boton = document.getElementById("botonContacto");
	boton.addEventListener("click", enviarFormulario);
}

function enviarFormulario()
{
	var form = document.querySelector("form[name='formularioContacto']");

	if(form.checkValidity()){
		formulario.addEventListener('submit',(event)=>{
            //event.preventDefault();
            //const datos=new FormData(event.target);
            //const datosCompletos=Object.fromEntries(datos.entries());
            //const newDatosJson=JSON.stringify(datosCompletos);
            form.submit();
        });
	}
    else{
		alert("Los campos no son validos");
	}
}

window.addEventListener("load", iniciar);




