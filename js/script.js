const body = document.body
const toggleButton = document.getElementById("togglebutton")
const circle = document.getElementById("circle")

toggleButton.addEventListener("click", () => {
  circle.classList.toggle("night")
  body.classList.toggle("dark")
})



// Ejercicio del sprint 7 "Polindromos"
// No tiene nada que ver con el ejercicio Dark Mode, pero repasar la estructura de la función de polindromos
/*
const isPalindromo = (palabra) => {
  const cadenaLimpia = palabra.toUpperCase().replaceAll(' ', '')
  const cadenainvertida = cadenaLimpia.split('').reverse().join('')

  return cadenaLimpia === cadenainvertida
}

console.log(isPalindromo("reconocer"));
*/