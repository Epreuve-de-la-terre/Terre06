#! node

const num1 = parseInt(process.argv[2])
const num2 = parseInt(process.argv[3])
let res = num1 % num2
let div = (num1-res) / num2



if (isNaN(num2) || isNaN(num1)) {
  console.log("Veuillez entrer deux chiffre comme argument")
} else if (num2 == 0 || num1 < num2) {
  console.log("Erreur")
} else {
  console.log("Resultat : " + div)
  console.log("Reste : " + res)
}
