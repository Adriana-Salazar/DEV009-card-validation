import validator from './validator.js';
// eslint-disable-next-line no-console
console.log(validator);

const input = document.getElementById("tarjeta")

input.addEventListener("input", () => {
  const inputValue = input.value;
  // eslint-disable-next-line no-console
  console.log(inputValue);
})

function validarTarjeta() {
  const creditCardNumber = input.value;
  const isValid = validator.isValid(creditCardNumber);
  const maskedNumber = validator.maskify(creditCardNumber);
  // eslint-disable-next-line no-console
  console.log(`El número de tarjeta ${maskedNumber} es válido: ${isValid}`);
  
}

const validateButton = document.getElementById('validar');
validateButton.addEventListener('click', validarTarjeta);
export default {};
// eslint-disable-next-line no-console
console.log(validator);

