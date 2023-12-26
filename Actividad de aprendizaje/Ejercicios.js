class Ejercicios {
Ejercicio1() {
var i = 1
var num = parseFloat(prompt("Escribe un número:"))
var div = []
for (i; i <= num; i++) {
if (num % i === 0 && i !== num) {
div.push(i)
}
}
alert("Los div de " + num + " son: " + div)
}
Ejercicio2() {
var i = 1
var check = 0
var num = parseFloat(prompt("Escribe un número:"))
for (i; i <= num / 2; i++) {
if (num % i === 0) {
check = check + i
}
}
if (num === check) {
alert("El número " + num + " es perfecto.")
}
else
{
alert("El número " + num + " no es perfecto.")
}
}
Ejercicio3() {
var i = 2
var check = true
var num = parseFloat(prompt("Escribe un número:"))
if (num <= 1) {
check = false
}
else
{
for (i; i <= Math.sqrt(num); i++) {
if (num % i === 0) {
check = false
break
}
}
}
if (check) {
alert("El número " + num + " es primo.")
}
else
{
alert("El número " + num + " no es primo.")
}
}
Ejercicio4() {
var i1 = 2
var i2 = 2
var check1 = true
var check2 = true
var num1 = parseFloat(prompt("Escribe un número:"))
var num2 = num1 + 2
if (num1 <= 1) {
check1 = false
}
else
{
for (i1; i1 <= Math.sqrt(num1); i1++) {
if (num1 % i1 === 0) {
check1 = false
break
}
}
}
if (num2 <= 1) {
check2 = false
}
else
{
for (i2; i2 <= Math.sqrt(num2); i2++) {
if (num2 % i2 === 0) {
check2 = false
break
}
}
}
if (check1 && check2) {
alert("Los números " + num1 + " y " + num2 + " son números primos gemelos.")
}
else
{
alert("No se encontraron números primos gemelos a partir de " + num1 + ".")
}
}
Ejercicio5() {
var text1 = prompt("Escribe una palabra:")
var text2 = prompt("Escribe otra palabra:")
alert('Las cadenas concatenadas son: ' + '"' + text1 + ' ' + text2 + '"')
}
Ejercicio6() {
var phrase = prompt("Escribe una frase:")
var text = prompt("Escribe una palabra a buscar:")
var pos = phrase.indexOf(text)
if (pos !== -1) {
alert('La subcadena "' + text + '" fue encontrada en la posición: ' + pos)
}
else
{
alert('La subcadena "' + text + '" no fue encontrada.')
}
}
Ejercicio7() {
alert('Cadena usada: "Esto es un ejemplo de cadena"\nPosición: 10')
var main = "Esto es un ejemplo de cadena"
var sub = prompt("Escribe una palabra o frase para insertar a la cadena en la posición establecida:")
var pos = 10
var nuevaCadena = main.slice(0, pos) + " " + sub + main.slice(pos)
alert(nuevaCadena)
}
Ejercicio8() {
alert('Cadena usada: "Esto es un ejemplo de cadena"')
var main = "Esto es un ejemplo de cadena"
var sub = prompt("Escribe una palabra para eliminar de la cadena:")
if (main.includes(sub)) {
var op = main.replace(sub, "")
alert(op)
}
else
{
alert('La subcadena "' + sub + '" no fue encontrada en la cadena.')
}
}
Ejercicio9() {
var global = prompt('Ingresa varias palabras separadas con "," para convertirlas en una cadena:')
var array = global.split(",")
var r = array.join(" ")
alert(r)
}
Ejercicio10() {
var i = 1
var num = prompt('Ingresa varios números parados por ",":')
var array = num.split(",")
var r = array.map(function(e) {
return parseFloat(e)
})
var t = r[0]
for (i; i < r.length; i++) {
if (r[i] > t) {
t = r[i]
}
}
alert("El número " + t + " es el mayor.")
}
}
var exe = new Ejercicios()