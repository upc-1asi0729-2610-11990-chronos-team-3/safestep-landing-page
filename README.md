# SafeStep - Landing Page

Landing page de **SafeStep**, una plataforma interactiva para aprender primeros auxilios mediante simulaciones realistas y gamificación. Desarrollada por **Chronos**, una startup de estudiantes de Ingeniería de Software de la UPC.

## Descripción

SafeStep es una landing page moderna y responsiva diseñada para promocionar una aplicación de aprendizaje en primeros auxilios. La página presenta las características principales del servicio, simulaciones disponibles, sistema de gamificación, tienda de productos y sección de preguntas frecuentes.

## Características Principales

- **Simulaciones Interactivas**: RCP, Atragantamiento, Quemaduras, Sismos, Cortes y Hemorragias
- **Gamificación**: Sistema de XP, insignias, rachas diarias y rankings
- **Tienda de Emergencia**: Botiquines, torniquetes, mochilas de emergencia
- **Diseño Responsivo**: Compatible con dispositivos móviles, tablets y desktop
- **Animaciones Modernas**: Efectos de scroll, transiciones y elementos flotantes
- **Videos Integrados**: Reproductor YouTube integrado con click-to-play

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica con SEO (Open Graph, Twitter Cards)
- **CSS3 Puro** - Variables CSS, Flexbox, Grid, animaciones, diseño responsivo
- **JavaScript (ES6+) Nativo** - DOM API, Intersection Observer, eventos
- **Bootstrap Icons** - Librería de iconos (CDN)
- **Google Fonts** - Tipografía Inter y Poppins

## Estructura de Archivos

```
safestep-landing-page/
├── assets/
│   └── images/
│       ├── logo.ico
│       ├── logo-chronos.png
│       ├── logo-safestep.png
│       ├── banner-hero.png
│       ├── cursos/           # Portadas de cursos (6)
│       ├── productos/        # Imágenes de tienda (4)
│       ├── usuarios/         # Avatares de testimonios (3)
│       └── integrantes/      # Fotos del equipo (4)
├── about.html               # Página "Acerca de"
├── index.html               # Landing page principal
├── styles.css               # Todos los estilos del proyecto
├── script.js                # JavaScript del proyecto
└── README.md
```

## Secciones de la Landing Page

1. **Hero** - Título principal, CTA y demostración de simulación
2. **Estadísticas** - 50K+ usuarios, 5 módulos, 98% satisfacción
3. **Características** - 6 features principales
4. **Cómo Funciona** - 3 pasos para empezar
5. **Simulaciones** - 6 cursos de emergencia
6. **Gamificación** - Sistema de puntos y logros
7. **Tienda** - 4 productos de emergencia
8. **Testimonios** - Slider con opiniones de usuarios
9. **FAQ** - 5 preguntas frecuentes
10. **Footer** - Enlaces y redes sociales

## Secciones de About Page

1. **Hero** - Presentación Chronos + SafeStep
2. **Misión y Visión**
3. **Valores** - 4 principios
4. **Equipo** - 4 integrantes del equipo
5. **Videos** - Reproductor YouTube integrado
6. **Galería** - Screenshots de la plataforma

## Colores del Tema

| Color | Hex | Uso |
|-------|-----|------|
| Primary | `#0ea5e9` | Azul principal |
| Safe | `#22c55e` | Verde acciones seguras |
| Secondary | `#ef4444` | Rojo emergencias |
| Accent | `#f97316` | Naranja destacados |

## Cómo Ejecutar Localmente

```bash
# No requiere instalación de dependencias
# Simplemente abre index.html en tu navegador

# O usa un servidor local (ej. con Python)
python -m http.server 8000

# O con la extensión Live Server de VS Code
```

## Responsive Design

| Breakpoint | Target |
|------------|--------|
| 992px | Tablets / Landscape |
| 768px | Tablets / Mobile |
| 480px | Mobile pequeño |

## Videos Integrados

Los videos en la página About utilizan thumbnails de YouTube con reproducción click-to-play:

- **Sobre el Proyecto**: https://youtu.be/jmA1L_1_8bk
- **Sobre SafeStep**: https://youtu.be/-RuGA9r1EsM

## Compatibilidad

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Licencia

Todos los derechos reservados - SafeStep by Chronos 2026
