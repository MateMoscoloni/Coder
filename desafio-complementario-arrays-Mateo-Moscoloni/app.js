class Juego {
  constructor(nombre, formato, precio, info){
    this.nombre = nombre;
    this.formato = formato;
    this.precio = precio;
    this.info = info;
  }
  agregarJuego(producto){
    this.productos.push(producto);
  }
  //le suma el 65% de impuestos por compras
  calcularTotal() {
    return this.precio * 1.65;
  }
}




const juego1 = new Juego("Elden Ring", "digital", 4999, "un juego de aventura mundo abierto. De los creadores de Dark Souls")
const juego2 = new Juego("Hades", "digital", 329, "un roguelite basado en la mitología griega")
const juego3 = new Juego("Hunt", "digital", 799, "un battleroyale ambientado en los 70'")
const juego4 = new Juego("Portal", "físico, edición coleccionista", 1799, "un clásico de la compañía Valve")
const juegos = new Array(juego1, juego2, juego3, juego4);
let opcion;
function comprarJuego(acceder){
  acceder.toLocaleLowerCase
  if (acceder == "elden ring") {
    juegos.forEach(juego1 =>{
      if(juego1.nombre === "Elden Ring"){
        alert(juego1.nombre+ " es " + juego1.info + " su formato es " + juego1.formato + " y su valor es de $" + juego1.precio);
        alert("El valor del producto con impuestos incluídos quedaría en $" + juego1.calcularTotal())
         opcion = confirm("Aceptar para comprar o Cancelar para no comprar el artículo")
        if (opcion == true){
          alert("Juego adquirido con éxito")
        } else {
          alert("No has comprado el juego")
        }
      }
    })
  } else if (acceder == "hades") {
    juegos.forEach(juego2 =>{
      if(juego2.nombre === "Hades"){
        alert(juego2.nombre+ " es " + juego2.info + " su formato es " + juego2.formato + " y su valor es de $" + juego2.precio);
        alert("El valor del producto con impuestos incluídos quedaría en $" + juego2.calcularTotal())
        opcion = confirm("Aceptar para comprar o Cancelar para no comprar el artículo")
        if (opcion == true){
          alert("Juego adquirido con éxito")
        } else {
          alert("No has comprado el juego")
        }
      }
    })
  } else if (acceder == "hunt") {
    juegos.forEach(juego3 => {
      if(juego3.nombre === "Hunt"){
        alert(juego3.nombre+ " es " + juego3.info + " su formato es " + juego3.formato + " y su valor es de $" + juego3.precio);
        alert("El valor del producto con impuestos incluídos quedaría en $" + juego3.calcularTotal())
        opcion = confirm("Aceptar para comprar o Cancelar para no comprar el artículo")
        if (opcion == true){
          alert("Juego adquirido con éxito")
        } else {
          alert("No has comprado el juego")
        }
      }
    })
  } else if (acceder == "portal") {
    juegos.forEach(juego4 => {
      if(juego4.nombre === "Portal"){
        alert(juego4.nombre+ " es " + juego4.info + " su formato es " + juego4.formato + " y su valor es de $" + juego4.precio);
        alert("El valor del producto con impuestos incluídos quedaría en $" + juego4.calcularTotal())
        opcion = confirm("Aceptar para comprar o Cancelar para no comprar el artículo")
        if (opcion == true){
          alert("Juego adquirido con éxito")
        } else {
          alert("No has comprado el juego")
        }
      }
    })
  } else alert("no tenemos el juego seleccionado disponible")

}

let valor1 = prompt("ingrese el juego que desea. Las opciones son Elden Ring, Hades, Hunt, Portal")
comprarJuego(valor1)

