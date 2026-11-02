// app.js - Lógica de DevQuiz (JavaScript puro, sin librerías)
// Comentarios en español.

// Estado del juego
let indiceActual = 0;      // Índice de la pregunta que se muestra
let puntuacion = 0;        // Aciertos del usuario
let respondido = false;    // Evita responder varias veces la misma pregunta

// Referencias al DOM
const contenedorQuiz = document.getElementById('quiz');
const pantallaFinal = document.getElementById('pantalla-final');
const rellenoProgreso = document.getElementById('relleno-progreso');
const textoProgreso = document.getElementById('texto-progreso');
const numeroPregunta = document.getElementById('numero-pregunta');
const enunciado = document.getElementById('enunciado');
const listaOpciones = document.getElementById('opciones');
const explicacion = document.getElementById('explicacion');
const textoExplicacion = document.getElementById('texto-explicacion');
const botonSiguiente = document.getElementById('boton-siguiente');
const botonReiniciar = document.getElementById('boton-reiniciar');
const puntajeFinal = document.getElementById('puntaje');
const comentarioFinal = document.getElementById('comentario');

// Inicializa el quiz al cargar la página
function iniciarQuiz() {
  indiceActual = 0;
  puntuacion = 0;
  respondido = false;
  pantallaFinal.style.display = 'none';
  contenedorQuiz.style.display = 'block';
  botonSiguiente.textContent = 'Siguiente pregunta →';
  comentarioFinal.textContent = '';
  mostrarPregunta(indiceActual);
}

// Muestra una pregunta según su índice
function mostrarPregunta(indice) {
  const pregunta = preguntas[indice];
  const total = preguntas.length;

  // Actualiza barra y texto de progreso
  const porcentaje = ((indice + 1) / total) * 100;
  rellenoProgreso.style.width = porcentaje + '%';
  textoProgreso.textContent = `Pregunta ${indice + 1} de ${total}`;

  // Limpia contenidos anteriores
  listaOpciones.innerHTML = '';
  explicacion.style.display = 'none';
  botonSiguiente.style.display = 'none';
  botonSiguiente.textContent = 'Siguiente pregunta →';
  respondido = false;

  // Datos de la pregunta
  numeroPregunta.textContent = `Pregunta ${indice + 1}`;
  enunciado.textContent = pregunta.enunciado;

  // Crea los botones de opción (inputs tipo radio con etiquetas)
  pregunta.opciones.forEach((opcion, i) => {
    const li = document.createElement('li');
    li.className = 'opcion';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'opcion';
    input.value = i;
    input.id = `opcion-${i}`;

    const letra = document.createElement('span');
    letra.className = 'letra';
    letra.textContent = String.fromCharCode(65 + i); // A, B, C, D

    const texto = document.createElement('span');
    texto.className = 'texto-opcion';
    texto.textContent = opcion;

    const etiqueta = document.createElement('label');
    etiqueta.htmlFor = `opcion-${i}`;
    etiqueta.appendChild(letra);
    etiqueta.appendChild(texto);

    li.appendChild(input);
    li.appendChild(etiqueta);

    // Al hacer clic en cualquier parte de la opción, selecciona el radio y responde
    li.addEventListener('click', () => {
      if (!respondido) {
        input.checked = true;
        responder(i);
      }
    });

    listaOpciones.appendChild(li);
  });

}

// Procesa la respuesta del usuario
function responder(opcionElegida) {
  respondido = true;
  const pregunta = preguntas[indiceActual];
  const correcta = pregunta.correcta;
  const opciones = document.querySelectorAll('.opcion');

  // Recorre todas las opciones para marcar estados
  opciones.forEach((li, i) => {
    li.classList.add('desactivada'); // Bloquea más clics

    if (i === correcta) {
      li.classList.add('correcta'); // Verde: la respuesta correcta
    }
    if (i === opcionElegida && i !== correcta) {
      li.classList.add('incorrecta'); // Rojo: la que el usuario falló
    }
  });

  // Actualiza puntuación si fue correcta
  if (opcionElegida === correcta) {
    puntuacion++;
  }

  // Muestra explicación
  textoExplicacion.textContent = pregunta.explicacion;
  explicacion.style.display = 'block';

  // Muestra el botón para continuar
  botonSiguiente.style.display = 'block';

  // Si era la última pregunta, actualiza progreso al 100%
  if (indiceActual === preguntas.length - 1) {
    rellenoProgreso.style.width = '100%';
    textoProgreso.textContent = '¡Completado!';
    botonSiguiente.textContent = 'Ver puntuación';
  }
}

// Muestra la pantalla final con la puntuación
function mostrarPantallaFinal() {
  contenedorQuiz.style.display = 'none';
  pantallaFinal.style.display = 'block';

  puntajeFinal.textContent = `${puntuacion} / ${preguntas.length}`;

  const porcentaje = (puntuacion / preguntas.length) * 100;
  if (porcentaje >= 80) {
    comentarioFinal.textContent = '¡Excelente! Dominas los conceptos básicos.';
  } else if (porcentaje >= 50) {
    comentarioFinal.textContent = 'Bien. Sigue practicando para mejorar.';
  } else {
    comentarioFinal.textContent = '¡Ánimo! Repasa la teoría y vuelve a intentarlo.';
  }
}

// Botón siguiente: configurado una sola vez para evitar que se acumulen listeners
botonSiguiente.addEventListener('click', () => {
  if (indiceActual < preguntas.length - 1) {
    indiceActual++;
    mostrarPregunta(indiceActual);
  } else {
    mostrarPantallaFinal();
  }
});

// Botón reiniciar: configurado una sola vez
botonReiniciar.addEventListener('click', () => {
  iniciarQuiz();
});

// Arranca el quiz cuando se carga el documento
document.addEventListener('DOMContentLoaded', iniciarQuiz);
