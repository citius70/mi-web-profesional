# 🎓 Tecnología con Código y Tiza

> **Web profesional de Alberto Durán Pérez**
> Departamento de Tecnología
> IES Frei Martín Sarmiento — Pontevedra

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

---

## 📌 Descripción

Sitio web profesional que muestra proyectos, recursos y contenido educativo del área de **Tecnología, Robótica y Fabricación Digital** impartida desde 1998 en el IES Frei Martín Sarmiento.

### Características principales

✅ **Responsive y accesible** — Diseño mobile-first, WCAG 2.1 AA  
✅ **Sin dependencias pesadas** — Bootstrap 5 + Bootstrap Icons (CDN)  
✅ **Plantillas reutilizables** — Navbar y Footer inyectados con JS  
✅ **Animaciones suaves** — Fade-in y contadores con IntersectionObserver  
✅ **SEO optimizado** — Meta tags, Open Graph, structured data  
✅ **Degradación elegante** — Fallback `noscript` en todas las páginas  

---

## 🗂️ Estructura del Proyecto

```
mi-web-profesional/
├── index.html                    # Página de inicio
├── robotica.html                 # Sección: Robótica y Control
├── fabricaciondigital.html       # Sección: Fabricación Digital
├── galeria.html                  # Galería de proyectos
├── intranet.html                 # Área privada para alumnos
│
├── css/
│   ├── global.css               # ⭐ Punto de entrada (importa todo)
│   ├── variables.css            # Tokens: colores, sombras, tipografía
│   ├── layout.css               # Navbar, footer, grid general
│   ├── hero.css                 # Sección hero con animaciones
│   ├── especialidades.css       # Tarjetas de especialidades
│   ├── proyectos.css            # Zoom de imágenes en proyectos
│   ├── componentes.css          # Banda de contadores
│   └── animaciones.css          # Fade-in-up, pulsaciones
│
├── js/
│   ├── includes.js              # Carga de plantillas (navbar, footer)
│   ├── animaciones.js           # Fade-in-up con IntersectionObserver
│   ├── contadores.js            # Animación de contadores numéricos
│   └── ui.js                    # [Reservado para evolutivos]
│
├── plantillas/
│   ├── navbar.html              # Navegación principal (inyectada)
│   └── footer.html              # Pie de página (inyectada)
│
├── imagenes/
│   ├── favicon.svg              # [En Data URI en <head>]
│   ├── inicio/
│   │   ├── alberto1.jpg
│   │   ├── alberto1.webp        # Versión optimizada
│   │   ├── puente.png
│   │   ├── ringbit.jpg
│   │   └── sismografo.png
│   ├── fabricaciondigital/
│   │   └── impresora3d.png
│   └── [más carpetas según contenido]
│
├── README.md                     # Este archivo
└── .gitignore                    # Archivos a ignorar en Git
```

---

## 🚀 Quick Start

### Ejecutar localmente

```bash
# Clonar el repositorio
git clone https://github.com/citius70/mi-web-profesional.git
cd mi-web-profesional

# Opción A: Servidor Python simple (Python 3)
python3 -m http.server 8000
# → Abre http://localhost:8000

# Opción B: Servidor Node (si lo tienes)
npx http-server

# Opción C: Live Server en VS Code
# Instala la extensión "Live Server" y haz clic en "Go Live"
```

### Estructura de carpetas recomendada para local

```
proyecto/
├── index.html
├── css/
├── js/
├── plantillas/
└── imagenes/
```

---

## 🎨 Paleta de Colores

Define las siguientes variables CSS en **`css/variables.css`**:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--azul-tech` | `#004a99` | Navbar, botones primarios |
| `--dorado-maker` | `#f1c40f` | Acentos, bordes activos |
| `--microbit-orange` | `#e95420` | Sección Micro:bit |
| `--neon-arduino` | `#00979d` | Sección Arduino |
| `--fondo-light` | `#f8fafd` | Fondo general |

---

## 📝 Páginas Principales

### 1. **index.html** — Inicio
- Hero con avatar + badge
- Contadores animados (años, errores, proyectos)
- Cita destacada
- Misión de la web
- Tarjetas de especialidades (Robótica, Fab. Digital, Energía)
- Proyectos recientes en carrusel

### 2. **robotica.html** — Robótica y Control
- Hero específico
- Sección Micro:bit (1º-2º ESO): retos con tarjetas dinámicas
- Sección Arduino (4º ESO y Bachillerato): hardware, software, código
- Videos incrustados de YouTube
- Enlaces externos

### 3. **fabricaciondigital.html** — Diseño y Fabricación
- Header con efecto cuadrícula de ingeniería
- Software de diseño: Tinkercad, SketchUp, FreeCAD, etc.
- Maquinaria: impresoras 3D, cortadora láser, fresadora CNC
- Tarjetas de procesos con iconos

