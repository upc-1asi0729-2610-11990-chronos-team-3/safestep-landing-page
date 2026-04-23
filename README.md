# SafeStep - Landing Page

Landing page de **SafeStep**, una plataforma interactiva para aprender primeros auxilios mediante simulaciones realistas y gamificación.

## Descripción

SafeStep es una landing page moderna y responsiva diseñada para promocionar una aplicación de aprendizaje en primeros auxilios. La página presenta las características principales del servicio, simulaciones disponibles, sistema de gamificación, tienda de productos y sección de preguntas frecuentes.

## Características Principales

- **Simulaciones Interactivas**: RCP, Atragantamiento, Quemaduras, Sismos, Cortes y Hemorragias
- **Gamificación**: Sistema de XP, insignias, rachas diarias y rankings
- **Tienda de Emergencia**: Botiquines, torniquetes, mochilas de emergencia
- **Diseño Responsivo**: Compatible con dispositivos móviles, tablets y desktop
- **Animaciones Modernas**: Efectos de scroll, transiciones y elementos flotantes

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Tailwind CSS** (CDN) - Estilos y diseño responsivo
- **JavaScript** - Interactividad y animaciones
- **Google Fonts** - Tipografía (Inter, Poppins)
- **Font Awesome** - Iconos

## Estructura de Archivos

```
safestep-landing-page/
├── index.html           # Página principal
├── style.css            # Estilos personalizados
├── script.js            # Funcionalidad JavaScript
├── tailwind-config.js   # Configuración de Tailwind
├── README.md            # Este archivo
└── assets/
    └── images/
        ├── logo.ico
        ├── logo.png
        ├── usuarios/    # Avatares de usuarios
        └── cursos/
            ├── portada/ # Imágenes de portadas
            └── logo/    # Logos de cursos
```

## Secciones de la Landing Page

1. **Hero** - Título principal, CTA y demostración de simulación
2. **Estadísticas** - 50K+ usuarios, 5 módulos, 98% satisfacción
3. **Características** - 6 features principales
4. **Cómo Funciona** - 3 pasos para empezar
5. **Simulaciones** - 5 módulos de emergencia
6. **Gamificación** - Sistema de puntos y logros
7. **Tienda** - Productos de emergencia
8. **FAQ** - Preguntas frecuentes
9. **Footer** - Enlaces y redes sociales

## Colores del Tema

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#0ea5e9` | Azul principal |
| Safe | `#22c55e` | Verde seguras |
| Secondary | `#ef4444` | Rojos/Emergencias |
| Accent | `#f97316` | Naranja/Destacados |

## Cómo Ver la Landing Page

1. Clona o descarga el repositorio
2. Abre el archivo `index.html` en tu navegador
3. O usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (si tienes http-server)
npx http-server
```

## Personalización

### Colores
Modifica `tailwind-config.js` para cambiar el tema de colores.

### Contenido
Edita directamente el archivo `index.html` para modificar textos, imágenes o secciones.

### Estilos
Agrega estilos personalizados en `style.css`.

## Compatibilidad

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Licencia

Todos los derechos reservados - SafeStep 2026