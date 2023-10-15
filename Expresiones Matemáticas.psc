// Inicio de la función.
Funcion Ejercicio1
// Definimos las variables a, b y _y como enteros.
Definir a, b, _y Como Entero
// Asignamos valores a las variables a y b.
// Calculamos el valor de _y utilizando la fórmula asignada para obtener su resultado.
a = 3; b = 7; _y = 2 * a + b - a MOD 3
// Mostramos el resultado en pantalla junto con un mensaje.
Escribir "La respuesta del ejercicio es ", _y
// Fin de la función.
FinFuncion


// Las demás funciones siguen una estructura similar, pero con diferentes cálculos y variables.

Funcion Ejercicio2
Definir a, b, z Como Entero
a = 10; b = 4; z = a * b + 3 MOD a + b
Escribir "La respuesta del ejercicio es ", z
FinFuncion

Funcion Ejercicio3
Definir a, b, w Como Entero
a = 6; b = 2; w = a - b + 2 * a MOD b
Escribir "La respuesta del ejercicio es ", W
FinFuncion

Funcion Ejercicio4
Definir a, b, v Como Entero
a = 8; b = 5; v = 2 * b + trunc(a/2) + 4 * b MOD a
Escribir "La respuesta del ejercicio es ", v
FinFuncion

Funcion Ejercicio5
Definir a, b, u Como Entero
a = 12; b = 9; u = b - a + 3 * a MOD b
Escribir "La respuesta del ejercicio es ", u
FinFuncion

Funcion Ejercicio6
Definir resultado Como Logico
resultado = (5 + 3 * 2) + 9 > 3 * 5 * 14 MOD 3
Escribir "La respuesta del ejercicio es ", resultado
FinFuncion

Funcion Ejercicio7
Definir resultado Como Entero
resultado = 2 * (4 - 10 + 8) / 2 * 36 * (1/2)
Escribir "La respuesta del ejercicio es ", resultado
FinFuncion

Funcion Ejercicio8
Definir resultado Como Real
resultado = 260 / 12 + 54 MOD 3 - 85 MOD 7
Escribir "La respuesta del ejercicio es ", resultado
FinFuncion

Funcion Ejercicio9
Definir resultado Como Logico
resultado = (48 < 2 * 2) O (2 * 7 < 12)
Escribir "La respuesta del ejercicio es ", resultado
FinFuncion

Funcion Ejercicio10
Definir resultado Como Logico
resultado = ((8 > 2) O (932 < 23)) Y 4 = 2
Escribir "La respuesta del ejercicio es ", resultado
FinFuncion


Algoritmo Expresiones_Matemácitcas
Definir opciones Como Real
opciones = 0
Escribir "Selecciona el # de ejercicio que deseas ejecutar:"
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
Escribir "No se encontró el ejercicio"
FinSegun
FinAlgoritmo
