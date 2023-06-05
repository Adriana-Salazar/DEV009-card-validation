import validator from './validator.js';

console.log(validator);

const input = document.getElementById("tarjeta")

input.addEventListener("input",()=>{
  const inputValue = document.getElementById("tarjeta").value;
  console.log(inputValue);
})
