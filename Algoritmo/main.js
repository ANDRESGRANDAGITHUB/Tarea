class ExpresionesMatematicas {
Ejercicio1() {
var dado1 = 3
var dado2 = 7
var y = 2 * dado1 + dado2 - dado1 % 3
var Escribir = console.log
Escribir('EL VALOR DE "Y" ES:', y)
}

Ejercicio2() {
var a = 10
var b = 4
var z = a * b + 3 % a + b
var Escribir = console.log
Escribir('EL VALOR DE "Z" ES:', z)
}

Ejercicio3() {
var a = 6
var b = 2
var w = a - b + 2 * a % b
var Escribir = console.log
Escribir('EL VALOR DE "W" ES:', w)
}

Ejercicio4() {
var a = 8
var b = 5
var v = 2 * b + Math.trunc(a / 2) + 4 * b % a
var Escribir = console.log
Escribir('EL VALOR DE "v" ES:', v)
}

Ejercicio5() {
var a = 12
var b = 9
var u = b - a + 3 * a % b
var Escribir = console.log
Escribir('EL VALOR DE "U" ES:', u)
}

Ejercicio6() {
var r = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
var Escribir = console.log
Escribir('LA RESPUESTA ES:', r)
}

Ejercicio7() {
var r = 2 * (4 -10 + 8) / 2 * 36 * (1 / 2)
var Escribir = console.log
Escribir('LA RESPUESTA ES:', r)
}

Ejercicio8() {
var r = 260 / 12 + 54 % 3 - 85 % 7
var Escribir = console.log
Escribir('LA RESPUESTA ES:', r)
}
 
Ejercicio9() {
var r = (48 < 2 * 3) || (2 * 7 < 12)
var Escribir = console.log
Escribir('LA RESPUESTA ES:', r)
}
  
Ejercicio10() {
var r = ((8 > 2) || (932 < 23)) && 4 == 2
var Escribir = console.log
Escribir('LA RESPUESTA ES:', r)
}
}

