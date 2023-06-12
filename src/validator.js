const validator = {
  // ......Convertir el número de tarjeta de crédito en un array
  isValid: function (creditCardNumber) {
    const digits = creditCardNumber.split("");
    const reversedDigits = digits.reverse();

    //..Aplicar el Algoritmo de Luhn
    let sum = 0;
    for (let i = 0; i < reversedDigits.length; i++) {
      let digit = parseInt(reversedDigits[i], 10);
      if (i % 2 !== 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return sum % 10 === 0;
  },
  // Verificar si la longitud de la tarjeta es menor o igual a 4
  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    }
    // Reemplazar todos los caracteres excepto los últimos 4 por '#'
    const maskedNumber = creditCardNumber.slice(0, -4).replace(/./g, "#");
    // Concatenar los últimos 4 caracteres
    return maskedNumber + creditCardNumber.slice(-4);
  },
};
export default validator;