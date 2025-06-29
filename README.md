# ¿Quieres salir conmigo? 💕

Un proyecto web interactivo y divertido para hacer una propuesta romántica de manera creativa. El sitio presenta una pregunta con dos botones: "SÍ" y "NO", pero el botón "NO" tiene una sorpresa especial... ¡se escapa cada vez que intentas hacer clic en él!

## 🌟 Características

- **Interfaz romántica**: Diseño con colores rosados y tipografía juguetona
- **Botón esquivo**: El botón "NO" se mueve aleatoriamente cuando intentas hacer clic
- **Animaciones**: Efectos de confetti cuando se acepta la propuesta
- **Elementos decorativos**: Flores y corazones flotantes de fondo
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Experiencia completa**: Mensaje personalizado y efectos visuales

## 🎯 Cómo funciona

1. **Página inicial**: Muestra un saludo personalizado y la pregunta principal
2. **Interacción con "SÍ"**: Al hacer clic, aparece un mensaje de celebración con confetti
3. **Interacción con "NO"**: El botón se mueve a una posición aleatoria para evitar ser presionado
4. **Elementos visuales**: Flores y corazones flotan constantemente en el fondo

## 📁 Estructura del proyecto

```
proyecto-cita/
│
├── Quieres_salir_conmigo.html    # Página principal
├── style.css                     # Estilos y animaciones
├── script.js                     # Lógica interactiva
└── README.md                     # Este archivo
```

## 🚀 Instalación y uso

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** el archivo `Quieres_salir_conmigo.html` en cualquier navegador web
3. **¡Disfrutar!** La experiencia interactiva está lista

No se requiere instalación de dependencias ni servidor local.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica de la página
- **CSS3**: Estilos, animaciones y efectos visuales
  - Gradientes lineales
  - Animaciones CSS (@keyframes)
  - Transformaciones y transiciones
  - Posicionamiento absoluto/fijo
- **JavaScript (Vanilla)**: Lógica de interacción
  - Manipulación del DOM
  - Event listeners
  - Cálculos matemáticos para posicionamiento
  - Generación dinámica de elementos

## 🎨 Características técnicas

### Animaciones incluidas:
- **Pulse**: Efecto de latido en el título principal
- **Celebration**: Animación del mensaje de éxito
- **ConfettiFall**: Caída de confetti con rotación
- **Flotar**: Movimiento de flores y corazones de fondo

### Funcionalidades JavaScript:
- **Algoritmo de evasión**: El botón "NO" calcula posiciones válidas con distancia mínima
- **Detección de eventos**: Mouse y touch para compatibilidad móvil
- **Generación procedural**: Creación automática de elementos decorativos
- **Responsive handling**: Reposicionamiento en cambios de tamaño de ventana

## 🎯 Casos de uso

- **Propuestas románticas**: Forma creativa de invitar a alguien especial
- **Regalos digitales**: Enviar como página web personalizada
- **Aprendizaje**: Ejemplo de interactividad web básica
- **Diversión**: Entretenimiento ligero con efectos visuales

## 🔧 Personalización

### Para modificar el mensaje:
Edita el contenido en `Quieres_salir_conmigo.html`:
```html
<div class="subtitle">🌸 Tu mensaje personalizado aquí 🌸</div>
```

### Para cambiar colores:
Modifica las variables de color en `style.css`:
```css
/* Colores principales */
#d63384 (rosa fuerte)
#ff69b4 (rosa brillante)
#ffc0cb (rosa claro)
```

### Para ajustar la dificultad del botón:
Cambia la distancia mínima en `script.js`:
```javascript
// Línea ~30: Cambiar 500 por el valor deseado
calculateDistance(previousPosition.x, previousPosition.y, newX, newY) < 500
```

## 🌐 Compatibilidad

- **Navegadores modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos móviles**: Soporte touch completo
- **Responsive**: Funciona en tablets y smartphones

## 📝 Licencia

Este proyecto es de uso libre. Puedes modificarlo y compartirlo como desees.

## 💡 Créditos

Proyecto creado con amor para hacer sonreír a alguien especial 💖

---

*¡Esperamos que este proyecto ayude a crear momentos mágicos y divertidos!*
