# Key Forge

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github)](https://github.com/jeisonmr)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/jeisonmr/)

Aplicación web para **generar y validar contraseñas seguras** con procesamiento 100 % local en el navegador. Sin servidores, sin registro y sin almacenamiento: la clave se genera en tu dispositivo mediante la Web Crypto API.

**Demo en producción:** <https://keyforge-pass.netlify.app/>

## Vista previa

> Captura de pantalla de la aplicación: pendiente.

La aplicación consta de dos secciones principales:

- **Generador** (`/`): configura la longitud (8–45 caracteres) y los tipos de caracteres (mayúsculas, minúsculas, números, símbolos) para generar una contraseña, copiarla al portapapeles y ver una estimación de su entropía.
- **Guía de seguridad** (`/guia-de-seguridad`): consejos prácticos de buenas prácticas, mitos y realidades sobre contraseñas, y una explicación del cifrado local.

## Características principales

- Generación de contraseñas con **aleatoriedad criptográfica** (`crypto.getRandomValues`) en lugar de `Math.random`.
- Longitud configurable entre **8 y 45 caracteres** mediante un control deslizante.
- Personalización por tipos de caracteres: mayúsculas, minúsculas, números y símbolos.
- **Copia al portapapeles** con notificación visual de confirmación.
- Mostrar/ocultar la contraseña generada.
- **Estimación de entropía** en bits y clasificación de la fortaleza: Débil, Moderada, Fuerte y Muy Fuerte.
- **Validador de contraseñas**: analiza una clave introducida y muestra su entropía estimada y nivel de seguridad.
- Diseño responsive con Tailwind CSS y componentes de Material UI.
- Navegación con React Router, incluyendo una guía educativa de seguridad.

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 18 | Librería de interfaz de usuario (JSX/TSX) |
| TypeScript | Tipado estático en la lógica de negocio y vistas |
| JavaScript (ESM) | Archivos auxiliares (`.jsx`, `.js`) |
| Vite | Bundler y servidor de desarrollo |
| Tailwind CSS v4 | Utilidades de estilos vía `@tailwindcss/vite` |
| Material UI (MUI) | Componente `Switch` y sistema de iconos |
| React Router | Enrutamiento entre vistas |
| Web Crypto API | Generación aleatoria criptográfica |
| Redux Toolkit / React Redux | Dependencias instaladas (integración no utilizada en las vistas actuales) |

## Requisitos previos

- **Node.js** (versión LTS recomendada) y **npm**.
- Un navegador moderno con soporte para la **Web Crypto API** (`crypto.getRandomValues`) y `navigator.clipboard`.

## Instalación y configuración

```bash
# Clonar el repositorio
git clone https://github.com/jeisonmr/PG_Pass_Gen-WA.git
cd PG_Pass_Gen-WA

# Instalar dependencias
npm install
```

El proyecto no requiere variables de entorno ni configuración adicional para ejecutarse.

## Variables de entorno y seguridad

El proyecto **no utiliza variables de entorno** para funcionar. Existe un archivo `.env` vacío en la raíz; debe mantenerse excluido del control de versiones añadiéndolo a `.gitignore` si contiene datos locales.

> **Aviso:** si en el futuro se añaden variables a Vite, las que usen el prefijo `VITE_` quedan expuestas en el código del navegador y **nunca deben contener secretos, tokens ni claves privadas**.

## Ejecución del proyecto

```bash
npm run dev
```

El servidor de desarrollo de Vite se inicia en el puerto **7777** (configurado en `vite.config.js`). Abre <http://localhost:7777> en el navegador.

## Compilación y despliegue

```bash
npm run build
```

Genera la versión de producción en el directorio `dist/`. Para previsualizarla localmente:

```bash
npm run preview
```

El despliegue actual se realiza en **Netlify** (dominio: `keyforge-pass.netlify.app`).

## Estructura del proyecto

```
├── public/                  # Activos estáticos (iconos, imágenes, robots.txt, sitemap.xml)
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── box/             #   BoxInformation: tarjeta informativa del footer
│   │   ├── form/            #   FormGenerator y FormValidator: lógica de UI principal
│   │   ├── nav/             #   Nav: barra de navegación
│   │   └── switch/          #   Switch: toggle basado en Material UI
│   ├── data/                # data.json: contenido de la guía de seguridad
│   ├── fonts/               # Tipografías locales (IBM Plex Mono, Space Grotesk)
│   ├── hooks/               # usePassword: generador auxiliar (legacy)
│   ├── layout/              # App: componente raíz
│   ├── router/              # AppRouter: definición de rutas
│   ├── scripts/             # Lógica de negocio
│   │   ├── generator.ts     #   Generación de contraseñas y cálculo de entropía
│   │   └── validator.ts     #   Análisis de entropía de contraseñas existentes
│   ├── styles/              # Estilos globales y tema (Tailwind, fuentes)
│   ├── views/               # Páginas/vistas
│   │   ├── KeyForge.tsx     #   Vista principal (generador + validador)
│   │   └── Guide.tsx        #   Guía de seguridad
│   └── main.jsx             # Punto de entrada de la aplicación
├── index.html               # Plantilla HTML con metadatos SEO
├── vite.config.js           # Configuración de Vite (puerto, alias, plugins)
└── package.json             # Dependencias y scripts
```

## Arquitectura y funcionamiento

La aplicación sigue una estructura por capas simple:

1. **`main.jsx`** monta el componente raíz `App` en `#root` y carga los estilos globales.
2. **`layout/App.tsx`** compone la barra de navegación (`Nav`) y el enrutador (`AppRouter`).
3. **`router/AppRouter.tsx`** define dos rutas: la vista principal `KeyForge` (`/`) y la guía `Guide` (`/guia-de-seguridad`).
4. **`views/KeyForge.tsx`** organiza la pantalla en dos paneles: el generador (`FormGenerator`) y el validador (`FormValidator`), y mantiene el estado compartido de la entropía analizada.
5. **`scripts/generator.ts`** es el núcleo criptográfico: `passGenerator` construye un diccionario de caracteres según las opciones activas y selecciona caracteres con `crypto.getRandomValues`; `getEntropy`/`showEntropyMessage` calculan y clasifican la entropía.
6. **`scripts/validator.ts`** (`analyzePassword`) estima el tamaño del alfabeto de una contraseña introducida por el usuario y devuelve su entropía y nivel de seguridad.

Todo el procesamiento ocurre en el cliente: ninguna contraseña se transmite ni se almacena.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite en `http://localhost:7777` |
| `npm run build` | Compila la aplicación para producción en `dist/` |
| `npm run preview` | Sirve localmente la build de producción generada |

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Haz un *fork* del repositorio.
2. Crea una rama para tu cambio: `git checkout -b feature/mi-cambio`.
3. Realiza tus cambios y verifica que `npm run build` compile sin errores.
4. Abre un *pull request* describiendo el cambio.

## Licencia

No se ha especificado una licencia en el repositorio. Todos los derechos reservados por defecto.

## Autor

**Jeison MR** — [GitHub](https://github.com/jeisonmr) · [LinkedIn](https://www.linkedin.com/in/jeisonmr/)
