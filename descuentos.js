// const precioNormal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precioNormal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioNormal * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularDescuento(){

    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const priceValue = parseInt(price);
    

    const inputDiscount = document.getElementById("inputDiscount");
    const discount = inputDiscount.value;
    const DiscountValue = parseInt(discount);

    const total = calcularPrecioConDescuento(priceValue, DiscountValue);

    const outcomePrice = document.getElementById("outcomePrice");
    

    outcomePrice.innerHTML = `El precio con descuento es: $${total}`;
    
    
}

// console.log({
//     precioNormal,
//     descuento,
//     precioConDescuento,
//     porcentajePrecioConDescuento
// }