var app={}
var handballImgs = datos => {
    app.handballImgs=datos;
}
var logoClub = datos => {
    app.logoClub=datos;
}
var noticiasNuevas=datos=>{
    app.noticiasNuevas=datos;
}
var noticias = datos => {
    app.noticias=datos;
}

function cargarPortada(){
    var portadaHtml="";
    portadaHtml+="<img id='imagen' src='"+app.handballImgs[0].imagen+"' alt='No se encontro la imagen' class='col-12'/>";
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
    var deporte=noticia => noticia.tipo=="handball";
    var noticiasDeporte=app.noticias.filter(deporte);
    var noticiasNuevasDeporte=app.noticiasNuevas.filter(deporte);
    if(noticiasDeporte.length==0&&noticiasNuevasDeporte.length==0){
        htmlNoticia="<div style='10vh'></div><div id='sinNoticias'><p>No hay noticias para mostrar</p></div>";
    }
    else{
        var htmlNoticia="",index;
        if(noticiasNuevasDeporte.length==0){
            index=1;
            noticiasDeporte.map(noticia=>{
                htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+index+"'><div class='card h-100'><img src='../."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>Fecha: "+noticia.fecha+"</small></div></div></div>";
                index++;
            });
            document.getElementById("contenedorNoticias").innerHTML=htmlNoticia;
        }
        else{
            if(noticiasNuevasDeporte.length==0){
                index=1;
                noticiasNuevasDeporte.map(noticia=>{
                    htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+index+"'><div class='card h-100'><img src='../."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>Fecha: "+noticia.fecha+"</small></div></div></div>";
                    index++;
                });
                document.getElementById("contenedorNoticias").innerHTML=htmlNoticia;
            }
            else{
                index=1;
                noticiasNuevasDeporte.map(noticia=>{
                    htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+index+"'><div class='card h-100'><img src='../."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>Fecha: "+noticia.fecha+"</small></div></div></div>";
                    index++;
                });
                noticiasDeporte.map(noticia=>{
                    htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+index+"'><div class='card h-100'><img src='../."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>Fecha: "+noticia.fecha+"</small></div></div></div>";
                    index++;
                });
                document.getElementById("contenedorNoticias").innerHTML=htmlNoticia;
            }
        }
        
    }
    
}
window.addEventListener("load",cargarNoticia);

var i=0;
function iniciar(){
    var img = document.getElementById("imagen");
    var imagenes=app.handballImgs.map(imagen=>imagen.imagen);
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