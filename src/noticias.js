var app={};
var noticias=datos=>{
    app.noticias=datos;
};
var noticiasNuevas=datos=>{
    app.noticiasNuevas=datos;
};

window.addEventListener("load",()=>{
    var htmlNoticia="";
    if((app.noticias.length)+(app.noticiasNuevas.length)==0){
        htmlNoticia="<div style='10vh'></div><div id='sinNoticias'><p>No hay noticias para mostrar</p></div>";
		document.getElementById("contenedorNoticias").innerHTML+=htmlNoticia;
    }
    else{
        if(app.noticiasNuevas.length==0){
            var idTipo=[["ajedrez",0],["basquet",0],["boxeo",0],["futbol",0],["handball",0],["hockey sobre cesped",0],["karate",0],["natacion",0],["tenis",0],["voley",0],["directiva",0]];
            var index;
            app.noticias.map(noticia=>{
                index=0;
                while(idTipo[index][0]!=noticia.tipo&&index<idTipo.length){
                    index++;
                };
                if(index==idTipo.length){
                    console.log("Error de Tipo");
                }
                else{
                    idTipo[index].splice(1,1,(idTipo[index][1])+1);
                    if(idTipo[index][0]=="hockey sobre cesped"){
                        htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-hockeySobreCesped-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                    }
                    else{
                        htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                    }
                };
            });
            document.getElementById("contenedorNoticias").innerHTML+=htmlNoticia;
        }
        else{
            if(app.noticias.length==0){
                var idTipo=[["ajedrez",0],["basquet",0],["boxeo",0],["futbol",0],["handball",0],["hockey sobre cesped",0],["karate",0],["natacion",0],["tenis",0],["voley",0],["directiva",0]];
                var index;
                app.noticiasNuevas.map(noticia=>{
                    index=0;
                    while(idTipo[index][0]!=noticia.tipo&&index<idTipo.length){
                        index++;
                    };
                    if(index==idTipo.length){
                        console.log("Error de Tipo");
                    }
                    else{
                        idTipo[index].splice(1,1,(idTipo[index][1])+1);
                        if(idTipo[index][0]=="hockey sobre cesped"){
                            htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-hockeySobreCesped-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                        }
                        else{
                            htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                        }
                    };
                });
                document.getElementById("contenedorNoticias").innerHTML+=htmlNoticia;
            }
            else{
                var idTipo=[["ajedrez",0],["basquet",0],["boxeo",0],["futbol",0],["handball",0],["hockey sobre cesped",0],["karate",0],["natacion",0],["tenis",0],["voley",0],["directiva",0]];
                var index;
                app.noticiasNuevas.map(noticia=>{
                    index=0;
                    while(idTipo[index][0]!=noticia.tipo&&index<idTipo.length){
                        index++;
                    };
                    if(index==idTipo.length){
                        console.log("Error de Tipo");
                    }
                    else{
                        idTipo[index].splice(1,1,(idTipo[index][1])+1);
                        if(idTipo[index][0]=="hockey sobre cesped"){
                            htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-hockeySobreCesped-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                        }
                        else{
                            htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                        }
                    };
                });
                app.noticias.map(noticia=>{
                    index=0;
                    while(idTipo[index][0]!=noticia.tipo&&index<idTipo.length){
                        index++;
                    };
                    if(index==idTipo.length){
                        console.log("Error de Tipo");
                    }
                    else{
                        idTipo[index].splice(1,1,(idTipo[index][1])+1);
                        if(idTipo[index][0]=="hockey sobre cesped"){
                            htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-hockeySobreCesped-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                        }
                        else{
                            htmlNoticia+="<div class='col-md-4' name='noticia' id='noticia-"+noticia.tipo+"-"+(idTipo[index][1])+"'><div class='card h-100'><img src='."+noticia.imagen+"' class='card-img-top' alt='Imagen no encontrada'/><div class='card-body'><h5 class='card-title'>"+noticia.titulo+"</h5><p class='card-text'>"+noticia.cuerpo+"</p></div><div class='card-footer'><small class='text-muted'>"+noticia.tipo+"</small></div></div></div>";
                        }
                    };
                });
                document.getElementById("contenedorNoticias").innerHTML+=htmlNoticia;
            };
        };
    };
});


function dejarNoticia(tipo){
    var noticias=document.getElementsByName("noticia");
    noticias.forEach(noticia=>{
        if(noticia.id.includes(tipo)){
            document.getElementById(noticia.id).style.display="";
        }
        else{
            document.getElementById(noticia.id).style.display="none";
        };
    });
}

function reiniciar(){
    var noticias=document.getElementsByName("noticia");
    noticias.forEach(noticia=>{
        document.getElementById(noticia.id).style.display="";
    });
}