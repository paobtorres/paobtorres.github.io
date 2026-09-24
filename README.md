# Landing profesional — Paola B. Torres

Sitio de una sola página, estático, bilingüe (español / inglés), sin dependencias
externas ni build. `index.html` (estructura), `styles.css` (diseño), `app.js`
(render + interacción).

**Todo el texto vive en `datos.js` (español) y `datos.en.js` (inglés).**
Los dos archivos tienen exactamente las mismas claves: si agregás algo en uno,
agregalo en el otro. Para comprobar que no quedó nada desparejo:

```bash
node -e 'const fs=require("fs");eval(fs.readFileSync("datos.js","utf8").replace(/^const /m,"var "));eval(fs.readFileSync("datos.en.js","utf8").replace(/^const /m,"var "));function k(o,p){let r=[];for(const x of Object.keys(o)){const v=o[x];r.push(p+x);if(v&&typeof v==="object"&&!Array.isArray(v))r=r.concat(k(v,p+x+"."))}return r}const a=k(DATOS_ES,""),b=k(DATOS_EN,"");console.log("solo ES:",a.filter(x=>!b.includes(x)));console.log("solo EN:",b.filter(x=>!a.includes(x)))'
```

El idioma se elige con el botón ES/EN de la barra superior, queda guardado en
`localStorage` y arranca siguiendo el idioma del navegador. También se puede
forzar por URL: `?lang=en` o `?lang=es` — útil para mandar el link en inglés.

## Ver el sitio

Abrir `index.html` con doble clic ya funciona. Para que las rutas relativas se
comporten igual que en producción, conviene servirlo:

```bash
python3 -m http.server 4173
```

Luego entrar a `http://localhost:4173`.

## Estructura de la página

Nueve secciones, todas visibles: Perfil, Actualidad, Trayectoria, Proyectos de
IA, Publicaciones, Código abierto, Cursos, Docencia y Colaboremos.

«Colaboremos» cierra la página y absorbió lo que antes era una sección Contacto
aparte: las dos terminaban con su propio «escribime» y decían casi lo mismo.
Ahora es un solo recorrido —en qué puedo sumar, después cómo escribirme— con un
único llamado a la acción.

El alternado de fondos lo calcula `app.js` recorriendo las secciones del DOM,
así que al agregar o sacar una no quedan dos fondos iguales pegados.

El menú tampoco necesita ajustes: `ajustarNav()` mide si los enlaces entran en
la barra y pasa a hamburguesa cuando no. Con nueve secciones hay margen
holgado, pero el ancho real depende de la fuente del sistema de quien mira, así
que si sumás secciones conviene mirar cómo queda la barra.

## Editar el contenido

Abrí `datos.js`. Es un único objeto `DATOS` con una sección por bloque de la página:

| Clave | Qué controla |
|---|---|
| `meta` | Nombre, título, texto de presentación, email, teléfono |
| `links` | LinkedIn, GitHub |
| `stats` | Los 4 números del encabezado |
| `tarjeta` | Recuadro "De un vistazo" |
| `perfil` | Párrafos, áreas de trabajo, idiomas |
| `skills` | Grupos de habilidades técnicas |
| `actualidad` | Tarjetas "En qué estoy trabajando hoy" |
| `ia` / `iaEstados` / `iaNota` | Proyectos de IA, las etiquetas del filtro y la nota al pie |
| `publicaciones` / `pubTipos` / `pubTodas` | Listado de publicaciones y filtros |
| `repos` / `repoNota` | Tarjetas de repositorios de GitHub y la nota al pie |
| `experiencia`, `formacion`, `becas` | Líneas de tiempo de Trayectoria |
| `cursos` / `cursoNota` | Sección «Cursos que dicto» y su nota al pie |
| `docencia`, `becarios`, `evaluacion` | Sección Docencia |
| `busco`, `buscoIntro` | Tarjetas de «Colaboremos» |
| `ui` | Textos de la interfaz: nav, títulos de sección, etiquetas, botones |
| `perfiles` | ORCID y Google Scholar (hero y Publicaciones) |
| `meta.actualizado` | Fecha del pie. Actualizala cuando toques contenido |
| `contacto` | Cierre de «Colaboremos»: título, texto, botón y datos de contacto |
| `pie` | Texto de la derecha del pie de página |

Guardás, recargás el navegador y listo. No hay que tocar el HTML.

### Agregar un curso

En `datos.js`, array `cursos`. Copiá un bloque y editalo:

```js
{
  estado: "Próximo",          // "Dictado" | "Próximo"
  titulo: "Nombre del curso",
  rol: "Profesora a cargo",
  institucion: "UTN FRSR",
  anio: "2026",
  horas: "20 h",             // opcional
  modalidad: "Virtual",      // opcional
  descripcion: "Para quién es y qué se lleva quien lo cursa.",
  temas: ["Tema 1", "Tema 2"],                       // opcional
  repo: "https://github.com/paobtorres/mi-curso",    // opcional
  repoLabel: "Material del curso"                    // opcional
}
```

`estado: "Próximo"` pinta la tarjeta con el color secundario: sirve para anunciar
una edición antes de dictarla.

### Poner tu foto

El fondo del hero tiene un motivo molecular decorativo (proteína de grano grueso
con cadenas de polielectrolito), dibujado en `index.html` y coloreado con las
variables del tema. La foto es aparte y aparece como avatar redondo arriba de la
tarjeta «De un vistazo»:

