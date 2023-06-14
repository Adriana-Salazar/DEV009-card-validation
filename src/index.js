import validator from "./validator.js";
const camp = document.getElementById("tarjeta");
const btn = document.getElementById("validar");
btn.addEventListener("click", function () {
  const creditCardNumber = camp.value;
  const isValid = validator.isValid(creditCardNumber);
  const maskedNumber = validator.maskify(creditCardNumber);
  if (isValid === true) {
    document.querySelector(
      ".result"
    ).innerHTML = `El número de tarjeta ${maskedNumber} es Válido, Por favor ingrese Nombres y Apellidos`;
  } else if (isValid === false) {
    document.querySelector(
      ".result"
    ).innerHTML = `El número de tarjeta ${maskedNumber} es Invalido`;
  }
});

document.getElementById("Datos").addEventListener("click", validarDatos);
function validarDatos() {
  let nombres = document.getElementById("name").value;
  let apellidos = document.getElementById("last_name").value;
  if (nombres === "" || apellidos === "") {
    alert("Por favor, complete los campos de nombres y apellidos.");
  } else {
    // Los campos están llenos, puedes enviar el formulario aquí.
    alert("Formulario enviado correctamente.");
  }
}
