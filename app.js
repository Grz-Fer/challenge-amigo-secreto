//Crea expresión regular para limitar los carácteres y solo permita letras y apóstrofe.
const REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑäÄëËïÏöÖüÜçÇ\s']+$/;

//Crea la lista de amigos.
let amigos = [];



function agregarAmigo() {
    //Obtiene el valor del input y borra los espacios innecesarios.
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    //Verifica que solo se coloquen letras y que no se envíen nombres vacíos    
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else if (!REGEX.test(nombreAmigo)){
        alert("Por favor, ingrese únicamente letras")
        return;
    }

    //Convierte en mayúscula para evitar errores de repetición por case-sensitive.
    nombreAmigo = nombreAmigo.toUpperCase();

    //Verifica que el nombre no esté repetido.
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya existe en la lista, por favor, agregue un distintivo a ese nombre.`);
        return;
    }

    //Agrega el nombre a la lista, vacía el input, deja el foco en él para seguir agregando nombres.
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    
    actualizarLista();
    
}
    //Muestra los valores de la lista en el html
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    
    
    listaAmigos.innerHTML = "";
    
    for(let i=0; i<amigos.length; i++){
        let lista = document.createElement("li");
        lista.textContent = amigos[i];

        listaAmigos.appendChild(lista);
    }
}


//Recorre la lista, selecciona aleatoreamente un nombre.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No se encontraron amigos para sortear, agrega al menos un amigo/a");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    //Muestra en el html el amigo que salió sorteado.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =`Tu amigo/a sorteado/a es: ${amigoSorteado}`;
}