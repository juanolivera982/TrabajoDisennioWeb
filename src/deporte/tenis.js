var app={}
var tenisImgs = datos => {
    app.tenisImgs=datos;
}
var logoClub = datos => {
    app.logoClub=datos;
}
var noticias = datos => {
    app.noticias=datos;
}

function cargarPortada(){
    var portadaHtml="";
    portadaHtml+="<img id='imagen' src='"+app.tenisImgs[0].imagen+"' alt='No se encontro la imagen' class='col-12'/>";
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

function cargarNoticia(){
    var deporte=noticia => noticia.tipo=="tenis";
    var formato=logo => logo.formato=="pngColor";
    var noticiasDeporte=app.noticias.filter(deporte);
    var logoColor=app.logoClub.filter(formato);
    var htmlNoticia="";
    console.log(htmlNoticia);
    if(noticiasDeporte.length==0){
        htmlNoticia="<div style='10vh'></div><div id='sinNoticias'><p>No hay noticias para mostrar</p></div>";
    }
    else{
        noticiasDeporte.map(noticia=>{
            htmlNoticia+="<div class='card mb-3'><div class='col-md-4'><div class='imagenNoticia'><img src='"+logoColor[0].imagen+"' class='img-fluid rounded-start' alt='logoClub'/></div><div class='tituloNoticia'><h5 class='card-title'>"+noticia.titulo+"</h5></div></div><div class='col-md-8'><div class='card-body'><p class='card-text'>"+noticia.cuerpo+"</p><a href='#' class='btn btn-primary'>Leer mas</a></div></div><div class='col-md-8'><div class='card-body'><p class='card-text'><small class='text-muted'>Fecha de publicacion: "+noticia.fecha+"</small></p></div></div></div>";
            
        });
    }
    document.getElementById("noticias").innerHTML=htmlNoticia;
}
window.addEventListener("load",cargarNoticia);

var i=0;
function iniciar(){
    var img = document.getElementById("imagen");
    var imagenes=app.tenisImgs.map(imagen=>imagen.imagen);
    function cambiar()
    {
        img.style.opacity = 0;
        i = (i +1) % imagenes.length;
        img.src = imagenes[i];
        fadeIn(img);
    }
    setInterval(cambiar, 5000);
}
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
window.addEventListener("load",iniciar);