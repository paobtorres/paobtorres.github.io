/* ==========================================================================
   datos.en.js — ENGLISH content. Same keys as datos.js.
   Publication and conference titles keep their original published wording
   (Spanish where that is how they were published) — that is the correct
   citation practice; only the surrounding descriptions are translated.
   ========================================================================== */

const DATOS_EN = {

  ui: {
    idioma: "EN", idiomaOtro: "ES", cambiarIdioma: "Ver en español",
    saltar: "Skip to content",
    tema: "Toggle theme", menu: "Open menu", menuCerrar: "Close menu",
    copiar: "Copy", copiado: "Copied!",
    nav: {
      perfil: "About", actualidad: "Now", trayectoria: "Background",
      ia: "AI projects", publicaciones: "Publications", codigo: "Code",
      cursos: "Teaching", docencia: "Academia", colaborar: "Work with me",
      contacto: "Contact"
    },
    sec: {
      perfil:        { t: "About",              s: "Who I am and what I work on" },
      actualidad:    { t: "Right now",          s: "What I am working on today" },
      trayectoria:   { t: "Background",         s: "Experience and academic training" },
      ia:            { t: "AI projects",        s: "Ongoing lines and 2025–2028 roadmap" },
      publicaciones: { t: "Publications",       s: "Peer-reviewed articles, plus book chapters and conferences" },
      codigo:        { t: "Open source",        s: "Repositories and scientific software" },
      cursos:        { t: "Courses I teach",    s: "Training and graduate courses, with open materials" },
      docencia:      { t: "Academic teaching",  s: "Undergraduate courses, student supervision and peer review" },
      colaborar:     { t: "Work with me",       s: "Academic collaboration, consulting and freelance work" },
      contacto:      { t: "Contact",            s: "Get in touch and let's talk" }
    },
    lbl: {
      areas: "Areas of work", idiomas: "Languages",
      experiencia: "Experience", formacion: "Education",
      becas: "Fellowships and awards", catedras: "Undergraduate courses",
      becarios: "Student supervision",
      evaluacion: "Peer review",
      verRepo: "View repository", verPerfil: "View full profile"
    },
    actualizado: "Last updated"
  },

  meta: {
    tratamiento: "Ph.D. in Engineering",
    nombre: "Paola Beatriz Torres",
    nombreCorto: "Paola B. Torres",
    tituloPagina: "Paola Beatriz Torres, Ph.D. — Computational Simulation & Machine Learning",
    descripcion: "Ph.D. in Engineering (UTN), postdoctoral researcher at CONICET. Computational simulation of biomolecules, coarse-grained modelling and machine learning.",
    eyebrow: "San Rafael, Mendoza · Argentina",
    rol: "Computational simulation of biomolecules & Machine Learning",
    lede:
      "Ph.D. in Engineering (Chemical Technologies) and Chemical Engineer. " +
      "I study how proteins and peptides interact with polyelectrolytes and charged surfaces, " +
      "combining Monte Carlo and molecular dynamics simulations with coarse-grained models and " +
      "machine learning. I write scientific code in Python and Fortran, and teach mathematics and " +
      "simulation at university level.",
    email: "paotorres89@gmail.com",
    telefono: "+54 9 260 430-5636",
    telefonoLink: "tel:+5492604305636",
    actualizado: "2026-08-19",
    foto: null,
    fotoAlt: "Portrait of Paola Beatriz Torres"
  },

  links: {
    orcid: "https://orcid.org/0000-0001-9335-8367",
    scholar: "https://scholar.google.com/citations?user=IGoJvPAAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/paolabtorres/",
    github: "https://github.com/paobtorres"
  },

  perfiles: [
    { tipo: "orcid",   label: "ORCID",          valor: "0000-0001-9335-8367", href: "https://orcid.org/0000-0001-9335-8367" },
    { tipo: "scholar", label: "Google Scholar", valor: "Citation profile",    href: "https://scholar.google.com/citations?user=IGoJvPAAAAAJ&hl=en" }
  ],

  stats: [
    { valor: "8",    label: "indexed articles" },
    { valor: "1",    label: "book chapter" },
    { valor: "28",   label: "conference contributions" },
    { valor: "2018", label: "teaching since" }
  ],

  tarjeta: {
    titulo: "At a glance",
    filas: [
      { k: "Position",  v: "Postdoctoral Researcher, CONICET" },
      { k: "Group",     v: "Bionanotechnology and Complex Systems (UTN&nbsp;–&nbsp;UNSL&nbsp;–&nbsp;CONICET)" },
      { k: "Teaching",  v: "Teaching Assistant, UTN&nbsp;FRSR" },
      { k: "Ph.D.",     v: "Engineering, Chemical Technologies (UTN, 2024)" },
      { k: "Degree",    v: "Chemical Engineering (UNCuyo)" },
      { k: "Location",  v: "San Rafael, Mendoza, Argentina" }
    ]
  },

  perfil: {
    parrafos: [
      "I am a Chemical Engineer and hold a Ph.D. in Engineering. My work is about <strong>turning physicochemical questions into computational models</strong>: how a protein behaves when pH changes, why it forms a complex with a polyelectrolyte chain, or which conditions make a peptide adsorb onto a charged substrate.",
      "To answer those questions I write <strong>constant-pH Monte Carlo</strong> and <strong>molecular dynamics</strong> simulations, build <strong>coarse-grained models</strong> and process the results with Python. In recent years I added <strong>machine learning</strong> to that workflow: to predict observables that are expensive to simulate, to transfer information across modelling scales, and for image analysis.",
      "That intersection between soft matter science and data science is the core of my current stage: a 2025&ndash;2028 project on casein glycomacropeptides where machine learning is the piece connecting atomistic simulation with coarse-grained models.",
      "I have also been teaching since 2018 &mdash;undergraduate mathematics, graduate courses on molecular modelling and an introductory Git course&mdash; and supervising research students."
    ],
    areas: [
      "Computational simulation", "Constant-pH Monte Carlo", "Molecular dynamics",
      "Coarse-grained modelling", "Soft matter", "Protein physical chemistry",
      "Polyelectrolytes", "Machine Learning", "Data science"
    ],
    idiomas: [
      { k: "Spanish", v: "Native" },
      { k: "English", v: "Advanced · First Certificate in English (Cambridge, 2016)" },
      { k: "French",  v: "Basic" }
    ]
  },

  skills: [
    { grupo: "Languages",     items: ["Python", "Fortran", "SQL", "Java", "Bash"] },
    { grupo: "Data and ML",   items: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "Neural networks", "Power BI"] },
    { grupo: "Simulation",    items: ["ESPResSo", "pyMBE", "Monte Carlo", "Molecular dynamics", "Coarse-grained models"] },
    { grupo: "Visualisation", items: ["Matplotlib", "QtGrace", "PovRay"] },
    { grupo: "Tooling",       items: ["Linux", "Git", "LaTeX / Overleaf", "R Markdown", "Jupyter"] },
    { grupo: "Transferable",  items: ["Teaching", "Scientific writing", "Student supervision", "Peer review"] }
  ],

  actualidad: [
    { etiqueta: "Research", titulo: "Postdoctoral Researcher, CONICET",
      lugar: "Bionanotechnology and Complex Systems Group (UTN – UNSL – CONICET), San Rafael",
      periodo: "Aug 2024 – present", destacado: true,
      detalle: "I develop machine learning models to predict protein simulation results and collaborate on a CNN model for image processing. Supervisor: Prof. Nicolás A. García." },
    { etiqueta: "R&D project", titulo: "Casein glycomacropeptides with multiscale modelling + ML",
      lugar: "PID UTN · SRPAEC298 · PI: Prof. Claudio F. Narambuena",
      periodo: "Apr 2025 – Mar 2028",
      detalle: "Researcher on a project studying intrinsically disordered peptides by combining atomistic molecular dynamics, coarse-grained models fitted through machine learning, and constant-pH Monte Carlo." },
    { etiqueta: "Teaching", titulo: "Teaching Assistant — Basic Sciences",
      lugar: "Facultad Regional San Rafael, UTN", periodo: "2018 – present",
      detalle: "Calculus, Algebra and Analytic Geometry, Dynamical Systems I. Course materials published in open repositories." },
    { etiqueta: "Open source", titulo: "Developer on pyMBE",
      lugar: "the Python-based Molecule Builder for ESPResSo", periodo: "Oct 2022 – present",
      detalle: "Refactored the library on top of Pandas to improve particle bookkeeping and traceability, and extended the builder to create globular proteins." }
  ],

  iaEstados: ["All", "Ongoing", "Planned"],
  ia: [
    { estado: "Ongoing", titulo: "ML for predicting observables in protein simulations", periodo: "2024 – present",
      resumen: "Supervised models that learn from previous simulation runs to anticipate physicochemical observables without paying the full cost of a new simulation.",
      stack: ["Python", "Scikit-learn", "PyTorch", "Pandas"], contexto: "CONICET postdoctoral work" },
    { estado: "Ongoing", titulo: "CNN for scientific image processing", periodo: "2024 – present",
      resumen: "Collaborative development of a convolutional network for automated image analysis, with a custom ingestion and preprocessing pipeline.",
      stack: ["PyTorch", "OpenCV", "NumPy"], contexto: "Team work · imagenes_radar repo" },
    { estado: "Ongoing", titulo: "ML-assisted coarse graining of casein glycomacropeptide", periodo: "2025 – 2028",
      resumen: "Umbrella project (PID UTN SRPAEC298): understanding the physicochemical properties of a family of intrinsically disordered peptides through multiscale simulation powered by machine learning.",
      stack: ["Multiscale", "Machine Learning", "Monte Carlo", "ESPResSo"], contexto: "PI: Prof. Claudio F. Narambuena · UTN" },
    { estado: "Planned", titulo: "Phase I — Atomistic molecular dynamics of CMP chains", periodo: "PID stage 2025–2028",
      resumen: "Atomistic simulations of glycomacropeptide chains with different glycosylation degrees, varying force fields, water models, salinity and pH, benchmarked against experimental data.",
      stack: ["Molecular dynamics", "Force fields", "Experimental validation"], contexto: "Project roadmap" },
    { estado: "Planned", titulo: "Phase II — ML-powered scale transfer", periodo: "PID stage 2025–2028",
      resumen: "Fitting coarse-grained models that reproduce the atomistic findings, using machine learning as the main mechanism for transferring information across scales.",
      stack: ["Coarse-graining", "Optimisation", "Machine Learning"], contexto: "Project roadmap" },
    { estado: "Planned", titulo: "Phase III — Complex phenomena with constant-pH Monte Carlo", periodo: "PID stage 2025–2028",
      resumen: "With the validated coarse-grained model, exploring adsorption onto substrates of different nature and interaction with other macromolecules via constant-pH Monte Carlo.",
      stack: ["Monte Carlo", "constant-pH", "Adsorption"], contexto: "Project roadmap" }
  ],
  iaNota: "Stages marked <em>Planned</em> correspond to the formal work plan of PID UTN SRPAEC298 (2025&ndash;2028).",

  pubTipos: ["Articles", "Chapters", "Conferences", "All"],
  pubTodas: "All",
  publicaciones: [
    { tipo: "Articles", anio: 2025,
      autores: "Baldor, S.; Enatarriaga-Scull, M. N.; Genna-Coronel, A. G.; <b>Torres, P. B.</b>; Narambuena, C. F.; Boeris, V.",
      titulo: "Segregative phase separation in aqueous systems of whey protein and carboxymethylcellulose under isoionic conditions",
      fuente: "Agrociencia Uruguay, 29(NE1), e1602", doi: "10.31285/agro.29.1602" },
    { tipo: "Articles", anio: 2024,
      autores: "Beyer, D.; <b>Torres, P. B.</b>; Pineda, S. P.; Narambuena, C. F.; Grad, J.-N.; Košovan, P.; Blanco, P. M.",
      titulo: "pyMBE: the Python-based Molecule Builder for ESPResSo",
      fuente: "The Journal of Chemical Physics, 161(2), 022502", doi: "10.1063/5.0216389", destacado: true },
    { tipo: "Articles", anio: 2024,
      autores: "<b>Torres, P. B.</b>; Baldor, S.; Quiroga, E.; Ramirez-Pastor, A. J.; Spelzini, D.; Boeris, V.; Narambuena, C. F.",
      titulo: "Modulation of the electrostatic potential around α-lactalbumin using oligoelectrolyte chains, pH and salt concentration",
      fuente: "Soft Matter, 20, 2100–2112", doi: "10.1039/D3SM01414B", destacado: true },
    { tipo: "Articles", anio: 2022,
      autores: "<b>Torres, P. B.</b>; Blanco, P. M.; Garcés, J. L.; Narambuena, C. F.",
      titulo: "The electrostatic potential inside and around α-lactalbumin: Fluctuations and mean-field models",
      fuente: "The Journal of Chemical Physics, 157(20), 205101", doi: "10.1063/5.0122275", destacado: true },
    { tipo: "Articles", anio: 2022,
      autores: "Ingrassia, R.; <b>Torres, P. B.</b>; Bojanich, L.; Ratti, J.; Baldor, S.; Ramunno, C.; Dotta, G.; Vidal Tesón, A.; Forastieri, P.; Soazo, M.; Spelzini, D.; Narambuena, C. F.; Boeris, V.",
      titulo: "Concentration of proteins and fat from whey by coacervation: Evaluation of its incorporation in bread",
      fuente: "Journal of Food Processing and Preservation, 46(2), e16297", doi: "10.1111/jfpp.16297" },
    { tipo: "Articles", anio: 2019,
      autores: "<b>Torres, P. B.</b>; Quiroga, E.; Ramirez-Pastor, A. J.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interaction between β-Lactoglobuline and Weak Polyelectrolyte Chains: A Study Using Monte Carlo Simulation",
      fuente: "The Journal of Physical Chemistry B, 123(41), 8617–8627", doi: "10.1021/acs.jpcb.9b03276" },
    { tipo: "Articles", anio: 2017,
      autores: "López Ortiz, J. I.; <b>Torres, P. B.</b>; Quiroga, E.; Narambuena, C. F.; Ramirez-Pastor, A. J.",
      titulo: "Adsorption of three-domain antifreeze proteins on ice: a study using LGMMAS theory and Monte Carlo simulations",
      fuente: "Physical Chemistry Chemical Physics, 19(46), 31377–31388", doi: "10.1039/C7CP06618J" },
    { tipo: "Articles", anio: 2017,
      autores: "<b>Torres, P. B.</b>; Bojanich, L.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Protonation of β-lactoglobulin in the presence of strong polyelectrolyte chains: a study using Monte Carlo simulation",
      fuente: "Colloids and Surfaces B: Biointerfaces, 160, 161–168", doi: "10.1016/j.colsurfb.2017.09.018" },

    { tipo: "Chapters", anio: 2018,
      autores: "Spelzini, D.; <b>Torres, P. B.</b>; Franchetti, M. C.; Tobares, T.; Sánchez-Varretti, F.; Narambuena, C. F.; Boeris, V.",
      titulo: "Tratamiento del suero lácteo con polisacáridos ionizables: recuperación y concentración de proteínas",
      fuente: "In F. Freire Costa (ed.), <i>Recuperación Sostenible de Residuos: Manual de procedimientos para el desarrollo de procesos innovadores</i>, pp. 45–71, 1st ed.",
      id: "ISBN 978-85-7851-226-2" },

    { tipo: "Conferences", anio: 2022, autores: "<b>Torres, P. B.</b>; Baldor, S.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional del efecto del pH y la concentración de sal en el potencial electrostático de α-lactoalbúmina",
      fuente: "CLICAP VI — Latin American Congress of Engineering and Applied Sciences · San Rafael, Mendoza", id: "ISBN 978-987-46333-3-0" },
    { tipo: "Conferences", anio: 2022, autores: "Baldor, S.; <b>Torres, P. B.</b>; Narambuena, C. F.; Boeris, V.",
      titulo: "Panificados fortificados con proteínas de lactosuero: aportes a la sustentabilidad y seguridad alimentaria",
      fuente: "CLICAP VI — Latin American Congress of Engineering and Applied Sciences · San Rafael, Mendoza", id: "ISBN 978-987-46333-3-0" },
    { tipo: "Conferences", anio: 2022, autores: "<b>Torres, P. B.</b>; Blanco, P. M.; Garcés, J. L.; Narambuena, C. F.",
      titulo: "Estudio computacional del efecto del pH y la concentración de sal en el potencial electrostático de α-lactoalbúmina",
      fuente: "SiModAr — Simulation and Modelling in Argentina · Online" },
    { tipo: "Conferences", anio: 2022, autores: "<b>Torres, P. B.</b>; Blanco, P. M.; Garcés, J. L.; Narambuena, C. F.",
      titulo: "Estudio computacional del efecto del pH y la concentración de sal en el potencial electrostático de α-lactoalbúmina",
      fuente: "6th Engineering Doctoral Candidates Research Meeting · Online" },
    { tipo: "Conferences", anio: 2021, autores: "<b>Torres, P. B.</b>; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza: un estudio mediante simulaciones computacionales",
      fuente: "XI EnIDI — Meeting of Engineering Researchers and Lecturers", id: "ISBN 978-950-42-0220-2" },
    { tipo: "Conferences", anio: 2021, autores: "<b>Torres, P. B.</b>; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza: un estudio mediante simulaciones computacionales",
      fuente: "IX IDETEC — Congress on Research and Development in Technology and Science", id: "ISBN 978-987-4998-69-9" },
    { tipo: "Conferences", anio: 2021, autores: "<b>Torres, P. B.</b>; Baldor, S.; Quiroga, E.; Ramirez-Pastor, A. J.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza",
      fuente: "XXII CAFQI — Argentine Congress of Physical and Inorganic Chemistry · Online" },
    { tipo: "Conferences", anio: 2021, autores: "<b>Torres, P. B.</b>; Baldor, S.; Quiroga, E.; Ramirez-Pastor, A. J.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza",
      fuente: "TREFEMAC XVIII — Regional Congress on Statistical Physics and Condensed Matter · Online" },
    { tipo: "Conferences", anio: 2020, autores: "<b>Torres, P. B.</b>; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción de α-lactoalbúmina con cadenas de polielectrolitos de diversa naturaleza",
      fuente: "VIII Technology Forum · Facultad Regional San Rafael, UTN" },
    { tipo: "Conferences", anio: 2020, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y polielectrolitos fuertes",
      fuente: "5th Engineering Doctoral Candidates Research Meeting · Online" },
    { tipo: "Conferences", anio: 2019, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Formación selectiva de complejos entre proteínas del suero lácteo y cadenas de polielectrolito fuerte: simulación de Monte Carlo",
      fuente: "XIII Argentine Symposium on Polymers · Buenos Aires" },
    { tipo: "Conferences", anio: 2019, autores: "Vázquez, A.; López, S.; <b>Torres, P. B.</b>; Ruiz Pestaña, L.; Hamer, M.; Narambuena, C. F.",
      titulo: "Simulación computacional de la formación y estabilidad de nanotubos de porfirinas autoensambladas",
      fuente: "X EnIDI — Meeting of Engineering Researchers and Lecturers · Mendoza" },
    { tipo: "Conferences", anio: 2019, autores: "López, S.; <b>Torres, P. B.</b>; Franchetti, M. C.; Narambuena, C. F.",
      titulo: "Estudio computacional de la interacción entre α-lactoalbúmina y polielectrolito",
      fuente: "X EnIDI — Meeting of Engineering Researchers and Lecturers · Mendoza" },
    { tipo: "Conferences", anio: 2019, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Formación selectiva de complejos entre proteínas del suero lácteo y cadenas de polielectrolito fuerte",
      fuente: "TREFEMAC XVII — Regional Congress on Statistical Physics · San Luis" },
    { tipo: "Conferences", anio: 2018, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y una cadena de polielectrolito débil: un estudio computacional",
      fuente: "VII International Congress on Food Science and Technology · Córdoba", id: "ISBN 978-987-45380-9-3" },
    { tipo: "Conferences", anio: 2018, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y una cadena de polielectrolito débil: un estudio computacional",
      fuente: "CLICAP V — Latin American Congress of Engineering and Applied Sciences · San Rafael, Mendoza", id: "ISBN 978-987-46333-1-6" },
    { tipo: "Conferences", anio: 2018, autores: "Ramunno, C.; Ratti, J.; <b>Torres, P. B.</b>; Narambuena, C. F.; Spelzini, D.; Boeris, V.",
      titulo: "Incorporación de un concentrado de proteínas y materia grasa del lactosuero en alimentos",
      fuente: "CLICAP V — Latin American Congress of Engineering and Applied Sciences · San Rafael, Mendoza" },
    { tipo: "Conferences", anio: 2018, autores: "<b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Interacción entre β-lactoglobulina y una cadena de polielectrolito débil",
      fuente: "TREFEMAC XVI — Regional Congress on Statistical Physics · Mar del Plata, Buenos Aires" },
    { tipo: "Conferences", anio: 2017, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional de la interacción entre β-lactoglobulina y polielectrolitos",
      fuente: "102nd Meeting of the Argentine Physical Society · La Plata, Buenos Aires" },
    { tipo: "Conferences", anio: 2017, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional de la interacción entre β-lactoglobulina y polielectrolitos",
      fuente: "TREFEMAC XV — Regional Congress on Statistical Physics · Santa Rosa, La Pampa" },
    { tipo: "Conferences", anio: 2017, autores: "López Ortiz, J. I.; <b>Torres, P. B.</b>; Ramirez-Pastor, A. J.; Quiroga, E.; Narambuena, C. F.",
      titulo: "Adsorción sobre hielo de proteínas de tres dominios: teoría y simulación de Monte Carlo",
      fuente: "TREFEMAC XV — Regional Congress on Statistical Physics · Santa Rosa, La Pampa" },
    { tipo: "Conferences", anio: 2017, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Computational study of the interaction between β-lactoglobulin and polyelectrolytes",
      fuente: "School on Biological Soft Matter (ICTP-SAIFR) · São Paulo, Brazil" },
    { tipo: "Conferences", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "VI Technology Forum · Facultad Regional San Rafael, UTN" },
    { tipo: "Conferences", anio: 2016, autores: "<b>Torres, P. B.</b>; Bojanich, L.; Dotta, G.; Ingrassia, R.; Sánchez-Varretti, F.; Spelzini, D.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Estudio computacional y experimental de la interacción entre proteínas de suero lácteo y polielectrolitos",
      fuente: "VI International Congress on Food Science and Technology · Córdoba" },
    { tipo: "Conferences", anio: 2016, autores: "Bojanich, L.; Dotta, G.; Ingrassia, R.; <b>Torres, P. B.</b>; Narambuena, C. F.; Soazo, M.; Boeris, V.",
      titulo: "Recuperación de proteínas del suero lácteo por tratamiento con alginato",
      fuente: "VI International Congress on Food Science and Technology · Córdoba" },
    { tipo: "Conferences", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "XVI SEPROSUL — South American Production Engineering Week · San Rafael, Mendoza" },
    { tipo: "Conferences", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "101st Meeting of the Argentine Physical Society · San Miguel de Tucumán" },
    { tipo: "Conferences", anio: 2016, autores: "<b>Torres, P. B.</b>; Ingrassia, R.; Sánchez-Varretti, F.; Ramirez-Pastor, A. J.; Quiroga, E.; Boeris, V.; Narambuena, C. F.",
      titulo: "Purificación de β-lactoglobulina de suero lácteo mediante la formación de un complejo con alginato",
      fuente: "1st Latin American Workshop on Molecular Modelling and Computational Simulation · Buenos Aires" }
  ],

  repos: [
    { nombre: "pyMBE", url: "https://github.com/paobtorres/pyMBE", lang: "Python", destacado: true,
      desc: "the Python-based Molecule Builder for ESPResSo. A library for building molecules with complex architectures in molecular dynamics simulations. I contributed the Pandas-based refactor and globular protein creation.",
      tags: ["Simulation", "ESPResSo", "Pandas", "Published in J. Chem. Phys."] },
    { nombre: "curso_git_essentials", url: "https://github.com/paobtorres/curso_git_essentials", lang: "Markdown", estrellas: 21,
      desc: "Theory and hands-on material for the “Git Essentials — beginners course” taught at UTN FRSR.",
      tags: ["Teaching", "Git", "Open material"] },
    { nombre: "gitessentials2026", url: "https://github.com/paobtorres/gitessentials2026", lang: "Python",
      desc: "2026 edition of the Git course: updated exercises and guided examples for new cohorts.",
      tags: ["Teaching", "Git"] },
    { nombre: "project_data_science", url: "https://github.com/paobtorres/project_data_science", lang: "Jupyter Notebook",
      desc: "Capstone project of the Data Science programme: exploratory analysis, data preparation and end-to-end predictive modelling.",
      tags: ["Data Science", "EDA", "Machine Learning"] },
    { nombre: "imagenes_radar", url: "https://github.com/paobtorres/imagenes_radar", lang: "HTML",
      desc: "Automated image loading: ingestion and preprocessing pipeline for the convolutional image analysis work.",
      tags: ["Automation", "Imaging", "Pipeline"] },
    { nombre: "sistemas_dinamicos_I", url: "https://github.com/paobtorres/sistemas_dinamicos_I", lang: "Python", estrellas: 2,
      desc: "Notebooks and resources for the Dynamical Systems I course (Algebra and Analytic Geometry) at UTN FRSR.",
      tags: ["Teaching", "Mathematics"] }
  ],
  repoNota: "Full profile and recent activity at <a href='https://github.com/paobtorres' target='_blank' rel='noopener'>github.com/paobtorres</a>.",

  experiencia: [
    { periodo: "Aug 2024 – present", rol: "Postdoctoral Researcher (CONICET fellowship 2024–2027)",
      org: "Bionanotechnology and Complex Systems Group, UTN – UNSL – CONICET", lugar: "San Rafael, Mendoza", actual: true,
      puntos: ["Machine learning models to predict protein simulation results.",
               "Collaboration on a CNN model for image processing.",
               "Supervisor: Prof. Nicolás A. García."] },
    { periodo: "May – Nov 2022", rol: "Research stay",
      org: "Department of Physical and Macromolecular Chemistry, Charles University", lugar: "Prague, Czech Republic",
      puntos: ["Constant-pH simulations of polyelectrolytes interacting with peptides and proteins.",
               "Python code for visualisation and management of simulation data.",
               "Collaborative refactoring of pyMBE within the ESPResSo ecosystem.",
               "Supervisor: Prof. Peter Košovan."] },
    { periodo: "2018 – Jul 2024", rol: "CONICET Doctoral Fellow",
      org: "Bionanotechnology and Complex Systems Group, UTN – UNSL – CONICET", lugar: "San Rafael, Mendoza",
      puntos: ["Coarse-grained models of globular proteins within the ESPResSo software.",
               "Simulation of proteins and polyelectrolytes using the Monte Carlo algorithm.",
               "Analysis and processing of observables; student mentoring.",
               "Supervisor: Prof. Claudio F. Narambuena · Co-supervisor: Prof. Evelina Quiroga."] },
    { periodo: "2017 – present", rol: "Member",
      org: "Physical Chemistry of Complex Systems Group (SICO), UTN FRSR", lugar: "San Rafael, Mendoza",
      puntos: ["Head: Prof. Fabricio O. Sánchez-Varretti · Res. R.CSU No. 2506/16."] },
    { periodo: "2015 – 2016", rol: "Undergraduate research fellow",
      org: "Facultad de Ciencias Aplicadas a la Industria, UNCuyo", lugar: "San Rafael, Mendoza",
      puntos: ["Bioactivity and degradability assessment of coatings used in biomedicine. Supervisor: Prof. María José Santillán."] }
  ],

  formacion: [
    { periodo: "2018 – 2024", rol: "Ph.D. in Engineering, Chemical Technologies",
      org: "Facultad Regional Buenos Aires, Universidad Tecnológica Nacional",
      puntos: ["Thesis: “Theoretical and computational study of the purification and immobilisation of proteins of biotechnological interest”.",
               "Supervisor: Prof. Claudio F. Narambuena · Co-supervisor: Prof. Evelina Quiroga."] },
    { periodo: "2024", rol: "Data analysis with Artificial Neural Networks (70 h)",
      org: "Universidad Nacional de la Patagonia Austral" },
    { periodo: "2023 – 2024", rol: "Data Science programme", org: "Coderhouse",
      puntos: ["Preceded by the Data Analytics course (2023)."] },
    { periodo: "2007 – 2015", rol: "Chemical Engineering", org: "Universidad Nacional de Cuyo",
      puntos: ["Petrochemical specialisation (2013) and Environmental specialisation (2015)."] }
  ],

  becas: [
    "CONICET Postdoctoral Fellowship · 2024–2027",
    "CONICET Doctoral Completion Fellowship · 2021–2024",
    "UTN Fellowship for doctoral training in R&D&i priority areas · 2018–2021",
    "Best paper award — Agricultural Area, Rosario Biology Society · 2017",
    "Partial grant · Second SIRAH Open Lab on Coarse Grained Simulations, Institut Pasteur de Montevideo · 2017",
    "Full grant · School on Biological Soft Matter, ICTP-SAIFR, São Paulo · 2017",
    "Full grant · School on Advanced Computational Simulation in Chemistry, CELFI · 2016"
  ],

  cursos: [
    { estado: "Taught", titulo: "Git Essentials — a beginners course", rol: "Lead instructor",
      institucion: "Facultad Regional San Rafael, UTN", anio: "2023 · 2026 edition in preparation",
      horas: "10 h", modalidad: "In person",
      descripcion: "A hands-on introduction to version control for people who have never used Git: local repositories, commits, branches, conflict resolution and collaborative remote work. Aimed at engineering students and lecturers who write scientific code.",
      temas: ["Version control", "Branching and merging", "GitHub", "Collaborative workflow"],
      repo: "https://github.com/paobtorres/curso_git_essentials", repoLabel: "Course material" },
    { estado: "Taught", titulo: "Molecular modelling and simulation for science and engineering", rol: "Teaching assistant",
      institucion: "Universidad Nacional del Sur", anio: "2024", horas: "45 h", modalidad: "Graduate course",
      descripcion: "Foundations and practice of molecular simulation applied to problems in science and engineering: model building, sampling methods and analysis of observables.",
      temas: ["Monte Carlo", "Molecular dynamics", "Coarse-grained models"] },
    { estado: "Taught", titulo: "Molecular modelling and simulation for science and engineering", rol: "Teaching assistant",
      institucion: "Facultad Regional San Rafael, UTN", anio: "2018", horas: "45 h", modalidad: "Graduate course",
      descripcion: "First edition of the graduate course on molecular simulation taught at Facultad Regional San Rafael.",
      temas: ["Computational simulation", "Physical chemistry"] }
  ],
  cursoNota: "Interested in any of these courses for your institution or group? Get in touch and we'll arrange it.",

  docencia: [
    "<b>Teaching Assistant</b> — Calculus, Algebra and Analytic Geometry, Dynamical Systems I · UTN FRSR · 2018–present",
    "<b>Teaching Assistant</b> — Mathematics III · FCAI, UNCuyo · Apr–Jul 2018",
    "<b>Lecturer</b> — Chemistry, Medicine entrance course · Universidad de Mendoza · Aug–Nov 2017"
  ],

  becarios: [
    "<b>Master's thesis supervision</b> — M.Sc. in Data Science · ongoing",
    "<b>Romina Mellado</b> · 2020–2021 · Bionanotechnology and Complex Systems Group",
    "<b>Silvina López</b> · 2019–2020 · Undergraduate research fellowship, UTN FRSR",
    "<b>Emmanuel A. Luengo</b> · 2018 · Undergraduate research fellowship, UTN FRSR"
  ],

  evaluacion: [
    "Paper reviewer · XII EnIDI · 2023",
    "Paper reviewer · IX Technology Forum · 2022",
    "Paper reviewer · XI EnIDI · 2021",
    "Paper reviewer · VIII Technology Forum · 2020"
  ],

  buscoIntro: "I work from San Rafael, Mendoza, and collaborate remotely with groups and institutions anywhere. These are the four ways I usually join a project:",
  busco: [
    { icono: "sim", titulo: "Molecular simulation and modelling",
      desc: "Design and execution of Monte Carlo and molecular dynamics simulations, coarse-grained model building and analysis of physicochemical observables. For research groups and for R&D in food, pharma or materials industries.",
      modalidad: "Remote or on site" },
    { icono: "datos", titulo: "Data science and machine learning",
      desc: "Exploratory analysis, data preparation, predictive models and visualisation. I am especially comfortable when the data comes from a physical or experimental process and the goal is to understand the phenomenon, not just fit a metric.",
      modalidad: "Freelance · per project" },
    { icono: "codigo", titulo: "Scientific code and reproducibility",
      desc: "Refactoring legacy simulation code, migrating from Fortran to Python, version control, packaging, documentation and setup so that someone else can run and reproduce the results.",
      modalidad: "Freelance · per project" },
    { icono: "ensenar", titulo: "Tailored training",
      desc: "Courses and workshops for universities, research groups and institutes: Git for scientists, scientific Python, molecular simulation. I adapt length and level to the audience.",
      modalidad: "Online or in person" }
  ],
  buscoCta: {
    titulo: "Got a project in mind?",
    texto: "Tell me what you need and I'll be straight with you about whether I can help, on what timeline and in what form. If it isn't my field, I'll point you to someone who can.",
    boton: "Get in touch"
  },

  contacto: {
    titulo: "Let's work together",
    texto: "I am interested in collaborations on soft matter simulation, data science and applied machine learning projects, freelance work and teaching proposals. Write to me and I'll reply promptly.",
    items: [
      { tipo: "email",    label: "Email",    valor: "paotorres89@gmail.com", href: "mailto:paotorres89@gmail.com" },
      { tipo: "tel",      label: "Phone",    valor: "+54 9 260 430-5636",    href: "tel:+5492604305636" },
      { tipo: "linkedin", label: "LinkedIn", valor: "in/paolabtorres",       href: "https://www.linkedin.com/in/paolabtorres/" },
      { tipo: "github",   label: "GitHub",   valor: "paobtorres",            href: "https://github.com/paobtorres" },
      { tipo: "orcid",    label: "ORCID",    valor: "0000-0001-9335-8367",   href: "https://orcid.org/0000-0001-9335-8367" },
      { tipo: "scholar",  label: "Scholar",  valor: "Google Scholar",        href: "https://scholar.google.com/citations?user=IGoJvPAAAAAJ&hl=en" },
      { tipo: "lugar",    label: "Location", valor: "San Rafael, Mendoza, Argentina" }
    ]
  },

  pie: "Built with HTML, CSS and JavaScript. No external dependencies."
};
