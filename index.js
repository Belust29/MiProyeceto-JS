
alert("Elegi la opcion del producto que vas a agregar al carrito. Para finalizar la compra ingresa 0")
let seleccionarProductos = Number(prompt( "1-campera $40000 2-buzo $25000 3-bolso $10000 4-zapatillas $30000"))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("elegiste la campera, cuantas vas a llevar?"))
            total += cantidad(seleccionarCantidad, 40000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("elegiste el buzo, cuantos vas a llevar?"))
        total += cantidad(seleccionarCantidad, 25000)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("elegiste el buzo, cuantos vas a llevar?"))
      total += cantidad(seleccionarCantidad, 10000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("elegiste las zapatillas, cuantos pares vas a llevar?"))
      total += cantidad(seleccionarCantidad, 30000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-campera $40000 2-buzo $25000 3-bolso $10000 4-zapatillas $30000"))
}

alert("el total de tu compra es: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es sin cargo")
    }else{
      total += 1000
      alert("el costo de envio es de 1000. el total de tu compra es: " + total)
    }
}

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingresa la forma, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total final es:" + total)
  }

  
}

metodoDePago()
