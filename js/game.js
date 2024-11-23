
let jugador = 0
let min = 1
let max = 3
let pc = 0
let perdidas = 0 
let triunfos = 0

while (perdidas < 3 && triunfos < 3) {

let opcionValida = false;

    while (!opcionValida) {
        jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera");

        // Verificamos si la opción es válida
        if (jugador == 1 || jugador == 2 || jugador == 3) {
            opcionValida = true; // Opción válida, salimos del bucle
            // Elección del jugador
            if (jugador == 1) {
                alert("Elegiste piedra");
            } else if (jugador == 2) {
                alert("Elegiste papel");
            } else if (jugador == 3) {
                alert("Elegiste tijera");
            }
        } else {
            alert("Escoge una opción válida.");
        }
    }

    pc = aleatorio(1,3);

    if(pc == 1) {
        alert("PC elige piedra")
    } else if(pc == 2) {
        alert("PC elige papel")
    } else if(pc == 3) {
        alert("PC elige tijera")
    } else {
        alert("Escoge una opcion valida")
    }

    //Cobate

    if(jugador == pc) {
        alert("empate")
    } else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        alert("Ganaste")
        triunfos++
    } else {
        alert("Perdiste")
        perdidas++
    }
}

alert("ganaste " + triunfos + " veces " + " y perdiste " + perdidas + " veces")

// Función número aleatorio

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}


