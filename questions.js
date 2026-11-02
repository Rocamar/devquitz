// questions.js
// Define las 10 preguntas del quiz.
// Cada pregunta tiene:
// - enunciado: texto de la pregunta
// - opciones: array con 4 respuestas posibles
// - correcta: índice (0-3) de la opción correcta
// - explicacion: texto corto que se muestra tras responder

const preguntas = [
  {
    enunciado: "¿Cómo se declara una variable de bloque en JavaScript moderna?",
    opciones: ["var miVar;", "let miVar;", "constante miVar;", "variable miVar;"],
    correcta: 1,
    explicacion: "let declara una variables con alcance de bloque ({}). var tiene alcance de función y puede causar comportamientos inesperados."
  },
  {
    enunciado: "¿Qué imprime en consola: typeof null?",
    opciones: ["'null'", "'undefined'", "'object'", "'number'"],
    correcta: 2,
    explicacion: "Es un error histórico del lenguaje: typeof null devuelve 'object'. Para comprobar null usa valor === null."
  },
  {
    enunciado: "¿Qué operador compara valor Y tipo en JavaScript?",
    opciones: ["==", "=", "===", "!="],
    correcta: 2,
    explicacion: "=== es estricto: compara que el valor y el tipo sean iguales. == hace conversión de tipos antes de comparar."
  },
  {
    enunciado: "¿Cómo se escribe un comentario de una sola línea en JavaScript?",
    opciones: ["<!-- comentario -->", "// comentario", "/* comentario", "# comentario"],
    correcta: 1,
    explicacion: "// comenta el resto de la línea. /* ... */ se usa para comentarios de varias líneas."
  },
  {
    enunciado: "¿Qué método añade un elemento al final de un array?",
    opciones: ["pop()", "shift()", "push()", "unshift()"],
    correcta: 2,
    explicacion: "push() agrega uno o más elementos al final del array y devuelve su nueva longitud."
  },
  {
    enunciado: "¿Qué resultado da: 2 + '2'?",
    opciones: ["4", "'22'", "NaN", "Error"],
    correcta: 1,
    explicacion: "JavaScript concatena el número 2 con el texto '2', obteniendo la cadena '22'."
  },
  {
    enunciado: "¿Cómo se declara una función nombrada en JavaScript?",
    opciones: ["funcion miFuncion() {}", "function miFuncion() {}", "def miFuncion() {}", "=> miFuncion() {}"],
    correcta: 1,
    explicacion: "La palabra reservada function se usa para declarar funciones nombradas."
  },
  {
    enunciado: "¿Qué valor tiene una variable declarada pero no asignada?",
    opciones: ["null", "0", "undefined", "false"],
    correcta: 2,
    explicacion: "Si declaras let x; sin asignar, su valor es undefined (no definido)."
  },
  {
    enunciado: "¿Qué bucle se ejecuta al menos una vez aunque la condición sea falsa?",
    opciones: ["for", "while", "do...while", "forEach"],
    correcta: 2,
    explicacion: "do...while ejecuta el cuerpo primero y evalúa la condición al final, por lo menos corre una vez."
  },
  {
    enunciado: "¿Cómo se selecciona un elemento HTML por su id en JavaScript?",
    opciones: ["querySelector('.id')", "getElementsByClassName('id')", "getElementById('id')", "queryId('id')"],
    correcta: 2,
    explicacion: "document.getElementById('id') devuelve el elemento con ese identificador único."
  }
];
