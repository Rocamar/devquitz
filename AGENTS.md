# AGENTS.md - DevQuiz

## Descripción del proyecto

**DevQuiz** es un quiz interactivo de JavaScript diseñado para principiantes en programación. Es una aplicación web de una sola página (HTML, CSS y JavaScript puro, sin librerías ni frameworks) que presenta 10 preguntas de opción múltiple sobre conceptos básicos de JavaScript.

El usuario responde una pregunta a la vez, recibe retroalimentación inmediata (correcta/incorrecta con explicación), y al final ve su puntuación con un comentario según su desempeño.

## Estructura de archivos

| Archivo | Propósito |
|---------|-----------|
| `index.html` | Estructura de la página: cabecera, barra de progreso, tarjeta de pregunta, opciones, pantalla final. |
| `styles.css` | Estilos visuales del quiz (colores, bordes, tipografía, animaciones). |
| `questions.js` | Array `preguntas` con las 10 preguntas, opciones, índice correcta y explicaciones. |
| `app.js` | Lógica de la aplicación: mostrar preguntas, comprobar respuestas, avanzar, pantalla final, reinicio. |

## Cómo funciona la lógica (app.js)

1. **Estado del juego**: `indiceActual` (pregunta actual), `puntuacion` (aciertos), `respondido` (bloqueo para evitar múltiples clics en la misma pregunta).
2. **Mostrar pregunta** (`mostrarPregunta`): pinta la pregunta según `indiceActual`, actualiza la barra de progreso y genera los botones de opción dinámicamente.
3. **Comprobar respuesta** (`responder`):
   - Bloquea con `respondido = true` para evitar sumar dos veces por la misma pregunta.
   - Compara `opcionElegida === pregunta.correcta`.
   - Si es correcto, incrementa `puntuacion`.
   - Pinta la opción correcta de verde y la incorrecta (si corresponde) de rojo.
   - Muestra la explicación y habilita el botón "Siguiente".
4. **Siguiente pregunta**: al pulsar "Siguiente", si quedan preguntas, incrementa `indiceActual` y vuelve a `mostrarPregunta`. Si no, muestra la pantalla final.
5. **Pantalla final**: muestra puntuación (`X / 10`) y un comentario según el porcentaje (>=80% excelente, >=50% bien, menos ánimo).

## Reglas para trabajar en este proyecto

1. **JavaScript puro**: No usar librerías externas, frameworks ni build tools. Solo HTML, CSS y JS vanilla.
2. **Comentarios en español**: Mantener los comentarios del código en español, explicando paso a paso como si el lector llevara un mes programando.
3. **No romper el flujo de respuesta**: La variable `respondido` es el cerrojo que evita doble puntuación. No eliminar ni saltar esta validación.
4. **Un listener por botón**: Los event listeners de "Siguiente" y "Reiniciar" se configuran una sola vez (fuera de funciones que se llamen repetidamente) para evitar acumulación de listeners.
5. **Estilo actual**: El proyecto usa el estilo original (antes del modo retro). Si se quiere volver al estilo retro, consultar el commit `7f43a2b` en el historial.
6. **Datos de preguntas en `questions.js`**: Para añadir, editar o eliminar preguntas, modificar solo el array `preguntas` manteniendo el formato: `{ enunciado, opciones: [...], correcta: indice, explicacion: "..." }`.
7. **CSS variables**: Usar las variables definidas en `:root` para colores y mantener consistencia visual.

## Cómo ejecutar localmente

No se necesita servidor. Abrir `index.html` directamente en el navegador:

```bash
# Opción 1: doble clic en index.html
# Opción 2: con Python
python -m http.server 8000
# Luego abrir http://localhost:8000
```

## Flujo de Git

- Rama principal: `main`
- Repositorio remoto: `origin` → `https://github.com/Rocamar/devquitz.git`
- Antes de hacer push, asegurarse de que el working tree esté limpio (`git status`).
- Commits con mensajes descriptivos en español.

## Historial relevante

- `f3b7a44` — DevQuiz: primera versión
- `7f43a2b` — Estilo retro y fuente pixelada aplicada (revertido)
- `a7544e4` — Revert "Estilo retro y fuente pixelada aplicada" (estado actual)
