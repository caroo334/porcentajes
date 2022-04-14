function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularPrecio(){
  const inputPrice =  document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount =  document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText ="FINAL PRICE $" + precioConDescuento;
}