### 4. **galeria.html** — Portfolio de Proyectos
- Filtros funcionales (Todos, Robótica, Impresión 3D, Taller)
- Tarjetas de proyecto con efecto hover
- Badges de categoría
- Sistema de filtrado en JavaScript

### 5. **intranet.html** — Área Privada
- ⚠️ **NOTA:** Actualmente usa contraseña en cliente (`prompt` → "arduino")
- Sidebar + contenido principal
- Lista de recursos (PDFs, manuales)
- Enlaces rápidos y consultas

---

## ⚙️ Guía de Mantenimiento

### Actualizar contenido

#### Agregar un nuevo proyecto a galeria.html

1. Abre `galeria.html`
2. Copia este bloque dentro de `<div class="row g-4" id="contenedor-proyectos">`:

```html
<div class="col-md-4 filtro-item [categoría]">
  <div class="card-proyecto">
    <div class="img-wrapper">
      <span class="badge-categoria">[ETIQUETA]</span>
      <img src="[ruta-imagen]" alt="[descripción]">
    </div>
    <div class="card-body p-4">
      <h5 class="fw-bold">[Título del Proyecto]</h5>
      <p class="text-muted small">[Descripción breve]</p>
      <button class="btn btn-outline-primary btn-sm">Leer más</button>
    </div>
  </div>
</div>
```

Reemplaza `[categoría]` con: `robotica`, `impresion3d`, o `aula`

#### Cambiar colores de marca

1. Edita `css/variables.css`
2. Actualiza las variables `--azul-tech`, `--dorado-maker`, etc.
3. Los cambios se propagarán automáticamente gracias a `@import` en `global.css`

#### Añadir una nueva sección a la navbar

1. Abre `plantillas/navbar.html`
2. Agrega un nuevo `<li class="nav-item">` en la lista `<ul class="navbar-nav ms-auto">`
3. El cambio se inyecta automáticamente en todas las páginas

---

## 🔍 Checklist de Validación (antes de desplegar)

Ejecuta estos pasos antes de hacer push a producción:

```bash
# ✓ 1. Verificar enlaces internos (manual rápido)
# Abre el navegador y prueba:
#   - index.html → galeria.html → robotica.html → volver a inicio
#   - Verifica que navbar/footer cargan sin errores de consola

# ✓ 2. Revisar consola del navegador
# F12 → Console: no debe haber errores rojos

# ✓ 3. Comprobar favicon en cada página
# Pestaña del navegador debe mostrar el icono "T" azul-dorado

# ✓ 4. Probar responsive
# F12 → Toggle device toolbar:
#   - Mobile (375px): menú hamburguesa visible, layout correcto
#   - Tablet (768px): grid se adapta
#   - Desktop (1920px): todo desplegado

# ✓ 5. Verificar imágenes cargan correctamente
# Inspeccionador → Network: no hay 404 en imagen
```

---

## 🛠️ Stack Técnico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| HTML5 | Nativa | Estructura semántica |
| CSS3 | Nativa | Estilos y animaciones |
| JavaScript (vanilla) | ES6+ | Interactividad sin dependencias |
| Bootstrap | 5.3.3 | Grid, componentes, utilidades |
| Bootstrap Icons | 1.11.3 | 2000+ iconos SVG |
| IntersectionObserver API | Nativa | Lazy loading de animaciones |

**Sin dependencias NPM** — Todo se carga desde CDN  
**Sin build tools** — Edita, guarda y recarga el navegador

---

## 📱 Responsividad

El sitio está optimizado para:

- **Mobile-first:** Diseño inicial para móviles, mejoras progresivas
- **Breakpoints Bootstrap:**
  - `xs` (< 576px): móviles
  - `sm` (≥ 576px): móviles grandes
  - `md` (≥ 768px): tablets
  - `lg` (≥ 992px): desktops
  - `xl` (≥ 1200px): desktops grandes

---

## ♿ Accesibilidad

Cumple **WCAG 2.1 AA** en:

- ✓ Contraste de colores (mínimo 4.5:1)
- ✓ Roles ARIA (`role="banner"`, `role="contentinfo"`)
- ✓ Labels descriptivos en enlaces (`aria-label`)
- ✓ Navegación por teclado (Tab, Enter)
- ✓ Fallback `noscript` en todas las páginas
- ✓ Respeto a `prefers-reduced-motion`

---

## 🔐 Seguridad y Privacidad

### Intranet (Área Privada)

⚠️ **Estado actual:** Contraseña en cliente (no es seguro)

```javascript
// ❌ NO HACER EN PRODUCCIÓN
const pass = prompt("Clave:");
if(pass !== "arduino") { denegar acceso; }
```

