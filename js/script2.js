let paris = 800
let nuevaYork = 1200
let sidney = 1050
let tokio = 1000

let nombre = prompt("Ingrese su nombre:")

if(nombre == "") {
    alert("Ingrese un nombre valido")
}
else{
    alert("Bienvenido " + nombre + "!")
}

let viajes = prompt("A cuantos destinos desea ir?")

for(let i = 0 ; i < viajes ; i++) {

    let pasajes = prompt("Cuantos pasajes desea comprar?")

    let destino = prompt("Bienvenido " + nombre + "." + " Eliga su destino: \n- Paris\n- Nueva York\n- Sidney\n- Tokio")

    if(destino == "Paris") {
        alert("El precio total seria de: $" + pasajes * paris)
}
    else if(destino == "Nueva York") {
        alert("El precio total seria de: $" + pasajes * nuevaYork)
}
    else if(destino == "Sidney") {
        alert("El precio total seria de: $" + pasajes * sidney)
}
    else if(destino == "Tokio") {
        alert("El precio total seria de: $" + pasajes * tokio)
}
    else {
        alert("Eliga un destino valido")
}
}