1. Copiá la imagen en esta carpeta, por ejemplo `foto.jpg` (cuadrada, ~400 px).
2. En `datos.js`, dentro de `meta`, poné `foto: "foto.jpg"`.

Con `foto: null` la tarjeta va sin avatar.

### Cambiar los colores

Están todos en `styles.css`, arriba del todo, como variables CSS. `:root` define
el tema oscuro y `html[data-theme="light"]` el claro. Los dos que dan el carácter
son `--accent` (ámbar) y `--accent-2` (violeta); si los cambiás, cambia toda la
página, incluida la ilustración. Ojo con el contraste de `--accent` en el tema
claro: tiene que ser oscuro para leerse sobre el fondo crema.

### Agregar una publicación

```js
{
  tipo: "Artículos",          // "Artículos" | "Capítulos" | "Congresos"
  anio: 2026,
  autores: "<b>Torres, P. B.</b>; Otro, A.",   // <b> marca tu nombre
  titulo: "Título del trabajo",
  fuente: "Revista, volumen, páginas",
  doi: "10.1000/ejemplo",     // opcional: genera el botón con link
  id: "ISBN 978-...",         // opcional
  destacado: true             // opcional: agrega la etiqueta "Destacado"
}
```

El orden de `pubTipos` importa: el primer elemento es el filtro que arranca
activo (hoy «Artículos», que es el resultado que más se busca) y `pubTodas`
dice cuál de esas etiquetas no filtra nada. Los números de cada filtro se
cuentan solos.

### Agregar un proyecto de IA

```js
{
  estado: "En curso",         // "En curso" | "Planificado"
  titulo: "...",
  periodo: "2026 – 2027",
  resumen: "...",
  stack: ["Python", "PyTorch"],
  contexto: "Dónde se enmarca"
}
```

Si querés un estado nuevo (por ejemplo "Finalizado"), agregalo a `iaEstados`
y sumá una regla `.badge--<lo-que-sea>` en `styles.css`.

### Agregar una sección nueva

1. Un `<section>` en `index.html` con `id`, `data-t` en el `<h2>` y `data-s` en el subtítulo.
2. La entrada correspondiente en `ui.nav` y `ui.sec` de **ambos** archivos de datos.
3. El render en `app.js` y su llamada dentro de `aplicarIdioma()`.

Mirá cómo queda la barra después: los enlaces entran, pero el margen no es
enorme y depende de la fuente del sistema.

## Publicarlo

Está publicado en **GitHub Pages**, repositorio `paobtorres/paobtorres.github.io`,
servido en <https://paobtorres.github.io>. Al ser un repo con nombre
`usuario.github.io`, Pages toma la rama `main` sola: no hay nada que configurar.
Para actualizar el sitio alcanza con:

```bash
git add -A && git commit -m "..." && git push
```

El deploy tarda un minuto o dos. Si alguna vez querés mudarlo, al ser estático
entra igual en Netlify, Vercel o Cloudflare Pages arrastrando la carpeta.

Para usar un dominio propio: agregar un archivo `CNAME` con el dominio adentro y
apuntar el DNS a GitHub. No hay que tocar el código.

## Buscadores y compartir el enlace

- `og.png` (1200×630) es la tarjeta que se ve al pegar el link en LinkedIn,
  WhatsApp o X. Se genera abriendo `og.source.html` en el navegador y sacándole
  una captura de 1200×630; si cambia tu nombre o tu cargo hay que regenerarla,
  porque el texto está quemado en la imagen. Las etiquetas `og:image`, `og:url`
  y `canonical` de `index.html` usan URLs absolutas: los scrapers de las redes
  no resuelven rutas relativas.
- El bloque `application/ld+json` de `index.html` describe quién sos para los
  buscadores (cargo, afiliación, ORCID, Scholar). **Tiene que coincidir con
  `datos.js`**: si cambiás el cargo en uno, cambialo en el otro. No se genera
  solo, es HTML estático.
- `robots.txt` y `sitemap.xml` están en la raíz. El `<lastmod>` del sitemap se
  actualiza a mano junto con `meta.actualizado`.

Una limitación a tener en cuenta: el idioma se cambia en el cliente sobre una
sola URL, así que los buscadores indexan la versión en español. Para que la
inglesa se indexe aparte harían falta URLs distintas (por ejemplo `/en/`), que
es un cambio de estructura, no una etiqueta más.

## Datos personales

El repositorio es **público**. Los tres PDFs del CV están en `.gitignore` y no se
publican: `CV-TorresPaola.pdf` (el de CONICET) trae DNI, CUIL, fecha de nacimiento
y domicilio particular. Antes de commitear un archivo nuevo conviene revisar
`git status --ignored`; en git, un archivo subido queda en el historial aunque
después lo borres en otro commit.

De los datos de contacto se publican email, teléfono, ciudad y perfiles
profesionales. La página no ofrece descarga del CV.

## Notas

- Tema claro/oscuro con botón en la barra superior; la preferencia queda guardada
  en `localStorage` y arranca siguiendo la del sistema.
- Responsive de 320 px para arriba, con menú hamburguesa en móvil.
- Respeta `prefers-reduced-motion` y tiene hoja de estilos de impresión.
