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

- **HTML5** - Estructura semántica con landmarks ARIA
- **Tailwind CSS v3** (PostCSS) - Estilos utilitarios con purging automático
- **Vite 6** - Build tool con HMR, minificación y optimización de assets
- **JavaScript (ES Modules)** - Interactividad y animaciones
- **Google Fonts** - Tipografía (Inter, Poppins)
- **Font Awesome** - Iconos

## Estructura de Archivos

```
safestep-landing-page/
├── src/
│   ├── styles/
│   │   └── main.css        # Estilos Tailwind + CSS personalizado
│   └── scripts/
│       └── main.js         # JavaScript modular
├── assets/
│   └── images/
│       ├── logo.ico
│       ├── logo.png
│       ├── usuarios/       # Avatares de usuarios
│       └── cursos/
│           ├── portada/    # Imágenes de portadas
│           └── logo/       # Logos de cursos
├── dist/                   # Archivos generados (build)
├── index.html              # Página principal
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
├── sitemap.xml             # Sitemap para SEO
├── robots.txt              # Configuración de crawlers
├── .gitignore
└── README.md
```

## Secciones de la Landing Page

1. **Hero** - Título principal, CTA y demostración de simulación
2. **Estadísticas** - 50K+ usuarios, 5 módulos, 98% satisfacción
3. **Características** - 6 features principales
4. **Cómo Funciona** - 3 pasos para empezar
5. **Simulaciones** - 5 módulos de emergencia
6. **Gamificación** - Sistema de puntos y logros
7. **Tienda** - Productos de emergencia
8. **Testimonios** - Opiniones de usuarios
9. **FAQ** - Preguntas frecuentes
10. **Footer** - Enlaces y redes sociales

## Colores del Tema

| Color | Hex | Uso |
|-------|-----|------|
| Primary | `#0ea5e9` | Azul principal |
| Safe | `#22c55e` | Verde acciones seguras |
| Secondary | `#ef4444` | Rojo emergencias |
| Accent | `#f97316` | Naranja destacados |

## Cómo Ejecutar Localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo con HMR
npm run dev

# Generar build de producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Mejoras Implementadas

- **Build system**: Vite + Tailwind CLI con purging automático (CSS 90% más pequeño)
- **SEO**: Meta tags (Open Graph, Twitter Cards), sitemap.xml, robots.txt
- **Accesibilidad**: Skip-to-content, roles ARIA, etiquetas en interactive elements
- **Rendimiento**: Lazy loading en imágenes, CSS purgado, minificación
- **Semántica HTML**: Landmarks `<main>`, `<nav>`, `<footer>` con roles ARIA
- **Footer**: Estructura limpia sin duplicación de contenido
- **Copyright**: Unificado a 2026

## Compatibilidad

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Licencia

Todos los derechos reservados - SafeStep 2026
