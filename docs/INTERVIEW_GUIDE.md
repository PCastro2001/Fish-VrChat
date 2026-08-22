# Guion breve para entrevistas — Fish VR

## Versión de 30 segundos

> Fish VR es una aplicación web estática que desarrollé para resolver un problema concreto de una comunidad de VRChat: elegir dónde pescar y qué equipamiento conviene usar entre muchas combinaciones posibles. Organicé los datos del juego y construí en JavaScript vanilla un motor de puntuación que genera recomendaciones, rankings y comparaciones según el objetivo y presupuesto del jugador. También incorporé búsqueda, filtros, guía de misiones, diseño responsive y traducción español-inglés.

## Versión de 90 segundos

> Detecté que los jugadores de Fish! tenían que cruzar manualmente información sobre cañas, sedales, flotadores, peces, zonas, clima, horario y misiones. Convertí ese problema en Fish VR, una herramienta web que centraliza los datos y ayuda a tomar decisiones.
>
> La construí con HTML, CSS y JavaScript vanilla. Modelé el equipamiento y los peces mediante estructuras de datos, implementé reglas para calcular estadísticas y diseñé un sistema de puntuación que cambia según el objetivo: maximizar dinero, velocidad, tamaño, rareza, facilidad o equilibrio. Sobre esa lógica desarrollé el asesor de zonas, el ranking, el comparador de hasta cuatro configuraciones y el recomendador de mejoras por presupuesto.
>
> Elegí una aplicación estática para que pudiera abrirse sin instalación ni backend. El principal aprendizaje fue transformar reglas informales de un juego en lógica consistente y presentar resultados complejos de forma comprensible. Si continuara el proyecto, mi prioridad sería modularizar el archivo, agregar pruebas automatizadas y publicar una demo continua.

## Preguntas que podrían hacerte

### ¿Qué parte demuestra mejor tus habilidades?

El motor que combina estadísticas del equipamiento, restricciones y objetivos. No es solo una página informativa: recibe entradas, aplica reglas de negocio y produce recomendaciones comparables.

### ¿Por qué usaste JavaScript vanilla?

El proyecto no necesitaba una infraestructura compleja. JavaScript vanilla permitió crear una aplicación rápida y portable, y demostrar manejo del DOM, eventos, arreglos, objetos, filtrado y renderizado dinámico sin depender de un framework.

### ¿Cuál fue el desafío principal?

Normalizar datos del juego y convertir criterios distintos —dinero, rapidez, rareza, tamaño o dificultad— en puntuaciones coherentes. También fue importante mantener comprensible una interfaz con muchas opciones.

### ¿Qué mejorarías técnicamente?

Separaría `index.html` en módulos de datos, lógica y presentación; documentaría la procedencia y versión de cada conjunto de datos; agregaría pruebas unitarias al sistema de puntuación y automatizaría el despliegue.

### ¿Qué aprendiste?

Aprendí a partir de una necesidad de usuarios, modelar un dominio, traducir reglas a código, diseñar filtros y comparadores, y ajustar la interfaz para que los resultados fueran útiles en vez de limitarme a mostrar datos.

## Frase para el CV o LinkedIn

**Fish VR — Fishing Advisor:** aplicación web bilingüe desarrollada con HTML, CSS y JavaScript vanilla que modela datos de un juego de VRChat y genera recomendaciones, rankings y comparaciones de equipamiento según objetivos, condiciones y presupuesto.

## Puntos que conviene demostrar en vivo

1. Cambiar el idioma entre español e inglés.
2. Configurar equipo, clima y horario en el asesor.
3. Explicar cómo cambia una recomendación al modificar el objetivo o presupuesto.
4. Buscar y filtrar peces por rareza, isla y tipo de agua.
5. Comparar dos configuraciones y justificar el resultado.

No presentes el proyecto como una aplicación oficial ni afirmes que los cálculos provienen de una API. Explica con honestidad que los datos están modelados dentro del cliente y que la versión actual es un prototipo funcional.

