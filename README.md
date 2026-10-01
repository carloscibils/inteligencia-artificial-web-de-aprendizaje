# LOS AVENGERS · Aprendiendo Inteligencia Artificial

Juego educativo para aprender los fundamentos de la Inteligencia Artificial con la temática de la base de los Avengers.

**Docente y dueño de la página: Carlos Cibils**

Seis sectores de la base, seis preguntas y un asistente apagado que hay que reconstruir explicándole, con tus palabras, cómo funciona la Inteligencia Artificial. Cada sector incluye un ejemplo de las películas, y hay 14 tarjetas de aprendizaje para repasar los conceptos.

## 🎮 Características

- **6 sectores educativos** (5 conceptos + 1 misión extra sobre buenos pedidos)
- **14 tarjetas de aprendizaje** que giran al tocarlas, con definición y ejemplo de película
- **Galería de escenas**: se entra por el sector que quieras
- **Viñetas ilustradas** en cada sector (dibujos propios incluidos en el código)
- **Espacio para fotos propias** por sector, listo para usar material con licencia
- **Sonidos inmersivos** con Web Audio API (ambiente, pulsos, aciertos y errores)
- **Puntaje persistente** en localStorage: 100 puntos por sector + 50 de bono sin fallos
- **Progreso guardado en cookies** para retomar la partida
- **Modos de accesibilidad** inclusivos:
  - 🌿 Modo Serenidad
  - 🌙 Modo Descanso
- **Manual de ayuda** integrado con la teoría de cada sector
- **Verificación flexible**: acepta las respuestas con palabras del alumnado
- **Responsive** para todos los dispositivos

## 📚 Contenido Educativo

1. **La torre** — qué es la Inteligencia Artificial y en qué se diferencia de la programación común
2. **Los archivos** — qué necesita una máquina para aprender: datos, ejemplos y el riesgo de los datos sesgados
3. **Las conexiones** — redes neuronales, pesos y entrenamiento explicado como perillas que se giran
4. **Los pedacitos** — tokens y por qué un modelo de lenguaje predice lo que sigue
5. **El dato falso** — alucinaciones, sesgo y uso responsable
6. **La instrucción** — misión extra: cómo escribir un buen pedido (prompt)

Nivel pensado para **Liceo Ciclo Básico**: frases cortas, vocabulario simple, analogías everyday y ejemplos de las películas en cada sector.

## 🚀 Cómo jugar

1. Leé la escena y la pista del sector
2. Respondé con tus palabras en el campo de texto
3. Presioná **Enviar** o la tecla **Enter**
4. Si la respuesta es correcta, se abre el siguiente sector
5. ¡Completá los 6 sectores para reconstruir el asistente!

## 🃏 Tarjetas de aprendizaje

Sección **Tarjetas** del menú: 14 conceptos con su definición y un ejemplo de las películas. Se giran con un clic o con el teclado, y el botón «Ver todas» las da vuelta para repasar en grupo antes de una prueba. Durante la partida, el botón **Tarjeta de apoyo** abre la tarjeta del sector que estás resolviendo.

## 🖼️ Fotos e imágenes

Las ilustraciones del proyecto son **propias y están dibujadas en el propio código** (SVG), por lo que se pueden usar en el aula sin problemas de licencia. Si querés agregar fotogramas, pósters o imágenes tuyas, editá la constante `FOTOS` de `script.js`:

```js
const FOTOS = {
  1: { src: "imagenes/sector-1.jpg", pie: "Foto de la base" },
  4: { src: "imagenes/sector-4.jpg", pie: "Ejemplo de prompt" }
};
```

Si un sector tiene foto, reemplaza la viñeta automáticamente en el juego y en la galería. Recordá que los fotogramas de las películas son material con derechos: usá imágenes propias, con licencia o de dominio público.

## ♿ Accesibilidad

- **🌿 Modo Serenidad**: suaviza los colores fuertes, baja el contraste del fondo y cambia los sonidos de error por tonos calmados
- **🌙 Modo Descanso**: detiene el humo, el parpadeo y todas las animaciones
- Teclado completo, foco visible y mensajes de estado anunciados con `aria-live`
- Cada imagen lleva su descripción textual para lectores de pantalla
- Respeta la preferencia del sistema `prefers-reduced-motion`

## 🛠️ Tecnologías

- HTML5
- CSS3 (animaciones, variables CSS, Grid, Flexbox, `backface-visibility` para las tarjetas)
- JavaScript (Web Audio API, localStorage, Cookies, SVG inline)
- Sin dependencias externas, sin instalación
- Docente y dueño de la página: Carlos Cibils

## 📦 Instalación

```bash
git clone https://github.com/carloscibils/inteligencia-artificial-web-de-aprendizaje.git
# Abrí index.html en tu navegador
```

También se puede publicar directamente con GitHub Pages: subí los archivos y activá **Settings → Pages** sobre la rama `main`.

## 👩‍🏫 Ideas para el aula

- Uso individual como autoevaluación y uso grupal para discutir la respuesta antes de escribirla
- Los sectores 2 y 5 abren el debate sobre IA generativa, datos y uso responsable
- Las tarjetas sirven como apunte de consulta y como juego de repaso antes de la prueba
- La galería permite repartir los sectores entre grupos y comparar respuestas
