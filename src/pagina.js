var imagenes = ['imgFutbol.jpg', 'imgTenis.jpg','imgVolley.jpg','imgBasket.jpg','imgHandBall.jpg','imgNatacion.jpg','imgAjedrez.jpg','imgBox.jpg','imgKarate.jpg'];
var dirImagenes = "./imagenes/";
var i = 1;

function iniciar()
{

	var img = document.getElementById("imagen");
	//img.src = dirImagenes + imagenes[i];
	function cambiar()
	{
		img.style.opacity = 0;
		i = (i +1) % imagenes.length;
		img.src = dirImagenes + imagenes[i];
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

window.addEventListener("load", iniciar);