### Recomendación para mejorar (P2 del roadmap)

**Opción A: Basic Auth (recomendado)**
```apache
# .htaccess (si usas Apache)
<Files "intranet.html">
  AuthType Basic
  AuthName "Recursos Alumnos"
  AuthUserFile /ruta/a/.htpasswd
  Require valid-user
</Files>
```

**Opción B: Ruta privada en servidor**
```
/public/          ← Sitio visible
/private/alumnos/ ← Con autenticación real
```

---

## 🚀 Roadmap (Fases de Mejora)

### Fase 1 · Quick Wins ✅ (1-2 sesiones)
- [x] Favicon (Data URI integrado)
- [ ] Consolidar estilos de footer
- [ ] Verificar navegación consistente
- [ ] Limpiar `js/ui.js` si no se usa

### Fase 2 · Estructural (2-4 sesiones)
- [ ] Externalizar CSS/JS inline por página
- [ ] Crear `css/pages/` para estilos específicos
- [ ] Crear `js/pages/` para scripts específicos
- [ ] Endurecimiento de intranet (autenticación real)

### Fase 3 · Automatización (1-2 sesiones)
- [ ] Script de validación de enlaces
- [ ] Integración CI/CD (GitHub Actions)
- [ ] Minificación de CSS/JS para producción

### Fase 4 · Backlog Opcional
- [ ] Migración a Markdown estático (Jekyll, Hugo)
- [ ] Sistema de blog para actualizar proyectos
- [ ] Galería con lightbox/modal
- [ ] Formulario de contacto backend

---

## 📊 Análisis de Rendimiento

### Métricas Actuales (Lighthouse)

```
Performance:     85/100  ✓
Accessibility:   92/100  ✓
Best Practices:  90/100  ✓
SEO:            95/100  ✓
```

### Optimizaciones Aplicadas

- ✓ Imágenes en WebP con fallback JPEG
- ✓ Lazy loading (`loading="lazy"`)
- ✓ CSS y JS en archivos separados (caché)
- ✓ Fuentes del sistema (sin Google Fonts)
- ✓ SVG inline para favicon (sin request HTTP)

---

## 🤝 Contribuciones

Este proyecto es mantenido por **Alberto Durán Pérez** (@citius70).

Para reportar bugs o sugerir mejoras:

1. **Abre un Issue** en GitHub describiendo el problema
2. **Propón un cambio** mediante Pull Request
3. **Documenta** cualquier cambio en estructura de carpetas

---

## 📞 Contacto

📧 **Email:** aduranperez@freimartinsarmiento.com  
🐙 **GitHub:** [@citius70](https://github.com/citius70)  
🏫 **Centro:** IES Frei Martín Sarmiento, Pontevedra

---

## 📄 Licencia

Este proyecto está bajo licencia **MIT**. Úsalo libremente en tu contexto educativo.

```
MIT License (2024)
Permite: uso comercial, modificación, distribución
Condición: incluir licencia y aviso de copyright
```

---

## 🎯 Preguntas Frecuentes (FAQ)

### P: ¿Cómo agrego una nueva página?

**R:** Copia la estructura de `robotica.html`:
1. Crea `nueva-pagina.html`
2. Incluye el mismo `<head>` con referencias CSS
3. Usa el `<div data-include="plantillas/navbar.html">` para navbar/footer
4. Linkea desde `index.html`

### P: ¿Por qué no usan un framework (Vue, React)?

**R:** Para este caso de uso (sitio educativo estático + some interactividad):
- Bootstrap vanilla es suficiente
- Sin dependencias = más simple de mantener
- Más rápido de cargar
- Menor curva de aprendizaje para colaboradores

### P: ¿Cómo cambio la contraseña de la intranet?

**R:** En `intranet.html`, dentro del `<script>`:
```javascript
if(pass !== "arduino") { // ← Cambia aquí
```

**Recomendación:** migra a autenticación real (ver sección [Seguridad](#-seguridad-y-privacidad)).

### P: ¿Puedo usar imágenes externas?

**R:** Sí, pero con precaución:
- Usa HTTPS siempre
- Añade `loading="lazy"` para mejor rendimiento
- Descarga localmente si la URL puede cambiar

### P: ¿Cómo actualizo Bootstrap?

**R:** En el `<head>` de cada HTML, cambia la versión del CDN:
```html
<!-- De esta versión -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

<!-- A esta (o la que quieras) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.0/dist/css/bootstrap.min.css" rel="stylesheet" />
```

---

## 📚 Recursos Útiles

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons Gallery](https://icons.getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance](https://web.dev/performance/)

---

**Última actualización:** Marzo 2026  
**Mantenedor:** Alberto Durán Pérez  
**Estado:** ✅ En producción
