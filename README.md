# VideoStream - Plataforma de Video Web

**VideoStream** es un proyecto web interactivo diseñado para simular una plataforma de reproducción de video similar a YouTube, centrado en contenido de viajes, naturaleza y turismo en la Patagonia.

---

## Características Principales

- **Reproductor de Video Principal:**
  - Reproducción continua con controles personalizados.
  - Sección de título y fecha de publicación.

- **Interactividad en Tiempo Real (JavaScript):**
  - **Contadores de Likes y Dislikes:** Incremento dinámico de reacciones al hacer clic.
  - **Sistema de Suscripción:** Botón interactivo que altera el estado (Suscribirse / Suscrito), modifica el diseño del botón y actualiza el contador global de suscriptores.
  - **Vista Previa de Videos:** Reproducción automática silenciosa (*hover preview*) al pasar el cursor sobre la miniatura del video de la Patagonia en la lista de cola.
  - **Alertas de Interacción:** Notificaciones emergentes para confirmar la adición de videos a la cola de reproducción.

- **Diseño Responsivo y Moderno (CSS):**
  - Barra de navegación (*Navbar*) con buscador y accesos rápidos.
  - Diseño en cuadrícula y flexbox con sidebar para videos en cola, sugerencias y recomendaciones.
  - Sección inferior con tarjetas destacadas para más contenido.

---

## Tecnologías Utilizadas

- **HTML5:** Estructuración semántica y reproducción multimedia (`<video>`).
- **CSS3:** Estilo visual personalizado, adaptabilidad y distribución mediante Flexbox.
- **JavaScript (Vanilla JS):** Manipulación del DOM e interacción de usuario sin librerías externas.
- **Git / GitHub Desktop:** Control de versiones y gestión de repositorio.

---

## Estructura del Proyecto

```text
├── index.html            # Estructura principal del sitio web
├── static/
│   ├── css/
│   │   └── style.css     # Estilos y diseño responsivo
│   ├── js/
│   │   └── script.js    # Lógica de interacciones y eventos
│   ├── images/           # Logos, miniaturas e iconos
│   └── video/            # Archivos multimedia de video
└── README.md             # Documentación del proyecto
```

---

## Autor

Desarrollado por **Ariel Faundez**.