class Secuenciales {
Ejercicio11() {
const prompt = require('prompt-sync')();
var num1 = prompt('ESCRIBE UN NÚMERO: ')
var num2 = prompt('ESCRIBE OTRO NÚMERO: ')
var r = parseInt(num1) + parseInt(num2)
var Escribir = console.log
Escribir('SUMA DE DOS NÚMEROS')
Escribir(num1, '+', num2, '=', r)
}

Ejercicio12() {
const prompt = require('prompt-sync')();
var num1 = prompt('INGRESA LA BASE DE UN TRIÁNGULO: ')
var num2 = prompt('INGRESA LA ALTURA DE UN TRIÁNGULO: ')
var r = parseInt(num1) * parseInt(num2) / parseInt(2)
var Escribir = console.log
Escribir('ÁREA DE UN TRIÁNGULO')
Escribir('EL ÁREA ES:', r)
}

Ejercicio13() {
const prompt = require('prompt-sync')();
var num = prompt('INGRESA UN NÚMERO: ')
var Escribir = console.log
Escribir('NÚMERO PAR O IMPAR')
if (num == '') {
Escribir('NO INGRESÓ NINGÚN NÚMERO.')
}
else
{
if (num % 2 == 0) {
Escribir(num, 'ES: PAR')
}
else
{
Escribir(num, 'ES: IMPAR')
}
}
}

Ejercicio14() {
const prompt = require('prompt-sync')();
var calculadora = ['1', '2', '3', '4']
var num = prompt('SELECCIONE UNA OPCIÓN [1 - 4]: ')
var Escribir = console.log
if (num == calculadora[0]) {
Escribir('SUMA')
var num1 = prompt('ESCRIBE UN NÚMERO: ')
var num2 = prompt('ESCRIBE OTRO NÚMERO: ')
var r = parseInt(num1) + parseInt(num2)
var Escribir = console.log
Escribir('CALCULADORA SIMPLE')
Escribir(num1, '+', num2, '=', r)
}
else
{
if (num == calculadora[1]) {
Escribir('RESTA')
var num1 = prompt('ESCRIBE UN NÚMERO: ')
var num2 = prompt('ESCRIBE OTRO NÚMERO: ')
var r = parseInt(num1) - parseInt(num2)
var Escribir = console.log
Escribir('CALCULADORA SIMPLE')
Escribir(num1, '-', num2, '=', r)
}
else
{
if (num == calculadora[2]) {
Escribir('MULTIPLICACIÓN')
var num1 = prompt('ESCRIBE UN NÚMERO: ')
var num2 = prompt('ESCRIBE OTRO NÚMERO: ')
var r = parseInt(num1) * parseInt(num2)
var Escribir = console.log
Escribir('CALCULADORA SIMPLE')
Escribir(num1, '*', num2, '=', r)
}
else
{
if (num == calculadora[3]) {
Escribir('DIVISIÓN')
var num1 = prompt('ESCRIBE UN NÚMERO: ')
var num2 = prompt('ESCRIBE OTRO NÚMERO: ')
var r = parseInt(num1) / parseInt(num2)
var Escribir = console.log
Escribir('CALCULADORA SIMPLE')
Escribir(num1, '/', num2, '=', r)
}
else
{
if (num != calculadora) {
Escribir('LA OPCIÓN QUE SELECCIONASTE NO EXISTE.')
}      
}
}            
}
}
}

Ejercicio15() {
const prompt = require('prompt-sync')();
var num = prompt('ESCRIBE UN NÚMERO: ')
var Escribir = console.log
var tabla = [parseInt(num) * parseInt(1), parseInt(num) * parseInt(2), parseInt(num) * parseInt(3), parseInt(num) * parseInt(4), parseInt(num) * parseInt(5), parseInt(num) * parseInt(6), parseInt(num) * parseInt(7), parseInt(num) * parseInt(8), parseInt(num) * parseInt(9), parseInt(num) * parseInt(10)]
Escribir('TABLA DE MULTIPLICAR')
Escribir(num, '* 1 =', tabla[0])
Escribir(num, '* 2 =', tabla[1])
Escribir(num, '* 3 =', tabla[2])
Escribir(num, '* 4 =', tabla[3])
Escribir(num, '* 5 =', tabla[4])
Escribir(num, '* 6 =', tabla[5])
Escribir(num, '* 7 =', tabla[6])
Escribir(num, '* 8 =', tabla[7])
Escribir(num, '* 9 =', tabla[8])
Escribir(num, '* 10 =', tabla[9])
}

Ejercicio16() {
const prompt = require('prompt-sync')();
var word1 = prompt('ESCRIBE UNA PALABRA: ')
var word2 = prompt('ESCRIBE OTRA PALABRA: ')
var finalword = word1 + word2
var Escribir = console.log
Escribir('COPIAR PALABRA')
Escribir(word1 + ' ' + word2)
}

Ejercicio17() {
const prompt = require('prompt-sync')();
var num1 = prompt('ESCRIBE EL PRIMER NÚMERO: ')
var num2 = prompt('ESCRIBE EL SEGUNDO NÚMERO: ')
var num3 = prompt('ESCRIBE EL TERCER NÚMERO: ')
var Escribir = console.log
Escribir('MAYOR DE TRES NÚMEROS')
if (num1 > num2 && num1 > num3) {
Escribir('EL PRIMER NÚMERO ES EL MAYOR.')
}
else
{
if (num2 > num1 && num2 > num3) {
Escribir('EL SEGUNDO NÚMERO ES EL MAYOR.')
}
else
{
if (num3 > num1 && num3 > num2) {
Escribir('EL TERCER NÚMERO ES EL MAYOR.')
}
else
{
Escribir('NINGÚN NÚMERO ES EL MAYOR.')            
}
}
}
}

Ejercicio18() {
const prompt = require('prompt-sync')();
var age = prompt('ESCRIBE TU EDAD: ')
var Escribir = console.log
Escribir('EDAD MÍNIMA PARA VOTAR')
if (age < 0) {
Escribir('TU EDAD NO ES CORRECTA.')
}
else
{
if (age >= 18) {
Escribir('USTED ES ELEGIBLE PARA VOTAR (18 AÑOS O MÁS)')
}
else
{
Escribir('USTED NO ES ELEGIBLE PARA VOTAR (17 AÑOS O MENOS)')
}
}
}

Ejercicio19() {
const prompt = require('prompt-sync')();
var height = prompt('ESCRIBE TU ALTURA: ')
var weight = prompt('ESCRIBE TU PESO: ')
var BMI = parseInt(weight) / parseInt(height^2)
var Escribir = console.log
Escribir('CALCULADORA DE BMI')
if (BMI < 18.5) {
Escribir('TU BMI ES:', BMI, '(BAJO PESO)')
}
else
{
if (BMI >= 18.5 && BMI <= 24.9) {
Escribir('TU BMI ES:', BMI, '(PESO SALUDABLE)')
}
else
{
if (BMI >= 25 && BMI <= 29.9) {
Escribir('TU BMI ES:', BMI, '(SOBREPESO)')
}
else
{
if (BMI >= 30) {
Escribir('TU BMI ES:', BMI, '(OBESIDAD)')
}      
}
}
}
}

Ejercicio20() {
const prompt = require('prompt-sync')();
var num = prompt('INGRESA UN NÚMERO: ')
var Escribir = console.log
Escribir('NÚMERO POSITIVO, NEGATIVO O CERO')
if (num == 0) {
Escribir(num, 'ES: CERO')
}
else
{
if (num > 0) {
Escribir(num, 'ES: POSITIVO')
}
else
{
if (num < 0) {
Escribir(num, 'ES: NEGATIVO')
}
}
}
}

Ejercicio21() {
const prompt = require('prompt-sync')();
var num = prompt('ESCRIBE UN AÑO: ')
var Escribir = console.log
Escribir('AÑO BISIESTO')
if ((num % 4 == 0) && (num % 100 != 0 || num % 400 == 0)) {
Escribir(num, 'ES: AÑO BISIESTO')
}
else
{
Escribir(num, 'ES: AÑO NO BISIESTO')
}
}

Ejercicio22() {
const prompt = require('prompt-sync')();
var tabla = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
var month = prompt('INGRESA TU MES DE NACIMIENTO: ')
var day = prompt('INGRESA TU DÍA DE NACIMIENTO: ')
var Escribir = console.log
Escribir('SIGNO ZODIACAL')
if (month == tabla[2] && (day >= 21 && day <= 31) || (month == tabla[3] && day <= 19)) {
Escribir('TU SIGNO ES: ARIES')
}
else
{
if (month == tabla[3] && (day >= 20 && day <= 30) || (month == tabla[4] && day <= 20)) {
Escribir('TU SIGNO ES: TAURO')
}
}
{
if (month == tabla[4] && (day >= 1 && day <= 31) || (month == tabla[5] && day <= 20)) {
Escribir('TU SIGNO ES: GÉMINIS')
}
}
{
if (month == tabla[5] && (day >= 21 && day <= 30) || (month == tabla[6] && day <= 22)) {
Escribir('TU SIGNO ES: CÁNCER')
}
}
{
if (month == tabla[6] && (day >= 23 && day <= 31) || (month == tabla[7] && day <= 22)) {
Escribir('TU SIGNO ES: LEO')
}
}
{
if (month == tabla[7] && (day >= 23 && day <= 31) || (month == tabla[8] && day <= 22)) {
Escribir('TU SIGNO ES: VIRGO')
}
}
{
if (month == tabla[8] && (day >= 23 && day <= 30) || (month == tabla[9] && day <= 22)) {
Escribir('TU SIGNO ES: LIBRA')
}
}
{
if (month == tabla[9] && (day >= 23 && day <= 31) || (month == tabla[10] && day <= 21)) {
Escribir('TU SIGNO ES: ESCORPIO')
}
}
{
if (month == tabla[10] && (day >= 22 && day <= 30) || (month == tabla[11] && day <= 21)) {
Escribir('TU SIGNO ES: SAGITARIO')
}
}
{
if (month == tabla[11] && (day >= 22 && day <= 31) || (month == tabla[0] && day <= 19)) {
Escribir('TU SIGNO ES: CAPRICORNIO')
}
}
{
if (month == tabla[0] && (day >= 20 && day <= 31) || (month == tabla[1] && day <= 18)) {
Escribir('TU SIGNO ES: ACUARIO')
}
}
{
if (month == tabla[1] && (day >= 19 && day <= 28) || (month == tabla[2] && day <= 20)) {
Escribir('TU SIGNO ES: PISCIS')
}
}
}

Ejercicio23() {
const prompt = require('prompt-sync')();
var num = prompt('INGRESA UN NÚMERO DE DÍA DEL MES: ')
var Escribir = console.log
Escribir('DÍA DEL MES CON RESPECTO A LA SEGUNDA QUINCENA')
if (num >= 1 && num <= 31) {
if (num >= 1 && num <= 15) {
Escribir('PERTENECE A: PRIMERA QUINCENA (1 - 15 DÍAS)')
}
else
{
if (num >= 15 && num <= 31) {
Escribir('PERTENECE A: SEGUNDA QUINCENA (16 - 31 DÍAS)')
}
}
}
else
{
Escribir('TU DÍA DEL MES NO ES CORRECTO.')
}
}

Ejercicio24() {
const prompt = require('prompt-sync')();
var num = parseInt(prompt('INGRESA UN NÚMERO [1 - 7]: '))
var Escribir = console.log
Escribir('DÍA DE LA SEMANA')
switch (num) {
case 1:
Escribir('DOMINGO')
break
case 2:
Escribir('LUNES')
break
case 3:
Escribir('MARTES')
break
case 4:
Escribir('MIÉRCOLES')
break
case 5:
Escribir('JUEVES')
break
case 6:
Escribir('VIERNES')
break
case 7:
Escribir('SÁBADO')
break
default:
Escribir('EL DÍA NO EXISTE.')
break
}
}

Ejercicio25() {
const prompt = require('prompt-sync')();
var text1 = prompt('INGRESA UNA FRASE: ')
var text2 = prompt('INGRESA OTRA FRASE: ')
var Escribir = console.log
Escribir('FRASES IGUALES')
if (text1 == text2) {
Escribir('LAS FRASES: SON IGUALES')
}
else
{
Escribir('LAS FRASES: NO SON IGUALES')
}
}

Ejercicio26() {
const prompt = require('prompt-sync')();
var price = prompt('INGRESA EL PRECIO DE TU ARTÍCULO: ')
var discount = prompt('INGRESA EL PORCENTAJE DE DESCUENTO (%): ')
var Escribir = console.log
Escribir('CALCULADORA DE PRECIO CON DESCUENTO')
var num1  = discount / 100
var num2 = price * num1
var num3 = price - num2
Escribir('$ PRECIO DEL ARTÍCULO:', price)
Escribir('% DESCUENTO:', num2, '(', discount, ')')
Escribir('$ TOTAL:', num3)
}

Ejercicio27() {
const prompt = require('prompt-sync')();
var bill = prompt('INGRESA EL TOTAL DE TU FACTURA: ')
var tax = prompt('INGRESA EL PORCENTAJE DE IMPUESTOS APLICADOS (+): ')
var Escribir = console.log
Escribir('CALCULADORA DE FACTURA CON IMPUESTOS')
var num1  = tax / 100
var num2 = bill * num1
var num3 = parseInt(bill) + parseInt(num2)
Escribir('$ TOTAL DE LA FACTURA:', bill)
Escribir('+ IMPUESTO AGREGADO:', num2, '(', tax, ')')
Escribir('$ TOTAL A PAGAR:', num3)
}

Ejercicio28() {
const prompt = require('prompt-sync')();
var salary = prompt('INGRESA TU SALARIO ACTUAL: ')
var discount = prompt('INGRESA EL PORCENTAJE DE AUMENTO QUE RECIBIRÁS (%): ')
var Escribir = console.log
Escribir('CALCULADORA DE SUELDO CON AUMENTO')
var num1  = discount / 100
var num2 = salary * num1
var num3 = parseInt(salary) + num2
Escribir('$ SALARIO ACTUAL:', salary)
Escribir('% PORCENTAJE DE AUMENTO:', num2, '(', discount, ')')
Escribir('$ NUEVO SALARIO:', num3)
}

Ejercicio29() {
const prompt = require('prompt-sync')();
var price = prompt('INGRESA EL PRECIO DE LOS ARTÍCULOS: ')
var amount = prompt('INGRESA LA CANTIDAD DE LOS ARTÍCULOS (+): ')
var Escribir = console.log
Escribir('CALCULADORA DE COMPRA CON MÚLTIPLES ARTÍCULOS')
var num1  = price * amount
var num2 = num1 * 0.10
if (num1 > 100 ) {
var num3 = parseInt(num1) - num2
Escribir('$ PRECIO DE LOS ARTÍCULOS:', price)
Escribir('X CANTIDAD:', amount)
Escribir('$ TOTAL:', num1)
Escribir('% DESCUENTO APLICADO:', num2, '( 10 )')
Escribir('$ TOTAL A PAGAR:', num3)
}
else
{
Escribir('$ PRECIO DE LOS ARTÍCULOS:', price)
Escribir('X CANTIDAD:', amount)
Escribir('$ TOTAL:', num1)
}
}

Ejercicio30() {
const prompt = require('prompt-sync')();
var salary = prompt('INGRESA TU SALARIO ANUAL: ')
var Escribir = console.log
Escribir('CALCULADORA DE IMPUESTOS SOBRE EL SALARIO')
var discount1 = salary * 0.05
var discount2 = salary * 0.10
var discount3 = salary * 0.15
var num1 = parseInt(salary) + discount1
var num2 = parseInt(salary) + discount2
var num3 = parseInt(salary) + discount3
if (salary <= 10000) {
Escribir('$ SALARIO ANUAL:', salary)
Escribir('% IMPUESTO SOBRE LA RENTA:', discount1, '( 5 )')
Escribir('$ TOTAL A PAGAR:', num1)
}
else
{
if (salary > 10000 && salary <= 20000) {
Escribir('$ SALARIO ANUAL:', salary)
Escribir('% IMPUESTO SOBRE LA RENTA:', discount2, '( 10 )')
Escribir('$ TOTAL A PAGAR:', num2)
}
else
{
if (salary >= 20000) {
Escribir('$ SALARIO ANUAL:', salary)
Escribir('% IMPUESTO SOBRE LA RENTA:', discount3, '( 15 )')
Escribir('$ TOTAL A PAGAR:', num3)
}
}
}
}

Ejercicio33() {
const prompt = require('prompt-sync')();
var years = prompt('ESCRIBE LOS AÑOS QUE HAS TRABAJADO EN NUESTRA EMPRESA: ')
var Escribir = console.log
Escribir('DESCUENTO POR ANTIGÜEDAD EN LA EMPRESA')
var salary = 450
var discount = salary * 0.05
var num = parseInt(salary) + discount
if (years > 5) {
Escribir('APLICASTE UN BONO,', discount, '$ ( 5 ) Y TU NUEVO SUELDO ES:', num, '$')
}
else
{
Escribir('NO APLICASTE PARA EL BONO Y TU SUELDO ES:', salary, '$')
}
}

Ejercicio34() {
const prompt = require('prompt-sync')();
var distance = prompt('INGRESA LA DISTANCIA DEL ENVÍO: ')
var Escribir = console.log
Escribir('CALCULADORA DE ENVÍO CON TARIFAS DIFERENTES')
if (distance < 50) {
Escribir('EL COSTO DE ENVÍO ES: 10 $')
}
else
{
if (distance >= 50) {
Escribir('EL COSTO DE ENVÍO ES: 20 $')
}
}
}

Ejercicio35() {
const prompt = require('prompt-sync')();
var purchases = prompt('INGRESA EL TOTAL DE TUS COMPRAS MENSUALES DURANTE UN AÑO: ')
var Escribir = console.log
Escribir('CALCULADORA DE DESCUENTO POR LEALTAD DEL CLIENTE')
if (purchases > 500) {
Escribir('APLICÓ UN DESCUENTO DE ( 10 ) PARA LA PRÓXIMA COMPRA')
}
else
{
Escribir('NO APLICÓ DESCUENTOS.')
}
}

Ejercicio36() {
const prompt = require('prompt-sync')();
var amount = prompt('INGRESA LA CANTIDAD DE UNIDADES DEL PRODUCTO: ')
var price = prompt('INGRESA EL VALOR UNITARIO: ')
var Escribir = console.log
Escribir('CALCULADORA DE DESCUENTO POR VOLUMEN DE COMPRA')
var num = price * amount
if (amount >= 10 && amount <= 50) {
var num1 = num * 0.05
var num2 = num - num1
Escribir('$ TOTAL:', num)
Escribir('% DESCUENTO APLICADO:', num1, '( 5 )')
Escribir('$ TOTAL A PAGAR:', num2)
}
else
{
if (amount >= 51 && amount <= 100) {
var num1 = num * 0.10
var num2 = num - num1
Escribir('$ TOTAL:', num)
Escribir('% DESCUENTO APLICADO:', num1, '( 10 )')
Escribir('$ TOTAL A PAGAR:', num2)
}
else
{
if (amount > 100) {
var num1 = num * 0.15
var num2 = num - num1
Escribir('$ TOTAL:', num)
Escribir('% DESCUENTO APLICADO:', num1, '( 15 )')
Escribir('$ TOTAL A PAGAR:', num2)
}
else
{
Escribir('TOTAL A PAGAR:', num)
}
}
}
}

Ejercicio40() {
const prompt = require('prompt-sync')();
var price = 4
var hours = prompt('ESCRIBE CUANTAS HORAS DE SERVICIO NECESITAS: ')
var Escribir = console.log
Escribir('CALCULADORA DE COSTO DE SERVICIO')
var num = price * hours
if (hours > 10) {
var num1 = num * 0.20
var num2 = num - num1
Escribir('$ COSTO:', num)
Escribir('% DESCUENTO:', num1, '( 20 )')
Escribir('$ COSTO TOTAL:', num2)
}
else
{
Escribir('$ COSTO TOTAL:', num)
}
}

Ejercicio41() {
var i = 0
var num = 0
var Escribir = console.log
Escribir('SUMA DE NÚMEROS PARES')
for (i = 1; i <= 50; i ++) {
if (i % 2 == 0) {
num = num + i
}
}
Escribir(num)
}

Ejercicio42() {
const prompt = require('prompt-sync')();
var i = 0
var num = prompt('INGRESA UN NÚMERO: ')
var Escribir = console.log
Escribir('TABLA DE MULTIPLICAR')
for (i = 1; i <= 12; i ++) {
var tabla = num * i
Escribir(num, 'x', i, '=', tabla)
}
}

Ejercicio43() {
const prompt = require('prompt-sync')();
var i = 0
var vowels = 0
var word = prompt('INGRESA UNA PALABRA: ')
var Escribir = console.log
Escribir('CONTADOR DE VOCALES')
while (i < word.length) {
var content = word.charAt(i).toLowerCase()
if (content === 'a' || content === 'e' || content === 'i' || content === 'o' || content === 'u') {
vowels = vowels + 1
}
i = i + 1
}
Escribir(vowels)
}

Ejercicio44() {
const prompt = require('prompt-sync')();
var i = 0
var text = prompt('ESCRIBE UNA PALABRA: ')
var Escribir = console.log
Escribir('CONTADOR DE DÍGITOS')
for (i = 0; i < text.length; i ++) {
var words = i + 1
}
Escribir(words)
}

Ejercicio45() {
const prompt = require('prompt-sync')();
var tries = 0
var random = Math.floor(Math.random() * 10) + 1
var Escribir = console.log
var check = false
while (!check) {
var num = parseInt(prompt('ADIVINA EL NÚMERO [1 - 10]: '))
if (isNaN(num)) {
Escribir('SOLO PUEDES INGRESAR NÚMEROS.')
break
}
else
{
tries = tries + 1
if (num === random) {
check = true
Escribir('ADIVINASTE EL NÚMERO')
}
else
if (num < random) {
Escribir('INTENTA OTRA VEZ.')
}
else
{
Escribir('INTENTA OTRA VEZ.')
}
}
}
}

Ejercicio46() {
const prompt = require('prompt-sync')();
var i = 0
var word = prompt('INGRESA UNA PALABRA: ')
var Escribir = console.log
var alphabet = 0
for (i = 0; i < word.length; i ++) {
var check = word.charAt(i).toLowerCase()
if (check >= 'a' && check <= 'z') {
alphabet = alphabet + 1
}
}
Escribir('CONTADOR DE ALFABETO')
Escribir(alphabet)
}

Ejercicio47() {
var i = 0
var num = 0
var Escribir = console.log
Escribir('SUMA DE NÚMEROS IMPARES')
for (i = 1; i <= 100; i ++) {
if (i % 2 == 1) {
num = num + i
}
}
Escribir(num)
}

Ejercicio48() {
const prompt = require('prompt-sync')();
var word = prompt('ESCRIBE UNA PALABRA: ')
var Escribir = console.log
Escribir('CONTADOR DE CARACTERES')
Escribir(word, 'TIENE:', word.length, 'CARACTERES')
}

Ejercicio49() {
const prompt = require('prompt-sync')();
var x = 0
var num = 0
var Escribir = console.log
Escribir('SUMA DE NÚMEROS')
while (num >= 0) {
num = parseInt(prompt('INGRESA UN NÚMERO: '))
if (num >= 0) {
x = x + num
}
else
{
Escribir('NÚMERO NEGATIVO DETECTADO.')
break
}
}
Escribir('LA SUMA TOTAL ES:', x)
}

Ejercicio50() {
const prompt = require('prompt-sync')();
var num = parseInt(prompt('INGRESA UN NÚMERO ENTERO POSITVO: '))
var Escribir = console.log
Escribir('CUENTA REGRESIVA')
Escribir(num)
if (Number.isInteger(num) && num > 0) {
while (num > 1) {
num = num - 1
Escribir(num)
}
}
else
{
Escribir('EL NÚMERO NO ES UN ENTERO POSITIVO.')
}
}

Ejercicio51() {
var i = 0
var table = [3, 3, 3]
var num = 0
var Escribir = console.log
Escribir('SUMA DE ELEMENTOS')
for (i = 0; i < table.length; i ++) {
num = num + table[i]
}
Escribir(num)
}

Ejercicio52() {
var i = 0
var table = [7.5, 8.5, 9.5, 9.5, 8.5]
var num = 0
var Escribir = console.log
Escribir('PROMEDIO DE CALIFICACIONES')
for (i = 0; i < table.length; i ++) {
num = num + table[i] / 5
}
Escribir(num)
}

Ejercicio53() {
var i = 0
var tabla = [7, 9, 4, 2, 5]
var max = tabla[0]
var min = tabla[0]
var Escribir = console.log
Escribir('MAYOR Y MENOR VALOR')
for (i = 1; i < tabla.length; i ++) {
if (tabla[i] > max) {
max = tabla[i]
}
else
{
if (tabla[i] < min) {
min = tabla[i]
}
}
}
Escribir('MAYOR ES:', max)
Escribir('MENOR ES:', min)
}

Ejercicio54() {
const prompt = require('prompt-sync')();
var i = 0
var tabla = [1, 3, 5, 7, 9]
var num = parseInt(prompt('INGRESA UN NÚMERO: '))
var Escribir = console.log
Escribir('BUSCAR UN ELEMENTO')
var check = false
for (i = 0; i < tabla.length; i ++) {
if (tabla[i] === num) {
check = true
break
}
}
if (check) {
Escribir('EL NÚMERO INGRESADO SE ENCUENTRA EN EL ARREGLO')
}
else
{
Escribir('EL NÚMERO INGRESADO NO SE ENCUENTRA EN EL ARREGLO')
}
}

Ejercicio55() {
var i = 0
var table = [10, 3, 4]
var num = 0
var Escribir = console.log
Escribir('CONTAR ELEMENTOS PARES')
for (i = 0; i < table.length; i ++) {
if (i % 2 == 0) {
num = num + table[i]
}
}
Escribir(num)
}

Ejercicio56() {
var i = 0
var tabla = [ 5, 6, 7, 8, 9, 10 ]
var Escribir = console.log
Escribir('INVERSIÓN DE UN ARREGLO')
for (i = 0; i < Math.floor(tabla.length / 2); i ++) {
var r = tabla[i]
tabla[i] = tabla[tabla.length - 1 - i]
tabla[tabla.length - 1 - i] = r
}
Escribir(tabla)
}

Ejercicio57() {
const prompt = require('prompt-sync')();
var i = 0
var tabla = [20, 20, 20, 23, 7, 10, 3, 2, 5, 8]
var num = parseInt(prompt('INGRESA UN NÚMERO: '))
var Escribir = console.log
Escribir('BUSCAR EL ÍNDICE')
var indices = []
for (i = 0; i < tabla.length; i ++) {
if (tabla[i] === num) {
indices.push(i)
}
}
if (indices.length > 0) {
Escribir(num, 'SE ENCUENTRA EN EL ARREGLO Y ESTÁ EN LOS ÍNDICES:', indices.join(', '))
}
else
{
Escribir(num, 'NO SE ENCUENTRA EN EL ARREGLO.')
}
}

Ejercicio58() {
var Escribir = console.log
var greet = (title = "'¡Hola mundo!'") => {
Escribir(title)
}
greet()
}

Ejercicio59() {
var num = 0
var Escribir = console.log
var addition = (num1, num2) => {
num = num1 + num2
}
addition(3, 3)
Escribir('3 + 3 =', num)
}

Ejercicio60() {
var Escribir = console.log
function multiplication(num1, num2) {
return num1 * num2
}
var r = multiplication(3, 3)
Escribir('3 * 3 =', r)
}

Ejercicio61() {
var Escribir = console.log
function pair(num) {
if (num % 2 == 0) {
Escribir(num, 'ES: PAR')
}
else
{
Escribir(num, 'ES: IMPAR')
}
}
pair(11)
}

Ejercicio62() {
var Escribir = console.log
function triangle(num1, num2) {
return num1 * num2 / 2
}
var r = triangle(8, 4)
Escribir('EL ÁREA ES:',r)
}

Ejercicio63() {
var Escribir = console.log
function name() {
Escribir('Te quiero Katherine')
}
name()
}

Ejercicio64() {
var Escribir = console.log
function grade(celsius) {
return (celsius * 9 / 5) + 32
}
var r = grade(12)
Escribir('(12 * 9 / 5) + 32 =', r)
}

Ejercicio65() {
var r =  ''
var Escribir = console.log
var text = (word) => {
r = word.length
}
text('La vida es una colección de momentos.')
Escribir('TIENE:', r, 'CARACTERES')
}

Ejercicio66() {
var i = 0
var Escribir = console.log
function print(nums) {
for (i = 1; i <= nums; i ++) {
Escribir(i)
}
}
print(10)
}

Ejercicio67() {
var i = 0
var num = 0
var Escribir = console.log
function list(nums) {
for (i = 0; i < nums.length; i ++) {
num = num + nums[i]
}
Escribir(num)
return
}
list([2,2,2])
}
}

var exe = new Secuenciales    
exe.Ejercicio67()