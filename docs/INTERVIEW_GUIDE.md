# Guion breve para entrevistas — Fish VR

## Versión de 30 segundos

> Fish VR nació de un problema concreto: los jugadores debían comparar manualmente muchas variables para decidir dónde pescar y qué equipo comprar. Modelé esos datos y construí con JavaScript vanilla una aplicación que calcula estadísticas y genera recomendaciones, rankings y comparaciones según el objetivo y presupuesto del usuario. El proyecto demuestra cómo traduzco reglas de un dominio en lógica de negocio y una interfaz web útil.

## Versión de 90 segundos

> Fish VR nació al observar que los jugadores de Fish!, un mundo de VRChat, tenían que cruzar manualmente información sobre equipamiento, peces, zonas, clima y horario. El problema no era solo mostrar esos datos, sino convertirlos en una decisión útil: dónde pescar, qué configuración usar o qué mejora comprar.
>
> Construí la solución con HTML, CSS y JavaScript vanilla. Modelé peces y equipamiento mediante estructuras de datos, implementé reglas para calcular estadísticas y diseñé un sistema de puntuación adaptable a objetivos como dinero, velocidad, tamaño, rareza, facilidad o equilibrio. Sobre esa base desarrollé el asesor de zonas, rankings, un comparador de hasta cuatro configuraciones y recomendaciones limitadas por presupuesto.
>
> Elegí una arquitectura estática porque no existía una API oficial y quería que la herramienta funcionara sin cuentas, instalación ni backend. Ese enfoque simplificó el uso, aunque dejó un trade-off claro: los datos requieren actualización manual y la versión actual concentra lógica, datos y presentación en un solo archivo. Mi siguiente iteración sería modularizarla, probar el motor de cálculo y automatizar el despliegue. Lo más valioso fue transformar reglas informales en lógica consistente y resultados comprensibles para el usuario.

## Preguntas que podrían hacerte

### ¿Qué parte demuestra mejor tus habilidades?

El flujo completo desde el modelado del dominio hasta el resultado visible. La aplicación recibe una configuración, aplica reglas de negocio y devuelve alternativas comparables; no se limita a presentar contenido estático.

### ¿Por qué usaste JavaScript vanilla?

El alcance no justificaba incorporar un framework. JavaScript vanilla mantuvo el prototipo portable y me permitió trabajar directamente con estructuras de datos, DOM, eventos, filtrado y renderizado dinámico.

### ¿Cuál fue el desafío principal?

Convertir criterios diferentes —dinero, rapidez, rareza, tamaño o dificultad— en reglas y puntuaciones coherentes, y explicar el resultado sin sobrecargar la interfaz.

### ¿Qué trade-off asumiste?

Al no existir una API oficial, incorporé los datos en el cliente. Eso permite respuestas inmediatas y ejecución sin backend, pero exige actualizar y versionar los datos manualmente.

### ¿Qué mejorarías técnicamente?

Separaría `index.html` en módulos de datos, lógica y presentación; documentaría la fuente y versión de los datos; añadiría pruebas unitarias al sistema de cálculo y automatizaría el despliegue.

### ¿Qué aprendiste?

Aprendí a identificar una necesidad, modelar un dominio, traducir reglas informales a código y diseñar una interfaz que ayuda a decidir en lugar de limitarse a mostrar datos.

## Frase para el CV o LinkedIn

**Fish VR — Fishing Advisor:** aplicación web bilingüe en HTML, CSS y JavaScript vanilla que modela datos de un juego de VRChat y genera recomendaciones, rankings y comparaciones según objetivos, condiciones y presupuesto.

## Demostración en vivo

1. Configurar equipo, clima y horario.
2. Mostrar las estadísticas y recomendaciones resultantes.
3. Cambiar un objetivo o el presupuesto y explicar el efecto.
4. Comparar dos configuraciones.
5. Cerrar mostrando la interfaz español-inglés y la vista responsive.

Presenta Fish VR como un prototipo funcional y comunitario. Los datos están modelados en el cliente; no provienen de una API ni representan una integración oficial con Fish! o VRChat.
