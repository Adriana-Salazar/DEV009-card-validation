import validator from "./validator.js";

const camp = document.getElementById("tarjeta");
//camp.addEventListener("click", function () {
// const spaces= "";
//if(spaces === "") {
//document.querySelector(".empty").innerHTML = `Introduce número de tarjeta`
//}
//})

const btn = document.getElementById("validar");
btn.addEventListener("click", function () {
  const creditCardNumber = camp.value;
  const isValid = validator.isValid(creditCardNumber);
  const maskedNumber = validator.maskify(creditCardNumber);
  if (isValid === true) {
    document.querySelector(
      ".result"
    ).innerHTML = `El número de tarjeta ${maskedNumber} es Válido`;
  } else if (isValid === false) {
    document.querySelector(
      ".result"
    ).innerHTML = `El número de tarjeta ${maskedNumber} es Invalido`;
  }
});
