/* ==========================================================================
   datos.js — contenido en ESPAÑOL.
   La versión en inglés vive en datos.en.js y tiene exactamente las mismas
   claves. Si agregás algo acá, agregalo también allá.
   ========================================================================== */

const DATOS_ES = {

  /* ------------------------------------------------------ TEXTOS DE LA UI */
  ui: {
    idioma: "ES", idiomaOtro: "EN", cambiarIdioma: "Switch to English",
    saltar: "Saltar al contenido",
    tema: "Cambiar tema", menu: "Abrir menú", menuCerrar: "Cerrar menú",
    copiar: "Copiar", copiado: "¡Copiado!",
    nav: {
      perfil: "Perfil", actualidad: "Actualidad", trayectoria: "Trayectoria",
      ia: "Proyectos de IA", publicaciones: "Publicaciones", codigo: "Código",
      cursos: "Cursos", docencia: "Docencia", colaborar: "Colaboremos"
    },
    sec: {
      perfil:        { t: "Perfil",               s: "Quién soy y en qué trabajo" },
      actualidad:    { t: "Actualidad",           s: "En qué estoy trabajando hoy" },
      trayectoria:   { t: "Trayectoria",          s: "Experiencia y formación académica" },
      ia:            { t: "Proyectos de IA",      s: "Líneas en curso y hoja de ruta 2025–2028" },
      publicaciones: { t: "Publicaciones",        s: "Artículos revisados por pares, más capítulos y congresos" },
      codigo:        { t: "Código abierto",       s: "Repositorios y software científico" },
      cursos:        { t: "Cursos que dicto",     s: "Capacitaciones y cursos de posgrado, con su material abierto" },
      docencia:      { t: "Docencia y formación", s: "Cátedras de grado, dirección de becarios y evaluación" },
      colaborar:     { t: "Colaboremos",          s: "En qué puedo sumar, y cómo escribirme" }
    },
    lbl: {
      areas: "Áreas de trabajo", idiomas: "Idiomas",
      experiencia: "Experiencia", formacion: "Formación",
      becas: "Becas y distinciones", catedras: "Cátedras de grado",
      becarios: "Dirección de becarios y tesistas",
      evaluacion: "Evaluación científico-técnica",
      verRepo: "Ver repositorio", verPerfil: "Ver perfil completo",
      heroCta: "Trabajemos juntos"
    },
    actualizado: "Última actualización"
  },

  /* ---------------------------------------------------------------- META */
  meta: {
    tratamiento: "Dra. Ing.",
    nombre: "Paola Beatriz Torres",
    nombreCorto: "Paola B. Torres",
    tituloPagina: "Dra. Ing. Paola Beatriz Torres — Simulación Computacional & Machine Learning",
    descripcion: "Doctora en Ingeniería (UTN), investigadora posdoctoral CONICET. Simulación computacional de biomoléculas, modelado de grano grueso y aprendizaje automático.",
    eyebrow: "San Rafael, Mendoza · Argentina",
    rol: "Simulación computacional de biomoléculas & Machine Learning",
    lede:
      "Doctora en Ingeniería (mención Tecnologías Químicas) e Ingeniera Química. " +
      "Investigo cómo interactúan proteínas y péptidos con polielectrolitos y superficies cargadas, " +
      "combinando simulaciones de Monte Carlo y dinámica molecular con modelos de grano grueso y " +
      "aprendizaje automático. Escribo código científico en Python y Fortran, y enseño matemática y " +
      "simulación en la universidad.",
    email: "paotorres89@gmail.com",
    telefono: "+54 9 260 430-5636",
    telefonoLink: "tel:+5492604305636",

    /* Fecha de última actualización del sitio (formato ISO AAAA-MM-DD). */
    actualizado: "2026-08-21",

    /* Foto: dejalo en null o poné "foto.jpg" (cuadrada, ~400 px). */
    foto: null,
    fotoAlt: "Retrato de Paola Beatriz Torres"
  },

  /* --------------------------------------------------------------- LINKS */
  links: {
    orcid: "https://orcid.org/0000-0001-9335-8367",
    scholar: "https://scholar.google.com/citations?user=IGoJvPAAAAAJ&hl=es",
    linkedin: "https://www.linkedin.com/in/paolabtorres/",
    github: "https://github.com/paobtorres"
  },

  /* Perfiles académicos, se muestran en el hero y en Publicaciones. */
  perfiles: [
    { tipo: "orcid",    label: "ORCID",          valor: "0000-0001-9335-8367", href: "https://orcid.org/0000-0001-9335-8367" },
    { tipo: "scholar",  label: "Google Scholar", valor: "Perfil de citas",     href: "https://scholar.google.com/citations?user=IGoJvPAAAAAJ&hl=es" }
  ],

  stats: [
    { valor: "8",    label: "artículos indexados" },
    { valor: "1",    label: "capítulo de libro" },
    { valor: "28",   label: "trabajos en congresos" },
    { valor: "2018", label: "docente desde" }
  ],

  tarjeta: {
    titulo: "De un vistazo",
    filas: [
      { k: "Posición",  v: "Investigadora Posdoctoral CONICET" },
      { k: "Grupo",     v: "Bionanotecnología y Sistemas Complejos (UTN&nbsp;–&nbsp;UNSL&nbsp;–&nbsp;CONICET)" },
      { k: "Docencia",  v: "Ayudante de Primera, UTN&nbsp;FRSR" },
      { k: "Doctorado", v: "Ingeniería, mención Tecnologías Químicas (UTN, 2024)" },
      { k: "Grado",     v: "Ingeniería Química (UNCuyo)" },
      { k: "Ubicación", v: "San Rafael, Mendoza, Argentina" }
    ]
  },

  /* -------------------------------------------------------------- PERFIL */
  perfil: {
    parrafos: [
      "Soy Ingeniera Química y Doctora en Ingeniería. Mi trabajo consiste en <strong>traducir preguntas fisicoquímicas a modelos computacionales</strong>: cómo se comporta una proteína cuando cambia el pH, por qué forma un complejo con una cadena de polielectrolito, o qué condiciones hacen que un péptido se adsorba sobre un sustrato cargado.",
      "Para responderlas escribo simulaciones de <strong>Monte Carlo a pH constante</strong> y de <strong>dinámica molecular</strong>, construyo <strong>modelos de grano grueso</strong> y proceso los resultados con Python. En los últimos años sumé <strong>aprendizaje automático</strong> a ese flujo de trabajo: para predecir observables costosos de simular, para transferir información entre escalas de modelado y para análisis de imágenes.",
      "Ese cruce entre ciencia de materiales blandos y ciencia de datos es el eje de mi etapa actual: un proyecto 2025&ndash;2028 sobre glicomacropéptidos de caseína donde el aprendizaje automático es la pieza que conecta la simulación atomística con los modelos de grano grueso.",
      "También me dedico a la docencia desde 2018 &mdash;matemática de grado, cursos de posgrado en modelado molecular y un curso de Git para principiantes&mdash; y a dirigir becarios y tesistas."
    ],
    areas: [
      "Simulación computacional", "Monte Carlo a pH constante", "Dinámica molecular",
      "Modelado de grano grueso", "Materia blanda", "Fisicoquímica de proteínas",
      "Polielectrolitos", "Machine Learning", "Ciencia de datos"
    ],
    idiomas: [
      { k: "Español", v: "Nativo" },
      { k: "Inglés",  v: "Avanzado · First Certificate in English (Cambridge, 2016)" },
      { k: "Francés", v: "Básico" }
    ]
  },

  skills: [
    { grupo: "Lenguajes",     items: ["Python", "Fortran", "SQL", "Java", "Bash"] },
    { grupo: "Datos y ML",    items: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "Redes neuronales", "Power BI"] },
    { grupo: "Simulación",    items: ["ESPResSo", "pyMBE", "Monte Carlo", "Dinámica molecular", "Modelos coarse-grained"] },
    { grupo: "Visualización", items: ["Matplotlib", "QtGrace", "PovRay"] },
    { grupo: "Herramientas",  items: ["Linux", "Git", "LaTeX / Overleaf", "R Markdown", "Jupyter"] },
    { grupo: "Transversales", items: ["Docencia", "Escritura científica", "Dirección de becarios", "Revisión por pares"] }
  ],

  /* ---------------------------------------------------------- ACTUALIDAD */
  actualidad: [
    {
      etiqueta: "Investigación",
      titulo: "Investigadora Posdoctoral CONICET",
      lugar: "Grupo Vinculado Bionanotecnología y Sistemas Complejos (UTN – UNSL – CONICET), San Rafael",
      periodo: "Ago 2024 – presente",
      detalle: "Desarrollo modelos de aprendizaje automático para predecir resultados de simulaciones de proteínas y colaboro en un modelo CNN para procesamiento de imágenes. Supervisión: Prof. Nicolás A. García.",
      destacado: true
    },
    {
      etiqueta: "Proyecto I+D",
      titulo: "Glicomacropéptidos de caseína con multiescala + ML",
      lugar: "PID UTN · SRPAEC298 · Dir. Prof. Dr. Claudio F. Narambuena",
      periodo: "Abr 2025 – Mar 2028",
      detalle: "Investigadora en un proyecto que estudia péptidos intrínsecamente desordenados combinando dinámica molecular atomística, modelos de grano grueso ajustados por aprendizaje automático y Monte Carlo a pH constante."
    },
    {
      etiqueta: "Docencia",
      titulo: "Ayudante de Primera — Ciencias Básicas",
      lugar: "Facultad Regional San Rafael, UTN",
      periodo: "2018 – presente",
      detalle: "Análisis Matemático, Álgebra y Geometría Analítica, Sistemas Dinámicos I. Material de cátedra publicado en repositorios abiertos."
    },
    {
      etiqueta: "Open source",
      titulo: "Desarrolladora en pyMBE",
      lugar: "the Python-based Molecule Builder for ESPResSo",
      periodo: "Oct 2022 – presente",
      detalle: "Refactorización de la librería sobre Pandas para mejorar la gestión y trazabilidad de partículas, y extensión del builder para crear proteínas globulares."
    }
  ],

  /* ------------------------------------------------------- PROYECTOS DE IA */
  iaEstados: ["Todos", "En curso", "Planificado"],
  ia: [
    { estado: "En curso", titulo: "ML para predicción de observables en simulaciones de proteínas", periodo: "2024 – presente",
      resumen: "Modelos supervisados que aprenden de corridas de simulación previas para anticipar observables fisicoquímicos sin pagar el costo completo de una nueva simulación.",
      stack: ["Python", "Scikit-learn", "PyTorch", "Pandas"], contexto: "Posdoctorado CONICET" },
    { estado: "En curso", titulo: "CNN para procesamiento de imágenes científicas", periodo: "2024 – presente",
      resumen: "Desarrollo colaborativo de una red convolucional para análisis automático de imágenes, con un pipeline de carga y preprocesamiento propio.",
      stack: ["PyTorch", "OpenCV", "NumPy"], contexto: "Trabajo en equipo · repo imagenes_radar" },
    { estado: "En curso", titulo: "Grano grueso del glicomacropéptido de caseína asistido por ML", periodo: "2025 – 2028",
      resumen: "Proyecto marco (PID UTN SRPAEC298): entender las propiedades fisicoquímicas de una familia de péptidos intrínsecamente desordenados mediante simulación multiescala potenciada por aprendizaje automático.",
      stack: ["Multiescala", "Machine Learning", "Monte Carlo", "ESPResSo"], contexto: "Dir. Prof. Dr. Claudio F. Narambuena · UTN" },
    { estado: "Planificado", titulo: "Fase I — Dinámica molecular atomística de cadenas CMP", periodo: "Etapa del PID 2025–2028",
      resumen: "Simulaciones atomísticas de cadenas de glicomacropéptido con distintos grados de glicosilación, variando campos de fuerza, modelos de agua, salinidad y pH, contrastadas contra datos experimentales.",
      stack: ["Dinámica molecular", "Campos de fuerza", "Validación experimental"], contexto: "Hoja de ruta del proyecto" },
    { estado: "Planificado", titulo: "Fase II — Transferencia de escala potenciada por aprendizaje automático", periodo: "Etapa del PID 2025–2028",
      resumen: "Ajuste de modelos de grano grueso que reproduzcan los hallazgos atomísticos, usando aprendizaje automático como mecanismo principal de transferencia de información entre escalas.",
      stack: ["Coarse-graining", "Optimización", "Machine Learning"], contexto: "Hoja de ruta del proyecto" },
    { estado: "Planificado", titulo: "Fase III — Fenómenos complejos con Monte Carlo a pH constante", periodo: "Etapa del PID 2025–2028",
      resumen: "Con el modelo de grano grueso ya validado, explorar adsorción sobre sustratos de diversa índole e interacción con otras macromoléculas mediante Monte Carlo a pH constante.",
      stack: ["Monte Carlo", "constant-pH", "Adsorción"], contexto: "Hoja de ruta del proyecto" }
  ],
  iaNota: "Las etapas marcadas como <em>Planificado</em> corresponden al plan de trabajo formal del PID UTN SRPAEC298 (2025&ndash;2028).",

  /* ------------------------------------------------------- PUBLICACIONES */
  /* El primero es el filtro que arranca activo: los artículos son el
     resultado que más interesa a quien llega a la página. `pubTodas` marca
     cuál de las etiquetas no filtra nada. */
  pubTipos: ["Artículos", "Capítulos", "Congresos", "Todas"],
  pubTodas: "Todas",
  publicaciones: [
    { tipo: "Artículos", anio: 2025,
      autores: "Baldor, S.; Enatarriaga-Scull, M. N.; Genna-Coronel, A. G.; <b>Torres, P. B.</b>; Narambuena, C. F.; Boeris, V.",
      titulo: "Segregative phase separation in aqueous systems of whey protein and carboxymethylcellulose under isoionic conditions",
      fuente: "Agrociencia Uruguay, 29(NE1), e1602", doi: "10.31285/agro.29.1602" },
    { tipo: "Artículos", anio: 2024,
      autores: "Beyer, D.; <b>Torres, P. B.</b>; Pineda, S. P.; Narambuena, C. F.; Grad, J.-N.; Košovan, P.; Blanco, P. M.",
      titulo: "pyMBE: the Python-based Molecule Builder for ESPResSo",
      fuente: "The Journal of Chemical Physics, 161(2), 022502", doi: "10.1063/5.0216389", destacado: true },
    { tipo: "Artículos", anio: 2024,
      autores: "<b>Torres, P. B.</b>; Baldor, S.; Quiroga, E.; Ramirez-Pastor, A. J.; Spelzini, D.; Boeris, V.; Narambuena, C. F.",
      titulo: "Modulation of the electrostatic potential around α-lactalbumin using oligoelectrolyte chains, pH and salt concentration",
      fuente: "Soft Matter, 20, 2100–2112", doi: "10.1039/D3SM01414B", destacado: true },
    { tipo: "Artículos", anio: 2022,
      autores: "<b>Torres, P. B.</b>; Blanco, P. M.; Garcés, J. L.; Narambuena, C. F.",
      titulo: "The electrostatic potential inside and around α-lactalbumin: Fluctuations and mean-field models",
      fuente: "The Journal of Chemical Physics, 157(20), 205101", doi: "10.1063/5.0122275", destacado: true },
    { tipo: "Artículos", anio: 2022,
      autores: "Ingrassia, R.; <b>Torres, P. B.</b>; Bojanich, L.; Ratti, J.; Baldor, S.; Ramunno, C.; Dotta, G.; Vidal Tesón, A.; Forastieri, P.; Soazo, M.; Spelzini, D.; Narambuena, C. F.; Boeris, V.",
      titulo: "Concentration of proteins and fat from whey by coacervation: Evaluation of its incorporation in bread",
      fuente: "Journal of Food Processing and Preservation, 46(2), e16297", doi: "10.1111/jfpp.16297" },
    { tipo: "Artículos", anio: 2019,
      autores: "<b>Torres, P. B.</b>; Quiroga, E.; Ramirez-Pastor, A. J.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interaction between β-Lactoglobuline and Weak Polyelectrolyte Chains: A Study Using Monte Carlo Simulation",
      fuente: "The Journal of Physical Chemistry B, 123(41), 8617–8627", doi: "10.1021/acs.jpcb.9b03276" },
    { tipo: "Artículos", anio: 2017,
      autores: "López Ortiz, J. I.; <b>Torres, P. B.</b>; Quiroga, E.; Narambuena, C. F.; Ramirez-Pastor, A. J.",
      titulo: "Adsorption of three-domain antifreeze proteins on ice: a study using LGMMAS theory and Monte Carlo simulations",
      fuente: "Physical Chemistry Chemical Physics, 19(46), 31377–31388", doi: "10.1039/C7CP06618J" },
    { tipo: "Artículos", anio: 2017,
      autores: "<b>Torres, P. B.</b>; Bojanich, L.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Protonation of β-lactoglobulin in the presence of strong polyelectrolyte chains: a study using Monte Carlo simulation",
      fuente: "Colloids and Surfaces B: Biointerfaces, 160, 161–168", doi: "10.1016/j.colsurfb.2017.09.018" },

    { tipo: "Capítulos", anio: 2018,
      autores: "Spelzini, D.; <b>Torres, P. B.</b>; Franchetti, M. C.; Tobares, T.; Sánchez-Varretti, F.; Narambuena, C. F.; Boeris, V.",
      titulo: "Tratamiento del suero lácteo con polisacáridos ionizables: recuperación y concentración de proteínas",
      fuente: "En F. Freire Costa (ed.), <i>Recuperación Sostenible de Residuos: Manual de procedimientos para el desarrollo de procesos innovadores</i>, pp. 45–71, 1.ª ed.",
      id: "ISBN 978-85-7851-226-2" },

    /* ---- Congresos: listado completo ---- */
    { tipo: "Congresos", anio: 2022, autores: "<b>Torres, P. B.</b>; Baldor, S.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional del efecto del pH y la concentración de sal en el potencial electrostático de α-lactoalbúmina",
      fuente: "CLICAP VI — Congreso Latinoamericano de Ingeniería y Ciencias Aplicadas · San Rafael, Mendoza", id: "ISBN 978-987-46333-3-0" },
    { tipo: "Congresos", anio: 2022, autores: "Baldor, S.; <b>Torres, P. B.</b>; Narambuena, C. F.; Boeris, V.",
      titulo: "Panificados fortificados con proteínas de lactosuero: aportes a la sustentabilidad y seguridad alimentaria",
      fuente: "CLICAP VI — Congreso Latinoamericano de Ingeniería y Ciencias Aplicadas · San Rafael, Mendoza", id: "ISBN 978-987-46333-3-0" },
    { tipo: "Congresos", anio: 2022, autores: "<b>Torres, P. B.</b>; Blanco, P. M.; Garcés, J. L.; Narambuena, C. F.",
      titulo: "Estudio computacional del efecto del pH y la concentración de sal en el potencial electrostático de α-lactoalbúmina",
      fuente: "SiModAr — Simulación y Modelado en Argentina · Virtual" },
    { tipo: "Congresos", anio: 2022, autores: "<b>Torres, P. B.</b>; Blanco, P. M.; Garcés, J. L.; Narambuena, C. F.",
      titulo: "Estudio computacional del efecto del pH y la concentración de sal en el potencial electrostático de α-lactoalbúmina",
      fuente: "VI Jornadas de Intercambio y Difusión de Resultados de Doctorandos en Ingeniería · Virtual" },
    { tipo: "Congresos", anio: 2021, autores: "<b>Torres, P. B.</b>; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza: un estudio mediante simulaciones computacionales",
      fuente: "XI EnIDI — Encuentro de Investigadores y Docentes de Ingeniería", id: "ISBN 978-950-42-0220-2" },
    { tipo: "Congresos", anio: 2021, autores: "<b>Torres, P. B.</b>; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza: un estudio mediante simulaciones computacionales",
      fuente: "IX IDETEC — Congreso de Investigaciones y Desarrollos en Tecnologías y Ciencia", id: "ISBN 978-987-4998-69-9" },
    { tipo: "Congresos", anio: 2021, autores: "<b>Torres, P. B.</b>; Baldor, S.; Quiroga, E.; Ramirez-Pastor, A. J.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza",
      fuente: "XXII CAFQI — Congreso Argentino de Fisicoquímica e Química Inorgánica · Virtual" },
    { tipo: "Congresos", anio: 2021, autores: "<b>Torres, P. B.</b>; Baldor, S.; Quiroga, E.; Ramirez-Pastor, A. J.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza",
      fuente: "TREFEMAC XVIII — Congreso Regional de Física Estadística y Aplicaciones a la Materia Condensada · Virtual" },
    { tipo: "Congresos", anio: 2020, autores: "<b>Torres, P. B.</b>; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza",
      fuente: "VIII Foro Tecnológico · Facultad Regional San Rafael, UTN" },
    { tipo: "Congresos", anio: 2020, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y polielectrolitos fuertes",
      fuente: "V Jornadas de Intercambio y Difusión de Resultados de Doctorandos en Ingeniería · Virtual" },
    { tipo: "Congresos", anio: 2019, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Formación selectiva de complejos entre proteínas del suero lácteo y cadenas de polielectrolito fuerte: simulación de Monte Carlo",
      fuente: "XIII Simposio Argentino de Polímeros · Buenos Aires" },
    { tipo: "Congresos", anio: 2019, autores: "Vázquez, A.; López, S.; <b>Torres, P. B.</b>; Ruiz Pestaña, L.; Hamer, M.; Narambuena, C. F.",
      titulo: "Simulación computacional de la formación y estabilidad de nanotubos de porfirinas autoensambladas",
      fuente: "X EnIDI — Encuentro de Investigadores y Docentes de Ingeniería · Mendoza" },
    { tipo: "Congresos", anio: 2019, autores: "López, S.; <b>Torres, P. B.</b>; Franchetti, M. C.; Narambuena, C. F.",
      titulo: "Estudio computacional de la interacción entre α-lactoalbúmina y polielectrolito",
      fuente: "X EnIDI — Encuentro de Investigadores y Docentes de Ingeniería · Mendoza" },
    { tipo: "Congresos", anio: 2019, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Formación selectiva de complejos entre proteínas del suero lácteo y cadenas de polielectrolito fuerte",
      fuente: "TREFEMAC XVII — Congreso Regional de Física Estadística · San Luis" },
    { tipo: "Congresos", anio: 2018, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y una cadena de polielectrolito débil: un estudio computacional",
      fuente: "VII Congreso Internacional de Ciencia y Tecnología de los Alimentos · Córdoba", id: "ISBN 978-987-45380-9-3" },
    { tipo: "Congresos", anio: 2018, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y una cadena de polielectrolito débil: un estudio computacional",
      fuente: "CLICAP V — Congreso Latinoamericano de Ingeniería y Ciencias Aplicadas · San Rafael, Mendoza", id: "ISBN 978-987-46333-1-6" },
    { tipo: "Congresos", anio: 2018, autores: "Ramunno, C.; Ratti, J.; <b>Torres, P. B.</b>; Narambuena, C. F.; Spelzini, D.; Boeris, V.",
      titulo: "Incorporación de un concentrado de proteínas y materia grasa del lactosuero en alimentos",
      fuente: "CLICAP V — Congreso Latinoamericano de Ingeniería y Ciencias Aplicadas · San Rafael, Mendoza" },
    { tipo: "Congresos", anio: 2018, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y una cadena de polielectrolito débil",
      fuente: "TREFEMAC XVI — Congreso Regional de Física Estadística · Mar del Plata, Buenos Aires" },
    { tipo: "Congresos", anio: 2017, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional de la interacción entre β-lactoglobulina y polielectrolitos",
      fuente: "102.ª Reunión de la Asociación Física Argentina · La Plata, Buenos Aires" },
    { tipo: "Congresos", anio: 2017, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional de la interacción entre β-lactoglobulina y polielectrolitos",
      fuente: "TREFEMAC XV — Congreso Regional de Física Estadística · Santa Rosa, La Pampa" },
    { tipo: "Congresos", anio: 2017, autores: "López Ortiz, J. I.; <b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Narambuena, C. F.",
      titulo: "Adsorción sobre hielo de proteínas de tres dominios: teoría y simulación de Monte Carlo",
      fuente: "TREFEMAC XV — Congreso Regional de Física Estadística · Santa Rosa, La Pampa" },
    { tipo: "Congresos", anio: 2017, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Computational study of the interaction between β-lactoglobulin and polyelectrolytes",
      fuente: "School on Biological Soft Matter (ICTP-SAIFR) · São Paulo, Brasil" },
    { tipo: "Congresos", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "VI Foro Tecnológico · Facultad Regional San Rafael, UTN" },
    { tipo: "Congresos", anio: 2016, autores: "<b>Torres, P. B.</b>; Bojanich, L.; Dotta, G.; Ingrassia, R.; Sánchez-Varretti, F.; Spelzini, D.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional y experimental de la interacción entre proteínas de suero lácteo y polielectrolitos",
      fuente: "VI Congreso Internacional de Ciencia y Tecnología de los Alimentos · Córdoba" },
    { tipo: "Congresos", anio: 2016, autores: "Bojanich, L.; Dotta, G.; Ingrassia, R.; <b>Torres, P. B.</b>; Narambuena, C. F.; Soazo, M.; Boeris, V.",
      titulo: "Recuperación de proteínas del suero lácteo por tratamiento con alginato",
      fuente: "VI Congreso Internacional de Ciencia y Tecnología de los Alimentos · Córdoba" },
    { tipo: "Congresos", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "XVI SEPROSUL — Semana de Ingeniería de Producción Sudamericana · San Rafael, Mendoza" },
    { tipo: "Congresos", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "101.ª Reunión de la Asociación Física Argentina · San Miguel de Tucumán" },
    { tipo: "Congresos", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "Primer Workshop Latinoamericano de Modelado Molecular y Simulación Computacional · CABA" }
  ],

  /* ---------------------------------------------------------- REPOSITORIOS */
  repos: [
    { nombre: "pyMBE", url: "https://github.com/paobtorres/pyMBE", lang: "Python", destacado: true,
      desc: "the Python-based Molecule Builder for ESPResSo. Librería para construir moléculas de arquitectura compleja en simulaciones de dinámica molecular. Aporté la refactorización sobre Pandas y la creación de proteínas globulares.",
      tags: ["Simulación", "ESPResSo", "Pandas", "Publicado en J. Chem. Phys."] },
    { nombre: "curso_git_essentials", url: "https://github.com/paobtorres/curso_git_essentials", lang: "Markdown", estrellas: 21,
      desc: "Material teórico y práctico del curso «Git Essentials — curso básico para principiantes» dictado en UTN FRSR.",
      tags: ["Docencia", "Git", "Material abierto"] },
    { nombre: "gitessentials2026", url: "https://github.com/paobtorres/gitessentials2026", lang: "Python",
      desc: "Edición 2026 del curso de Git: ejercicios actualizados y ejemplos guiados para nuevas cohortes.",
      tags: ["Docencia", "Git"] },
    { nombre: "project_data_science", url: "https://github.com/paobtorres/project_data_science", lang: "Jupyter Notebook",
      desc: "Proyecto integrador de la carrera de Data Science: análisis exploratorio, preparación de datos y modelado predictivo end-to-end.",
      tags: ["Data Science", "EDA", "Machine Learning"] },
    { nombre: "imagenes_radar", url: "https://github.com/paobtorres/imagenes_radar", lang: "HTML",
      desc: "Carga automática de imágenes: pipeline de ingesta y preprocesamiento para el trabajo de análisis de imágenes con redes convolucionales.",
      tags: ["Automatización", "Imágenes", "Pipeline"] },
    { nombre: "sistemas_dinamicos_I", url: "https://github.com/paobtorres/sistemas_dinamicos_I", lang: "Python", estrellas: 2,
      desc: "Notebooks y recursos de la cátedra Sistemas Dinámicos I (Álgebra y Geometría Analítica) en UTN FRSR.",
      tags: ["Docencia", "Matemática"] }
  ],
  repoNota: "Perfil completo y actividad reciente en <a href='https://github.com/paobtorres' target='_blank' rel='noopener'>github.com/paobtorres</a>.",

  /* ---------------------------------------------------------- TRAYECTORIA */
  experiencia: [
    { periodo: "Ago 2024 – presente", rol: "Investigadora Posdoctoral (Beca CONICET 2024–2027)",
      org: "Grupo Vinculado Bionanotecnología y Sistemas Complejos, UTN – UNSL – CONICET", lugar: "San Rafael, Mendoza", actual: true,
      puntos: ["Modelos de machine learning para predicción de resultados de simulaciones de proteínas.",
               "Colaboración en el desarrollo de un modelo CNN para procesamiento de imágenes.",
               "Supervisión: Prof. Nicolás A. García."] },
    { periodo: "May – Nov 2022", rol: "Estancia de investigación",
      org: "Department of Physical and Macromolecular Chemistry, Charles University", lugar: "Praga, República Checa",
      puntos: ["Simulaciones a pH constante de polielectrolitos interactuando con péptidos y proteínas.",
               "Desarrollo de código Python para visualización y gestión de datos de simulación.",
               "Refactorización colaborativa de pyMBE dentro del ecosistema ESPResSo.",
               "Supervisión: Prof. Dr. Peter Košovan."] },
    { periodo: "2018 – Jul 2024", rol: "Becaria Doctoral CONICET",
      org: "Grupo Vinculado Bionanotecnología y Sistemas Complejos, UTN – UNSL – CONICET", lugar: "San Rafael, Mendoza",
      puntos: ["Modelos de grano grueso de proteínas globulares dentro del software ESPResSo.",
               "Simulación de proteínas y polielectrolitos con el algoritmo de Monte Carlo.",
               "Análisis y procesamiento de variables observables; mentoría de estudiantes.",
               "Dirección: Prof. Dr. Claudio F. Narambuena · Codirección: Prof. Dra. Evelina Quiroga."] },
    { periodo: "2017 – presente", rol: "Integrante",
      org: "Grupo de Físico Química de Sistemas Complejos (SICO), UTN FRSR", lugar: "San Rafael, Mendoza",
      puntos: ["Dirección: Prof. Dr. Fabricio O. Sánchez-Varretti · Res. R.CSU N.º 2506/16."] },
    { periodo: "2015 – 2016", rol: "Becaria de iniciación a la investigación",
      org: "Facultad de Ciencias Aplicadas a la Industria, UNCuyo", lugar: "San Rafael, Mendoza",
      puntos: ["Evaluación de la bioactividad y degradabilidad de recubrimientos usados en biomedicina. Dirección: Prof. Dra. María José Santillán."] }
  ],

  formacion: [
    { periodo: "2018 – 2024", rol: "Doctorado en Ingeniería, mención Tecnologías Químicas",
      org: "Facultad Regional Buenos Aires, Universidad Tecnológica Nacional",
      puntos: ["Tesis: «Estudio teórico-computacional de la purificación e inmovilización de proteínas de interés biotecnológico».",
               "Dirección: Prof. Dr. Claudio F. Narambuena · Codirección: Prof. Dra. Evelina Quiroga."] },
    { periodo: "2024", rol: "Análisis de datos con Redes Neuronales Artificiales (70 h)",
      org: "Universidad Nacional de la Patagonia Austral" },
    { periodo: "2023 – 2024", rol: "Carrera de Data Science", org: "Coderhouse",
      puntos: ["Precedida por el curso de Data Analytics (2023)."] },
    { periodo: "2007 – 2015", rol: "Ingeniería Química", org: "Universidad Nacional de Cuyo",
      puntos: ["Orientación en Petroquímica (2013) y orientación en Medio Ambiente (2015)."] }
  ],

  becas: [
    "Beca Posdoctoral CONICET · 2024–2027",
    "Beca CONICET de Finalización de Doctorado · 2021–2024",
    "Beca de formación de doctores para fortalecer áreas de I+D+i, UTN · 2018–2021",
    "Premio al mejor trabajo — Área Agropecuaria, Sociedad de Biología de Rosario · 2017",
    "Beca parcial · Second SIRAH Open Lab on Coarse Grained Simulations, Institut Pasteur de Montevideo · 2017",
    "Beca completa · School on Biological Soft Matter, ICTP-SAIFR, São Paulo · 2017",
    "Beca completa · Escuela de Simulación Computacional Avanzada en Química, CELFI · 2016"
  ],

  /* ---------------------------------------------------------------- CURSOS */
  cursos: [
    { estado: "Dictado", titulo: "Git Essentials — curso básico para principiantes", rol: "Profesora a cargo",
      institucion: "Facultad Regional San Rafael, UTN", anio: "2023 · edición 2026 en preparación",
      horas: "10 h", modalidad: "Presencial",
      descripcion: "Introducción práctica al control de versiones para quienes nunca usaron Git: repositorios locales, commits, ramas, resolución de conflictos y trabajo colaborativo en remoto. Pensado para estudiantes y docentes de ingeniería que escriben código científico.",
      temas: ["Control de versiones", "Ramas y merge", "GitHub", "Flujo colaborativo"],
      repo: "https://github.com/paobtorres/curso_git_essentials", repoLabel: "Material del curso" },
    { estado: "Dictado", titulo: "Modelado y simulación molecular para ciencias e ingeniería", rol: "Ayudante",
      institucion: "Universidad Nacional del Sur", anio: "2024", horas: "45 h", modalidad: "Curso de posgrado",
      descripcion: "Fundamentos y práctica de la simulación molecular aplicada a problemas de ciencia e ingeniería: construcción de modelos, métodos de muestreo y análisis de observables.",
      temas: ["Monte Carlo", "Dinámica molecular", "Modelos de grano grueso"] },
    { estado: "Dictado", titulo: "Modelado y simulación molecular para ciencias e ingeniería", rol: "Ayudante",
      institucion: "Facultad Regional San Rafael, UTN", anio: "2018", horas: "45 h", modalidad: "Curso de posgrado",
      descripcion: "Primera edición del curso de posgrado en simulación molecular dictado en la Facultad Regional San Rafael.",
      temas: ["Simulación computacional", "Fisicoquímica"] }
  ],
  cursoNota: "¿Te interesa alguno de estos cursos para tu institución o grupo? Escribime y lo coordinamos.",

  /* -------------------------------------------------------------- DOCENCIA */
  docencia: [
    "<b>Ayudante de Primera</b> — Análisis Matemático, Álgebra y Geometría Analítica, Sistemas Dinámicos I · UTN FRSR · 2018–presente",
    "<b>Ayudante de Primera</b> — Matemática III · FCAI, UNCuyo · abr–jul 2018",
    "<b>Profesora</b> — Química, curso de ingreso a Medicina · Universidad de Mendoza · ago–nov 2017"
  ],

  becarios: [
    "<b>Dirección de tesis de maestría</b> — Maestría en Ciencia de Datos · en curso",
    "<b>Romina Mellado</b> · 2020–2021 · Grupo Vinculado Bionanotecnología y Sistemas Complejos",
    "<b>Silvina López</b> · 2019–2020 · Beca de iniciación a la investigación, UTN FRSR",
    "<b>Emmanuel A. Luengo</b> · 2018 · Beca de iniciación a la investigación, UTN FRSR"
  ],

  evaluacion: [
    "Evaluadora de artículos · XII EnIDI · 2023",
    "Evaluadora de artículos · IX Foro Tecnológico · 2022",
    "Evaluadora de artículos · XI EnIDI · 2021",
    "Evaluadora de artículos · VIII Foro Tecnológico · 2020"
  ],

  /* ---------------------------------------------------------- COLABOREMOS */
  buscoIntro: "Trabajo desde San Rafael, Mendoza, y colaboro de forma remota con grupos e instituciones de cualquier lugar. Estas son las cuatro formas en que suelo sumarme a un proyecto:",
  busco: [
    { icono: "sim", titulo: "Simulación molecular y modelado",
      desc: "Diseño y ejecución de simulaciones de Monte Carlo y dinámica molecular, construcción de modelos de grano grueso y análisis de observables fisicoquímicos. Para grupos de investigación y para I+D en industria de alimentos, farma o materiales.",
      modalidad: "Remoto o presencial" },
    { icono: "datos", titulo: "Ciencia de datos y machine learning",
      desc: "Análisis exploratorio, preparación de datos, modelos predictivos y visualización. Especialmente cómodo cuando los datos vienen de un proceso físico o experimental y hay que entender el fenómeno, no solo ajustar una métrica.",
      modalidad: "Freelance · por proyecto" },
    { icono: "codigo", titulo: "Código científico y reproducibilidad",
      desc: "Refactorización de código de simulación heredado, migración de Fortran a Python, control de versiones, empaquetado, documentación y puesta a punto para que un tercero pueda correr y reproducir los resultados.",
      modalidad: "Freelance · por proyecto" },
    { icono: "ensenar", titulo: "Formación a medida",
      desc: "Cursos y talleres para universidades, grupos de investigación e institutos: Git para científicos, Python científico, simulación molecular. Adapto duración y nivel al grupo.",
      modalidad: "Virtual o presencial" }
  ],
  /* Cierre de «Colaboremos». No repite lo que ya dicen las cuatro tarjetas de
     arriba: va directo a qué hacer ahora. ORCID y Scholar no se repiten acá,
     ya están en el encabezado y en Publicaciones. */
  contacto: {
    titulo: "¿Tenés un proyecto en mente?",
    texto: "Contame qué necesitás y te digo con franqueza si puedo ayudarte, en qué plazos y de qué manera. Si no es lo mío, te oriento hacia quien pueda.",
    boton: "Escribime",
    items: [
      { tipo: "email",    label: "Email",     valor: "paotorres89@gmail.com", href: "mailto:paotorres89@gmail.com" },
      { tipo: "tel",      label: "Teléfono",  valor: "+54 9 260 430-5636",    href: "tel:+5492604305636" },
      { tipo: "linkedin", label: "LinkedIn",  valor: "in/paolabtorres",       href: "https://www.linkedin.com/in/paolabtorres/" },
      { tipo: "github",   label: "GitHub",    valor: "paobtorres",            href: "https://github.com/paobtorres" },
      { tipo: "lugar",    label: "Ubicación", valor: "San Rafael, Mendoza, Argentina" }
    ]
  },

  pie: "Hecho con HTML, CSS y JavaScript. Sin dependencias externas."
};
