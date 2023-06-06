const precide=document.getElementById('primero');

precide=fetch('son/profesores.json')
.then(res => res.json())
.then(res => {res.forEach(persona =>{
    precide.innerHTML=persona.precidente;
});
}
)