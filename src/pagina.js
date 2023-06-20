var app={}
var inicioImgs = datos => {
    app.inicioImgs=datos;
}
var logoClub = datos => {
    app.logoClub=datos;
}
var noticiasNuevas = datos => {
    app.noticiasNuevas=datos;
}

function cargarPortada(){
    var portadaHtml="";
    portadaHtml+="<img id='imagen' src='"+app.inicioImgs[0].imagen+"' alt='No se encontro la imagen' class='col-12'/>";
    if(app.logoClub.length==0){
        portadaHtml+="";
    }
    else{
        var logoColor = imgLogo => imgLogo.formato=="pngColor";
        var logo = app.logoClub.filter(logoColor);
        portadaHtml+="<img id='logoColor' src='"+logo[0].imagen+"'/>";
    }
    document.getElementById("contenedorImagenPrincipal").innerHTML=portadaHtml;
};
window.addEventListener("load",cargarPortada);

window.addEventListener("load",()=>{
	var htmlNoticia="";
	if(app.noticiasNuevas.length==0){
		htmlNoticia="<div style='10vh'></div><div id='sinNoticias'><p>No hay noticias para mostrar</p></div>";
		document.getElementById("contenedorNoticias").innerHTML=htmlNoticia;
	}
	else{
		for(var index=0;index<7;index++){
			document.getElementById("aNoticia"+(index+1)).href="./paginas/Noticias.html";
			document.getElementById("imgNoticia"+(index+1)).src=app.noticiasNuevas[index].imagen;
			document.getElementById("pNoticia"+(index+1)).innerHTML=app.noticiasNuevas[index].titulo;
		};
		for(var index=7;index<10;index++){
			document.getElementById("hNoticia"+(index+1)).innerHTML=app.noticiasNuevas[index].titulo;
			document.getElementById("pNoticia"+(index+1)).innerHTML=app.noticiasNuevas[index].cuerpo;
			document.getElementById("imgNoticia"+(index+1)).src=app.noticiasNuevas[index].imagen;
		};
	}
});

window.addEventListener("load",()=>{
	var i=0;
	var img = document.getElementById("imagen");
	var imagenes=app.inicioImgs.map(imagen=>imagen.imagen);
	function cambiar()
	{
		img.style.opacity = 0;
		i = (i +1) % imagenes.length;
		img.src = imagenes[i];
		fadeIn(img);
	}
	setInterval(cambiar, 5000);
});
function fadeIn(img) {
    var op = 0.1;
    var t = setInterval(function () {
        if (op >= 1){
            clearInterval(t);
        }
        img.style.opacity = op;
        op += 0.1;
    }, 120);
}
