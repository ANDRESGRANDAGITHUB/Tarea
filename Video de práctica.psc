// Inicio de la función.
Funcion Ejercicio1
// Definimos la variable color como caracter.
Definir color Como Caracter
// Asignamos un valor a la variable color.
color = "blanco"
// Mostramos el resultado en pantalla junto con un mensaje.
Escribir "Respuesta: ", color
// Fin de la función.
FinFuncion


// Las demás funciones siguen una estructura similar, pero con diferentes cálculos y variables.

Funcion Ejercicio2
Definir edad Como Entero
edad = 0
Escribir "Ingresa tu edad:"
Leer edad
Escribir "Tienes ", edad, " años"
FinFuncion

Funcion Ejercicio3
Definir num1, num2, resultado Como Entero
num1 = 0; num2 = 0; resultado = 0
Escribir "Ingresa dos números:"
Leer num1
Leer num2
resultado = num1 + num2
Escribir "Respuesta: ", resultado
FinFuncion

Funcion Ejercicio4
Definir edad Como Entero
edad = 19
Si edad > 18 Entonces
Escribir "Eres mayor de edad"
SiNo
Escribir "No eres mayor de edad"
FinSi
FinFuncion

Funcion Ejercicio5
Definir sed, dinero Como Caracter
sed = "si"
dinero = "si"
Si sed = "si" O dinero = "si" Entonces
Escribir "Compra una botella de agua"
SiNo
Si sed = "no" o dinero = "si" Entonces
Escribir "Compra un chocolate"
SiNo
Escribir "No tienes dinero, ve para la casa..."
FinSi
FinSi
FinFuncion

Funcion Ejercicio6
Definir numAzar, numaj, intentos Como Entero
numAzar = azar(10); numaj = 0; intentos = 3
Mientras intentos > 0 Hacer
Escribir "Adivina el numero, ingresa un numero por favor"
Leer numaj
Si numaj = numAzar Entonces
Escribir "Acertaste, eres un ganador, el número es ", numAzar
intentos = -1
SiNo
intentos = intentos - 1
Escribir "Mal ahi, no acertaste, te quedan ", intentos, " intentos"
FinSi
FinMientras
Si intentos = 0 Entonces
Escribir "No te quedan mas intentos, perdiste!!!"
SiNo
Escribir "El mejor de tu casa"
FinSi
FinFuncion

Funcion Ejercicio7
Definir combo Como Entero
combo = 0
Escribir "Selecciona una marca de teléfono a comprar:"
Escribir "1 -> Samsung"
Escribir "2 -> LG"
Escribir "3 -> Motorola"
Leer combo
Segun combo Hacer
1:
Escribir "Gracias por comprar tu teléfono Samsung"
2:
Escribir "Gracias por comprar tu teléfono LG"
3:
Escribir "Gracias por comprar tu teléfono Motorola"
De Otro Modo:
Escribir "No se encuentran disponibles otras marcas de teléfono"
Fin Segun
FinFuncion

Funcion Ejercicio8
Definir num Como Entero
num = azar(10)
Definir respuesta Como Caracter
respuesta = ""
Repetir
Escribir "Tu número asignado es: ", num
Escribir "¿Estás satisfecho con el número que obtuviste?"
Escribir "Indica con Y si lo estás o N si no lo estás"
Leer respuesta
Hasta Que respuesta = "N"
FinFuncion

Funcion Ejercicio9
Dimension personas(3)
personas(1) = "Pepito"
personas(2) = "Juanito"
personas(3) = "Panchito"
Escribir "Respuesta: "
Para i = 1 Hasta 3 Con Paso 1 Hacer
Escribir personas(i)
FinPara
FinFuncion

Funcion sumar(num1, num2)
Escribir "Respuesta: ", num1 + num2
FinFuncion
Funcion Ejercicio10
Escribir "Ingresa dos números:"
Leer num1
Leer num2
sumar(num1, num2)
FinFuncion


Algoritmo Video_de_práctica
Definir opciones Como Real
opciones = 0
Escribir "Elige el ejercicio que quieras ejecutar:"
Leer opciones
Segun opciones Hacer
1:
Ejercicio1()
2:
Ejercicio2()
3:
Ejercicio3()
4:
Ejercicio4()
5:
Ejercicio5()
6:
Ejercicio6()
7:
Ejercicio7()
8:
Ejercicio8()
9:
Ejercicio9()
10:
Ejercicio10()
De Otro Modo:
Escribir "No se encontró ese ejercicio"
FinSegun
FinAlgoritmo
