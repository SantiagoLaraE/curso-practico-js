
function calcularPrecioConDescuento(precioNormal, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento =
    (precioNormal * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularDescuento() {
  const inputPrice = document.getElementById("inputPrice");
  const price = inputPrice.value;
  const priceValue = parseInt(price);

  const inputDiscount = document.getElementById("inputDiscount");
  const discount = inputDiscount.value;
  const DiscountValue = parseInt(discount);

  const total = calcularPrecioConDescuento(priceValue, DiscountValue);

  const outcomePrice = document.getElementById("outcomePrice");

  outcomePrice.innerHTML = `El precio con descuento es: <span>$${total}</span>`;
}

// CREAR CUPONES DE DESCUENTO

var coupons = [];

function coupon(name, discount) {
  this.name = name;
  this.discount = discount;
}

function createCoupon() {
  const couponName = document.getElementById("couponName");
  const couponNameValue = couponName.value;

  const couponDiscount = document.getElementById("couponDiscount");
  const couponDiscountValue = couponDiscount.value;

  const newCoupon = new coupon(couponNameValue, couponDiscountValue);
  coupons.push(newCoupon);
  alert("cupon creado");
}


//APLICANDO CUPONES

function applyCoupon() {
  // Interactuando con HTML
  const productPrice = document.getElementById("productPrice");
  const productPriceValue = productPrice.value;

  const applyCouponName = document.getElementById("applyCouponName");
  const applyCouponNameValue = applyCouponName.value;

  const outcomePriceCoupon = document.getElementById("outcomePriceCoupon");

  //Buscar cúpon

  const findCoupon = coupons.find(function (coupon) {
    return coupon.name == applyCouponNameValue;
  });

  // Condiciones si el cúpon existe o no

  if (findCoupon) {
    const couponDiscount = findCoupon.discount;

    const totalCouponPrice = calcularPrecioConDescuento(
      productPriceValue,
      couponDiscount
    );

    outcomePriceCoupon.innerHTML = `Obtuviste un descuento del: ${couponDiscount}% <br /> Total a pagar con descuento: $${totalCouponPrice}`;
  } else {
    outcomePriceCoupon.innerHTML = `El cúpon ${applyCouponNameValue} no es válido`;
  }
}
