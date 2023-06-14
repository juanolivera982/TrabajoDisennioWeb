const solomas=document.getElementById('directorTecnico');
const ayudante=document.getElementById('ayudanteTecnico');
const reserva=document.getElementById('directorTecnicoReserva');
const profe5=document.getElementById('profesor05');
const profe7=document.getElementById('profesor07');
const profe12=document.getElementById('profesor12');
const profe17=document.getElementById('profesor17');

//encargados de voley
const solomasVoley=document.getElementById('directorTecnicoVoley');
const ayudanteVoley=document.getElementById('ayudanteTecnicoVoley');
const reservaVoley=document.getElementById('directorTecnicoReservaVoley');
const profeVoley=document.getElementById('profesorVoley');

//basquet
const solomasBas=document.getElementById('directorTecnicoBas');
const reservaBas=document.getElementById('directorTecnicoReservaBas');
const profeBas=document.getElementById('profesorBas');

//Handball
const solomasHan=document.getElementById('directorTecnicoHan');
const profeHombreHan=document.getElementById('profesorHombres');
const profeMujerHan=document.getElementById('profesorMujeres');

//Tenis
const profeHombreTen=document.getElementById('profesorHombresTen');
const profeMujerTen=document.getElementById('profesorMujeresTen');

//Natación
const solomasNat=document.getElementById('profesorMayores');
const profe1Nat=document.getElementById('profesor1Nata');
const profe2Nat=document.getElementById('profesor2Nata');

//Ajedrez
const profe1Aje=document.getElementById('profesor1Aje');
const profe2Aje=document.getElementById('profesor2Aje');

//Hokey
const solomasHok=document.getElementById('directorTecnicoHok');
const profeHok=document.getElementById('profesorHok');

//Boxeo
const solomasBox=document.getElementById('profesorMayoresBox');
const ayudanteBox=document.getElementById('ayudanteMayoresBox');
const profeBox=document.getElementById('profesorBox')

//Karate
const solomasKar=document.getElementById('profesorMayoresKar');
const ayudanteKar=document.getElementById('ayudanteMayoresKar');
const profeKar=document.getElementById('profesorKar')
    
//Directiva
const precidente=document.getElementById('precidente');
const vice=document.getElementById('vice');
const viceSegundo=document.getElementById('viceSegundo');
const secretario=document.getElementById('secretario');
const tesorero=document.getElementById('tesorero');
const vocal1=document.getElementById('vocales1');
const vocal2=document.getElementById('vocales2');
const vocal3=document.getElementById('vocales3');

solomas = fetch('json.json')
.then(res => res.json())
.then(res => {
res.forEach(persona => {
    //directiva
    precidente.innerHTML=persona.precidente;
    vice.innerHTML=persona.vice;
    viceSegundo.innerHTML=persona.viceSegundo;
    secretario.innerHTML=persona.secretario;
    tesorero.innerHTML=persona.tesorero;
    vocal1.innerHTML=persona.vocales1;
    vocal2.innerHTML=persona.vocales2;
    vocal3.innerHTML=persona.vocales3;
    //FUtbol
    solomas.innerHTML = persona.directorTecnico;
    ayudante.innerHTML= persona.ayudanteTecnico;
    reserva.innerHTML= persona.directorTecnicoReserva;
    profe12.innerHTML= persona.profesor12;
    profe17.innerHTML= persona.profesor17;
    profe5.innerHTML= persona.profesor05;
    profe7.innerHTML= persona.profesor07;
    //voley
    solomasVoley.innerHTML = persona.directorTecnicoVoley;
    ayudanteVoley.innerHTML= persona.ayudanteTecnicoVoley;
    reservaVoley.innerHTML= persona.directorTecnicoReservaVoley;
    profeVoley.innerHTML= persona.profesorVoley;
    //basquey
    solomasBas.innerHTML= persona.directorTecnicoBas;
    reservaBas.innerHTML= persona.directorTecnicoReservaBas;
    profeBas.innerHTML = persona.profesorBas;
    //handball
    solomasHan.innerHTML = persona.directorTecnicoHan;
    profeHombreHan.innerHTML = persona.profesorHombres;
    profeMujerHan.innerHTML = persona.profesorMujeres;
    //Tennis}
    profeHombreTen.innerHTML = persona.profesorHombresTen;
    profeMujerTen.innerHTML = persona.profesorMujeresTen;
    //Natación
    solomasNat.innerHTML=persona.profesorMayores;
    profe1Nat.innerHTML=persona.profesor1Nata;
    profe2Nat.innerHTML=persona.profesor2Nata;
    //hokey
    solomasHok.innerHTML=persona.directorTecnicoHok;
    profeHok.innerHTML=persona.profesorHok;
    //ajedrez
    profe1Aje.innerHTML=persona.profesor1Aje;
    profe2Aje.innerHTML=persona.profesor2Aje;
    //Boxeo
    solomasBox.innerHTML=persona.profesorMayoresBox;
    ayudanteBox.innerHTML=persona.ayudanteMayoresBox;
    profeBox.innerHTML=persona.profesorBox;
    //Karate
    solomasKar.innerHTML=persona.profesorMayoresKar;
    ayudanteKar.innerHTML=persona.ayudanteMayoresKar;
    profeKar.innerHTML=persona.profesorKar;
});
}
);





