const dataCursos = [
  {
      id: "tema-1",
      nombre: "Herramientas Tecnológicas y Software Libre",
      desc: "AGREGAR DESCRIPCION.",
      subgrupos: [
          {
              id: "sub-1-1",
              nombre: "Aprendizaje y Transformación Digital",
              cursos: [
                { titulo: "Aplicación de SCRUM con el Gestor de Proyectos TAIGA", desc: "Aplicar los procesos de la metodología SCRUM a través del gestor de proyectos TAIGA.", mod: "Virtual" },
                { titulo: "Introducción a la Metodología SCRUM", desc: "Conocer el marco conceptual que engloba Introducción a la Metodología Scrum para el manejo de flujo de trabajo durante el desarrollo de proyectos ágiles.", mod: "Virtual" },
                { titulo: "Aplicación Práctica de la Metodología SCRUM", desc: "Aplicar la metodología SCRUM como marco de trabajo en la gestión de proyectos de las organizaciones, a través de ejemplos prácticos y herramientas digitales.", mod: "Virtual" },
                { titulo: "Introducción al Desarrollo de Estrategias Formativas no Presenciales", desc: "Conocer los fundamentos, características y tipologías de las diversas herramientas tecnológicas y/o plataformas, para el desarrollo de estrategías formativas no presenciales.", mod: "Virtual" },
                { titulo: "Orientaciones Metodológicas para la Elaboración de Recursos Educativos Abiertos (REA) en el Aprendizaje Ubícuo", desc: "Conocer las buenas prácticas para el diseño y elaboración de Recursos Educativos Abiertos (REA) y su uso efectivo en el aprendizaje ubícuo.", mod: "Virtual" },
                { titulo: "Introducción al Desarrollo de Estrategias y Herramientas Didácticas en la Enseñanza-Aprendizaje", desc: "Conocer el uso de herramientas y estrategias didácticas en la construcción de la enseñanza-aprendizaje.", mod: "Virtual" },
                { titulo: "Aplicación de Metodología Ágil para el Diseño de Procesos Formativos no Presenciales", desc: "Desarrollar acciones y estrategias de diseño instruccional ágil, para la construcción efectiva de procesos formativos no presenciales.", mod: "Virtual" },
                { titulo: "Introducción a la Arquitectura Orientada a Servicios", desc: "Conocer las prácticas de organización fundamentales que se relacionan directamente con Arquitectura Orientada a Servicios.", mod: "Virtual" },
                { titulo: "Introducción a la Ingeniería de Software", desc: "Conocer el ciclo de vida que tiene el desarrollo de un software y sus fases.", mod: "Virtual" },
                { titulo: "Introducción a la Interoperabilidad para la Transformación Digital del Estado", desc: "Conocer los fundamentos y principios básicos de la interoperabilidad en el sector público para la transformación digital del Estado.", mod: "Virtual" },
                { titulo: "Introducción a la Gestión de Proyectos Tecnológicos", desc: "Identificar los elementos más relevantes que intervienen en la gestión de proyectos Tecnológicos.", mod: "Virtual" },
                { titulo: "Nociones Básicas de Enfoques de Desarrollo en un Proyecto Tecnológico", desc: "Conocer los Enfoques de Desarrollo de un proyecto y su relación con el Ciclo de Vida de un proyecto.", mod: "Virtual" },
                { titulo: "Introducción al Diagnóstico Estratégico para Proyectos Tecnológicos", desc: "Identificar los principales elementos, métodos y prácticas que orientan la implementación de un proceso de diagnóstico aplicable a diferentes contextos en el marco de la planificación estratégica, táctica y operativa de cualquier organización tecnológica.", mod: "Virtual" },
                { titulo: "Introducción al Documento Inicial de Proyectos Tecnológicos", desc: "Conocer las principales fases para la elaboración de un documento inicial de un proyecto tecnológico.", mod: "Virtual" },
                { titulo: "Formulación y Evaluación de Proyectos Científico-Tecnológicos", desc: "Metodologías de marco lógico, análisis de viabilidad técnica y económica, y gestión de riesgos en proyectos I+D.", mod: "" },
                { titulo: "Ciclo de Vida de un Proyecto Tecnológico", desc: "Conocer los conceptos básicos sobre el Ciclo de Vida ciclo de vida de un proyecto para la aplicación efectiva en la gestión de proyectos en Tecnologías de Información.", mod: "Virtual" },
                { titulo: "Elaboración De Citas Referenciales En Los Trabajos Científicos", desc: "Conocer los diferentes sistemas de citado en la escritura de textos científicos", mod: "Presencial" },
                { titulo: "Instalación y Configuración Canaima GNU/Linux", desc: "Comprender la historia de Linux y las buenas prácticas en el proceso de instalación de Canaima GNU/Linux.", mod: "Presencial" },
                { titulo: "Orientaciones para el Proceso de Instalación de Canaima GNU/Linux", desc: "Comprender la historia de Linux y las buenas prácticas en el proceso de instalación de Canaima GNU/Linux.", mod: "Virtual" }              ]
          },
          {
              id: "sub-1-2",
              nombre: "Software",
              cursos: [
                { titulo: "Fundamentos de los Sistemas Expertos", desc: "Conocer la metodología de desarrollo, componentes y estructuras lógicas de un sistema experto para la automatización de procesos.", mod: "Virtual" },
                { titulo: "Introducción al Desarrollo de Sistemas Expertos y Lenguaje de Programación PROLOG", desc: "Conocer las pautas metodológicas para el desarrollo de un Sistema Experto así como, las estructuras lógicas para la automatización de proceso y la importancia del uso del lenguaje de programación Prolog.", mod: "Virtual" },
                { titulo: "Principios Esenciales del Pensamiento Lógico para Soluciones Tecnológicas", desc: "Conocer los principios esenciales del pensamiento lógico para soluciones tecnológicas.", mod: "Virtual" },
                { titulo: "Fundamentos del Lenguaje de Programación Java", desc: "Conocer los fundamentos de la programación en Java a través de su sintaxis, organización de un programa y sus estructuras de control y de almacenamiento.", mod: "Virtual" },
                { titulo: "Conociendo el Lenguaje de Programación PHP", desc: "Conocer los fundamentos de la Programación Orientada a Objetos, estructuras de control y de almacenamiento, así como el proceso de instalación del lenguaje en Linux.", mod: "Virtual" },
                { titulo: "Uso de PHP para el Desarrollo de Formularios Web", desc: "Incorporar los métodos GET y POST, cookies e identificación de sesiones en el desarrollo de un proyecto web con el lenguaje de programación PHP.", mod: "Virtual" },
                { titulo: "Manejo de la Estructura de Laravel", desc: "Conocer la estructura de Laravel mediante un ejercicio práctico inicial.", mod: "Virtual" },
                { titulo: "Programación Básica con Python", desc: "Conocer los fundamentos de los lenguajes de programación Python, su control de flujo y las estructuras de datos para el desarrollo de software.", mod: "Virtual" },
                { titulo: "Aplicaciones Ofimáticas Libres - Nivel Básico", desc: "Aplicar herramientas ofimáticas que integran la suite Libreoffice para el desarrollo de diferentes tipos de documentos, hojas de cálculos y presentaciones de acuerdo al funcionamiento básico y uso de cada una de ellas.", mod: "Virtual" },
                { titulo: "Introducción al Uso de LibreOffice Writer", desc: "Desarrollar conocimientos teóricos básicos necesarios para iniciarse en el uso del procesador de texto de la aplicación ofimática Libreoffice", mod: "Virtual" },
                { titulo: "Writer Intermedio", desc: "Writer Intermedio", mod: "Virtual" },
                { titulo: "Uso de GitLab como Repositorio para la Gestión de Versiones de un Proyecto", desc: "Conocer las funciones del repositorio de código GitLab y del sistema de control de versiones Git para su implementación como herramienta de apoyo en el desarrollo de un software.", mod: "Virtual" },
                { titulo: "Orientaciones para la Elaboración de Prompts Efectivos para Interactuar con IA", desc: " Interpretar las orientaciones para la elaboración de prompts efectivos que permitan la optimización de los parámetros de información y respuestas de un chatbot.", mod: "Virtual" },
                { titulo: "Primeros Pasos para el Diseño de un Sitio Web con WordPress", desc: "Comprender el desarrollo de un tipo de página web inicial con las herramientas basicas de WordPress.", mod: "Virtual" },
                { titulo: "Conociendo los Fundamentos Legales de las Licencias Libres", desc: "Manejar los fundamentos del licenciamiento libre a través de instrumentos legales sobre la base filosófica del Software Libre y el marco legal vigente en Venezuela.", mod: "Virtual" },
                { titulo: "Desarrollo de las Competencias STEAM a través del Entorno de Programación SCRATCH", desc: "Usar la metodología de Scratch para el desarrollo del pensamiento lógico y las competencias STEAM.", mod: "Virtual" },
                { titulo: "Didácticas para el Desarrollo de Competencias STEAM y Pensamiento Lógico en Niños, Niñas y Adolescentes, con SCRATCH", desc: "Comprender algunas estrategia didácticas que orienten el desarrollo de habilidades y destrezas en las áreas de ciencia, tecnología, ingeniería, arte y matemáticas (STEAM) y el pensamiento lógico en niñas, niños y adolescentes, utilizando SCRATCH.", mod: "Virtual" }             
]
          },
          {
              id: "sub-1-3",
              nombre: "Ciencia de Datos",
              cursos: [
                { titulo: "Creatividad Visual ", desc: "Capacitar a los participantes en los fundamentos del diseño gráfico a través del estudio de la colorimetría, el manejo de herramientas de canvas y la creación de flyers, con el objetivo de desarrollar", mod: "Presencial" },
                { titulo: "Comuna en la era Digital", desc: "Consolidar y ampliar las herramientas para el trabajo del poder popular y de nuestro equipo para el fortalecimiento", mod: "Presencial" },
                { titulo: "Escuela para Padres y Familias Digitales", desc: "El propósito de esta acción formativa es empoderar a los padres y/o representantes con las competencias necesarias para guiar a sus hijos e hijas en el uso consciente, responsable de Internet y herramientas", mod: "Presencial" },
                { titulo: "Ciudadanía Digital", desc: "Facilitar la inclusión financiera de las personas mayores mediante la capacitación en el uso de herramientas y servicios de banca digital, proporcionando conocimientos sobre la navegación segura en plataformas en línea, la gestión de cuentas, y la realización de transacciones digitales, con el objetivo de empoderar a los participantes para que manejen sus finanzas de manera autónoma y segura en el entorno digital", mod: "Presencial" },
                { titulo: "Fundamentos de la Alfabetización de Datos para las Tecnologías de Información", desc: "Conocer los fundamentos de la alfabetización de datos para la búsqueda de soluciones, desarrollo de software y la toma de decisiones en las tecnologías de información.", mod: "Virtual" },
                { titulo: "Aplicación de las Estrategias Didácticas del Programa Formativo: Aprendiendo de Tecnologías de Información, para la Gestión de Actividades Lúdicas", desc: "Aplicar las estrategias didácticas del Programa Formativo Aprendiendo de Tecnologías de Información, ejerciendo el rol de recreador tecnológico.", mod: "Virtual" },
                { titulo: "Ciencias de la Computación", desc: "Comprender desde una visión integral de las ciencias de la computación, los conceptos y fundamentos básicos del hardware, software, redes de datos, seguridad de la información, informática forense y criptografía, para empoderar a los estudiantes en el uso responsable, eficiente y emancipador de la tecnología en su vida cotidiana y futuras carreras.", mod: "Presencial" },
                { titulo: "Código Binario", desc: "Proporcionar a los participantes, los principios relacionados con el Código Binario, en el marco del proyecto 'Difusión de los principios de las Ciencias de la Computación' para el desarrollo de la ciencia para la vida.", mod: "Presencial" },
                { titulo: "Sensibilización Tecnológica", desc: "Empoderar a los miembros de la comunidad mediante la desmitificación de la tecnología, transformando el miedo o la indiferencia en curiosidad y confianza, para que reconozcan las herramientas digitales como aliados estratégicos en su economía, educación y bienestar diario.", mod: "Presencial" },
                { titulo: "Orientaciones Didácticas y Pedagógicas para el Despliegue de Actividades Formativas Comunitarias", desc: "Conocer algunas buenas prácticas didácticas y estrategias pedagógicas para el desarrollo de actividades formativas en espacios comunitarios.", mod: "Virtual" },
                { titulo: "Fundamentos de la Inteligencia Artificial", desc: "Proporcionar a los participantes una comprensión integral de los principios y técnicas fundamentales de la inteligencia artificial, capacitando a los estudiantes para desarrollar, implementar y evaluar", mod: "Presencial" },
                { titulo: "Blockchain", desc: "Fomentar saberes en el marco del protocolo de intercambio de valores en la cadena de bloques o blockchain", mod: "" },
                { titulo: "Transferencia de Tecnología y Patentes en el Marco Legal Venezolano", desc: "Conceptos básicos de propiedad intelectual, protección de invenciones, licenciamiento y estrategias de comercialización de resultados de investigación.", mod: "" }             
]
          }
      ]
  },
  {
      id: "tema-2",
      nombre: "Ciencias Naturales y Ambientales",
      desc: "AQUÍ TAMBIÉN.",
      subgrupos: [
          {
              id: "sub-2-1",
              nombre: "SUBGRUPO 1",
              cursos: [
                { titulo: "Importancia de los Alacranes", desc: "", mod: "" },
                { titulo: "Enfermedades Intestinales (Lavado de Manos, Agua Segura)", desc: "Fortalecer la capacidad de la comunidad para prevenir la propagación de enfermedades intestinales, promoviendo la adopción de prácticas de higiene y saneamiento ambiental sostenibles.", mod: "" },
                { titulo: "Prevención de enfermedades por Mosquitos", desc: "Fortalecer la capacidad de la comunidad para prevenir la propagación de enfermedades transmitidas por vectores, promoviendo la adopción de prácticas de higiene y saneamiento ambiental sostenibles.", mod: "" },
                { titulo: "La Huella de Carbono", desc: "Proporcionar a los participantes, los principios y conceptos relacionados con la Huella de Carbono, en el marco del proyecto “Tecnologías Verdes” dedicado a la difusión y desarrollo sostenible de tecnologías libres y no contaminantes de para el avance de la ciencia para la vida.", mod: "Presencial" },
                { titulo: "Papel Semilla", desc: "Proporcionar a los participantes, los principios y conceptos relacionados con el Papel Semilla, en el marco del proyecto “Tecnologías Verdes” dedicado a la difusión y desarrollo sostenible de tecnologías libres y no contaminantes de para el avance de la ciencia para la vida.", mod: "Presencial" },
                { titulo: "Chatarra Digital", desc: "Proporcionar a los participantes, los principios y conceptos relacionados con la Chatarra Digital, en el marco del proyecto “Tecnologías Verdes” dedicado a la difusión y desarrollo sostenible de tecnologías libres y no contaminantes de para el avance de la ciencia para la vida.", mod: "Presencial" }              ]
          }
      ]
  },  
  {
      id: "tema-3",C
      nombre: "Administración Pública y Participación Ciudadana",
      desc: "AQUÍ TAMBIÉN.",
      subgrupos: [
          {
              id: "sub-3-1",
              nombre: "Contrataciones Públicas",
              cursos: [
                { titulo: "Contrataciones Públicas", desc: "Preservar el patrimonio público mediante la aplicación de la Ley y su Reglamento.", mod: "" },
                { titulo: "Comisión de Contrataciones", desc: "Conocer las funciones de la Comisión para procesos eficaces.", mod: "" },
                { titulo: "Administración de Contratos", desc: "Realizar la Administración de Contratos de Contratos de forma eficiente y oportuna.", mod: "" },
                { titulo: "Actividades Previas a la Contratación", desc: "Suministrar información sobre las actividades a realizar antes de la selección de contratistas.", mod: "" },
                { titulo: "Fundamentos y Manejo de los Expedientes en Contratación Pública", desc: "Conformación de expedientes en los diversos procedimientos de contratación.", mod: "" },
                { titulo: "Cierre Administrativo de Contratos", desc: "Realizar de forma eficiente y oportuna el cierre administrativo de contratos y la evaluación de desempeño.", mod: "" }
              ]
          },
          {
              id: "sub-3-2",
              nombre: "Bienes Públicos",
              cursos: [
                { titulo: "Aspectos relevantes de la Ley Orgánica de Bienes Públicos", desc: "Disposiciones generales, normativas de la Unidad de Bienes Públicos, S.I. Registro General de Bienes Públicos, adquisición/enajenación/desincorporación y responsabilidades/sanciones.", mod: "" },
                { titulo: "Inducción al Sistema de Registro General de Bienes Públicos", desc: "Instrucciones para la carga exitosa de datos de la institución, máxima autoridad y bienes públicos en el Sistema de Registro.", mod: "" }
              ]
          },
          {
              id: "sub-3-3",
              nombre: "Prevención contra la Corrupción",
              cursos: [
                { titulo: "Cuerpo Nacional contra la Corrupción: una Perspectiva Institucional", desc: "Dar a conocer las competencias atribuidas al CNCC como ente generador de políticas y estrategias anticorrupción.", mod: "" },
                { titulo: "Herramientas para la Prevención en la Lucha contra la Corrupción", desc: "Familiarizar a los participantes sobre el fenómeno de la corrupción y su impacto, para generar una conciencia inclusiva en la lucha por la erradicación de este flagelo.", mod: "" },
                { titulo: "La Corrupción en el Ordenamiento Jurídico Venezolano", desc: "Identificar la regulación jurídica de las conductas establecidas como delitos contra la corrupción en la Ley Contra la Corrupción, generando herramientas para distinguir actos de corrupción.", mod: "" },
                { titulo: "La Contraloría Social como Manifestación del Poder Popular", desc: "Proveer los conocimientos para ejercer correctamente el control, fiscalización y vigilancia de la ejecución del plan de desarrollo comunitario, previniendo irregularidades.", mod: "" },
                { titulo: "Transversalidad de la Función Contralora en la Prevención contra los Delitos de Corrupción", desc: "Dar a los participantes los conocimientos para comprender la actividad que ejerce la Contraloría para juzgar y conocer de las cuentas de personas que tienen bajo su responsabilidad fondos o bienes públicos.", mod: "" },
                { titulo: "Técnicas de Investigación en Caso de Delitos de Corrupción", desc: "Proporcionar los conocimientos necesarios para seguir paso a paso técnicas de investigación que ayuden a observar y analizar hechos de corrupción dentro del marco constitucional.", mod: "" },
                { titulo: "La Corrupción como Delito Precedente en la Legitimación de Capitales", desc: "Identificar las características del delito de Legitimación de Capitales y su regulación en el ordenamiento jurídico venezolano, en conexión con los delitos de corrupción.", mod: "" },
                { titulo: "La Lucha contra la Corrupción y su Incidencia desde el Punto de Vista Internacional", desc: "Determinar las consecuencias que tiene el flagelo de la corrupción desde el punto de vista internacional.", mod: "" },
                { titulo: "La Ética del funcionario Público", desc: "Ofrecer elementos conceptuales respecto a la ética, la importancia de la actuación apegada a ella, y su impacto en la calidad de vida y el desarrollo del país.", mod: "" },
                { titulo: "Transparencia y Rendición de Cuentas en la Gestión Tecnológica", desc: "Mecanismos de acceso a la información pública, elaboración de informes de gestión transparentes, y manejo ético de recursos financieros y materiales.", mod: "" },
                { titulo: "Prevención y Lucha contra la Corrupción en Compras Públicas", desc: "Identificación de vulnerabilidades en procesos de adquisición de bienes y servicios tecnológicos, y aplicación de medidas de prevención de conflictos de interés.", mod: "" },
                { titulo: "Responsabilidad Penal en la Comisión de Delitos contra los Derechos Humanos", desc: "Suministrar un conjunto amplio de conocimientos relacionado con los Derechos Humanos, sus generaciones y las sanciones a quienes los atenten.", mod: "" }
              ]
          },
          {
              id: "sub-3-4",
              nombre: "Gestión Administrativa",
              cursos: [
                { titulo: "Herramientas de Redacción de Comunicaciones en la Administración Pública", desc: "Identificar las principales reglas y prácticas para la redacción de documentos y comunicaciones en el entorno de la Administración Pública.", mod: "" },
                { titulo: "Protocolo de Redacción de Actas Policiales y Cadena de Custodia", desc: "Estudiar el Protocolo para la Redacción de Actas Policiales en el Proceso Penal y el Manual Único de Cadena de Custodia con el fin de unificar criterios.", mod: "" },
                { titulo: "Curso Práctico de Elaboración de Actas de Entrega", desc: "Relacionar las técnicas y pautas requeridas para consolidar destrezas en la estructura y presentación de las actas de entrega, en concordancia con las normas para regular la entrega de los órganos de la administración pública.", mod: "" },
                { titulo: "Elaboración de Artículos Científicos para Revistas Arbitradas", desc: "Estructura IMRyD, (Introducción, Métodos, Resultados y Discusión) técnicas de redacción científica clara y efectiva, y procesos de arbitraje y publicación.", mod: "" }
              ]
          },
          {
              id: "sub-3-5",
              nombre: "Contabilidad Pública",
              cursos: [
                { titulo: "Administración Financiera del Sector Público", desc: "Fundamentos, elementos y funcionalidad de la administración financiera y su interacción con el SIGECOF.", mod: "Presencial" },
                { titulo: "Manejo de la Herramienta Informática SIGECOF - Ejecución Presupuestaria", desc: "Interacción de aplicaciones SIGECOF en etapas de ejecución presupuestaria (compromiso, causado, pago).", mod: "Presencial" },
                { titulo: "Funciones de las Unidades Administrativas de Contabilidad (UAC)", desc: "Conformación, funciones y registro en línea de las UAC y su importancia en la consolidación de Estados Financieros.", mod: "Presencial y Online" },
                { titulo: "Presentación de Estados Financieros", desc: "Lineamientos técnicos que rigen la presentación de Estados Financieros conforme a la normativa legal vigente.", mod: "Presencial y Online" },
                { titulo: "Marco Normativo del Sistema de Contabilidad Pública", desc: "Aspectos generales de obligatorio cumplimiento para el reconocimiento, medición, revelación y presentación de la información financiera.", mod: "Presencial" }
              ]
          },
          {
              id: "sub-3-6",
              nombre: "Auditoría Interna",
              cursos: [
                { titulo: "Curso Básico de Control Interno", desc: "Fomentar el sistema de control interno en la administración pública (ap), desde la perspectiva del marco integrado, para el alcance de los fines del estado venezolano con el acompañamiento de la SUNAI como órgano rector.", mod: "" },
                { titulo: "Modelo Genérico de Control Interno (SUNAI)", desc: "Fomentar la normativa de la SUNAI en materia de Control Interno", mod: "" },
                { titulo: "Estructuras Fundamentales de las Unidades de Auditoría Interna", desc: "Caracterizar las Unidades de Auditoría Interna sobre la base de sus estructuras fundamentales en el contexto de la Administración Pública.", mod: "" },
                { titulo: "Revisión de Actas de Entrega", desc: "Fomentar los conocimientos relacionados con los aspectos jurídicos, técnicos, experimentales y situaciones presentes en la elaboración, suscripción, presentación y posterior revisión de las Actas de Entrega", mod: "" },
                { titulo: "Formación, Participación y Rendición de la Cuenta", desc: "Analizar la normativa legal para la formación, participación y la rendición de la cuenta en órganos y entes de la Administración Pública.", mod: "" },
                { titulo: "La Inspección como Actuación de Control", desc: "Fomentar los conocimientos necesarios acerca de la actuación de control, fundamentada en la investigación de hechos susceptibles a cambios en el tiempo.", mod: "" },
                { titulo: "Plan de Acciones Correctivas", desc: "Generar un entorno de saberes relacionados con el diseño de planes o programas que encaminen medidas apropiadas para evitar la reincidencia.", mod: "" },
                { titulo: "Conceptos Elementales de Auditoría", desc: "Promover las nociones fundamentales a partir de las concepciones teórico-prácticas de la auditoría sobre la base del marco legal.", mod: "" },
                { titulo: "Normas Generales de Auditoría de Estado", desc: "Analizar los aspectos fundamentales de las Normas Generales de Auditoría de Estado.", mod: "" },
                { titulo: "El Desarrollo Estructurante en las Etapas de la Auditoría de Estado (Planificación, Ejecución, Comunicación de Resultados y Seguimiento)", desc: "Caracterizar las etapas correspondientes al desarrollo de la Auditoría de Estado en la Administración Pública.", mod: "" },
                { titulo: "Programas de Trabajo de Auditoría de Estado", desc: "Caracterizar la estructura de los planes de auditoría, a fin de documentar procedimientos a seguir y para validar las regulaciones de cumplimiento en la Administración.", mod: "" },
                { titulo: "Muestreo Estadístico para Auditoría Interna", desc: "Generar conocimientos conceptuales y metodológicos en el ámbito estadístico, aplicables durante el muestreo de auditoría en la Administración Pública", mod: "" },
                { titulo: "La Evaluación del Riesgo en la Planificación de Auditoría", desc: "Generar un compendio de saberes entorno a la Evaluación del Riesgo en la Planificación de la Auditoría Interna, en órganos y entes centralizados y descentralizados funcionalmente", mod: "" },
                { titulo: "Elaboración y Referenciación de los Papeles de Trabajo de Auditoría de Estado", desc: "Fomentar la importancia de los papeles de trabajo en el marco de la compilación documental y de la información obtenida en la auditoría", mod: "" },
                { titulo: "Hallazgos de Auditoría", desc: "Generar conocimientos en el sentido crítico acerca de los procesos de recopilación y síntesis de información relacionada con la entidad, actividad, situación o asunto en el marco de la Auditoría de Estado", mod: "" },
                { titulo: "Aspectos Técnicos y Legales del Informe de Auditoría", desc: "Caracterizar el Informe de Auditoría sobre la base de sus normas, redacción y estructura, durante la labor técnica del auditor, a modo preliminar, definitivo y de seguimiento.", mod: "" },
                { titulo: "Examen y Calificación de la Cuenta", desc: "Analizar la normativa legal para el Examen y Calificación de la Cuenta en el marco de las competencias de las Unidades de Auditoría Interna.", mod: "" },
                { titulo: "Formación de Expediente", desc: "Fomentar las técnicas apropiadas en la formación del expediente, durante la documentación del procedimiento administrativo.", mod: "" },
                { titulo: "Valoración de los Informes de Auditoría de Estado", desc: "Establecer el carácter de los informes de Auditoría de Estado sobre la base de los principios, normas de registro y valoración", mod: "" },
                { titulo: "Potestad Investigativa", desc: "Analizar los elementos fundamentales establecidos en la Ley y en el Marco Normativo, referido a la Potestad Investigativa", mod: "" },
                { titulo: "Determinación de Responsabilidades", desc: "Fomentar los fundamentos constitucionales, legales y procedimentales relacionados con la determinación de responsabilidades y la sanciones que pudieran acarrear.", mod: "" },
                { titulo: "Valoración Jurídica del Informe de Resultados", desc: "Analizar los elementos de la valoración jurídica para determinación de responsabilidades.", mod: "" },
                { titulo: "Fundamentos, Normas y Análisis Inicial acerca de la Estructura General del SIGECOF", desc: "Caracterizar los fundamentos y las particularidades que componen el SIGECOF, a partir del análisis acerca de su estructura", mod: "" },
                { titulo: "La Administración Financiera del Sector Público Concebido en el marco de la Organización y Sistemas", desc: "Definir los procedimientos en la organización y sistemas en el marco de la Administración Financiera del Sector Público.", mod: "" },
                { titulo: "Elementos prácticos del SIGECOF y sus Saberes en la Administración Pública Nacional, Regional, Centralizada, Descentralizada y Municipal", desc: "Fomentar los saberes de la praxis metodológica en los procesos elementales del SIGECOF.", mod: "" },
                { titulo: "Gestión por Procesos y Resultados", desc: "Fomentar los saberes teóricos relacionados con los procesos en las definiciones estructurantes en el marco del Control y la Auditoría Interna.", mod: "" },
                { titulo: "Planificación Estratégica", desc: "Definir los procesos organizativos con proyección a corto, mediano y largo plazo en entornos gerenciales y otros ámbitos de la Administración Pública.", mod: "" },
                { titulo: "Indicadores de Gestión", desc: "Generar conocimientos metodológicos en el ámbito de la elaboración de indicadores que coadyuven en la búsqueda de la eficiencia y la efectividad de los procesos y procedimientos en la gestión pública.", mod: "" },
                { titulo: "Elementos Fundamentales de la Administración Financiera del Sector Público", desc: "Definir los elementos fundamentales y legales de la Administración Financiera del Sector Público, de manera inductiva en el marco del Curso sobre el SIGECOF", mod: "" },
                { titulo: "Ley Orgánica de Procedimientos Administrativos", desc: "Analizar los aspectos fundamentales de la Ley y su constitucionalidad en materia de Control y Auditoría Interna de la Administración Pública.", mod: "" },
                { titulo: "Ley Orgánica de la Administración Financiera del Sector Público", desc: "Analizar los aspectos fundamentales de la Ley y su constitucionalidad en materia de Control y Auditoría Interna.", mod: "" },
                { titulo: "Ley Orgánica de la Administración Pública", desc: "Analizar los aspectos fundamentales de la Ley y su constitucionalidad en materia de Control y Auditoría Interna.", mod: "" },
                { titulo: "Ley Sobre Mensaje de Datos y Firmas Electrónicas", desc: "Fomentar el ámbito procedimental, contemplado en la Ley Sobre Mensajes de Datos y Firmas Electrónicas, que rige en el contexto nacional.", mod: "" },
                { titulo: "El Control Fiscal en Cuatro Miradas", desc: "Caracterizar el Sistema Nacional de Control Fiscal, las competencias y los órganos que lo integran.", mod: "" }
              ]
          },
          {
              id: "sub-3-7",
              nombre: "Participación Ciudadana",
              cursos: [
                { titulo: "Conversatorio sobre Formulación de Proyectos Comunitarios, Enmarcados en Ciencia y Tecnología", desc: "Comprender las nociones básicas, de como formular un Proyecto comunitario enmarcado en Ciencia y Tecnología  CANTIDAD DE PARTICIPANTES MÁXIMO 30 MINIMO 20", mod: "Presencial" },
                { titulo: "Contraloría Social y Fortalecimiento del Poder Popular", desc: "Analizar la importancia de la contraloría social en el proceso de fortalecimiento y consolidación del poder popular. Acompañar a los comités responsables de los proyectos comunitarios en el proceso de control y seguimiento social de la ejecución de los mismos.", mod: "Presencial" },
                { titulo: "Presupuesto Participativo", desc: "Analizar los elementos necesarios para la elaboración del presupuesto participativo como etapa fundamental en la elaboración de proyectos comunitarios", mod: "Presencial" },
                { titulo: "Funcionamiento de la OAC", desc: "Comprender las nociones básicas, funciones y competencias de las Oficinas de Atención Ciudadana en el ejercicio de la participación ciudadana", mod: "Mixto" },
                { titulo: "Nociones Básicas de la Participación Comunitaria", desc: "Realizar una aproximación teórica a los conceptos básicos relacionados con el liderazgo y la participación  comunitaria", mod: "Presencial" },
                { titulo: "Mecanismos de Participación Ciudadana", desc: "Marco legal de la participación, herramientas de fiscalización y seguimiento de proyectos (auditoría social), y canalización de denuncias (vía SNCC).", mod: "" },
                { titulo: "Cómo Presentar una Queja, Reclamo o Sugerencia Efectiva (OAC)", desc: "Instruir a los usuarios y ciudadanos en el procedimiento formal y las mejores prácticas para presentar solicitudes, garantizando un trámite eficiente y una respuesta oportuna.", mod: "" },
                { titulo: "Innovación Abierta y Diálogo de Saberes", desc: "Fomento de la participación ciudadana en la generación de soluciones tecnológicas, cocreación y metodologías ágiles (SCRUM básico)", mod: "" },
                { titulo: "Diagnóstico Participativo", desc: "Conocer los elementos esenciales para la elaboración del diagnóstico participativo como parte fundamental en la IAP", mod: "Presencial" }
              ]
          }
      ]
  },
  {
      id: "tema-4",
      nombre: "Liderazgo y Comunicación Efectiva",
      desc: "AQUÍ TAMBIÉN.",
      subgrupos: [
          {
              id: "sub-4-1",
              nombre: "Importancia del Liderazgo",
              cursos: [
                { titulo: "Liderazgo Comunitario", desc: "Desarrollar habilidades de liderazgo en el ámbito comunitario", mod: "Presencial" },
                { titulo: "Nuevas Perspectivas de Liderazgo", desc: "Conocer las nuevas perspectivas de liderazgo con el fin de potenciar las habilidades personales para la conducción de grupos.", mod: "Presencial" },
                { titulo: "Modelo Barrett y el Liderazgo desde la Conciencia", desc: "Conocer las ventajas del Modelo Barrett para la potenciación del liderazgo desde la conciencia.", mod: "Presencial" },
                { titulo: "Liderazgo vs. Jefatura", desc: "Capacitar a los participantes para que desarrollen habilidades de comunicación efectiva, movilización, y sean capaces de diseñar e implementar proyectos colaborativos de impacto positivo y sostenible en la comunidad.", mod: "" },
                { titulo: "El Diálogo como Herramienta Metodológica", desc: "Repensar nuestras formas de comunicación en comunidad para fortalecer el proyecto histórico en común", mod: "Presencial" },
                { titulo: "Marca Personal o Colectiva", desc: "Capacitar a los participantes para que identifiquen su valor único y aprendan a gestionarlo de manera auténtica y coherente, mejorando su reputación, credibilidad e influencia.", mod: "" },
                { titulo: "El Intelectual Orgánico", desc: "Develar el papel que tiene el intelectual en la transformación de las sociedades", mod: "Presencial" }
              ]
          },
          {
              id: "sub-4-2",
              nombre: "Convivencia Social y Laboral",
              cursos: [
                { titulo: "Comunicación Efectiva y Liderazgo", desc: "Identificar la importancia de la comunicación en entornos laborales complejos y el impacto de la inteligencia emocional y la PNL en las relaciones interpersonales.", mod: "" },
                { titulo: "Técnicas De Argumentación y Oratoria", desc: "Ofrecer herramientas en la elaboración de discursos escritos u orales con el fin de coadyuvar a mejorar los distintos procesos de comunicación.", mod: "" },
                { titulo: "Valores Organizacionales", desc: "Identificar los principales Valores Organizacionales que deben estar presentes en todo momento en un ambiente laboral para lograr la mayor eficiencia posible.", mod: "" },
                { titulo: "Potencialidades del círculo de Escucha Profunda y del Autorreconocimiento", desc: "Comprender los procesos de escucha profunda para mejorar las relaciones interpersonales desde el autorreconocimiento de nuestras potencialidades.", mod: "Presencial" }
              ]
          }
      ]
  },
  {
      id: "tema-5",
      nombre: "Actividades Didácticas y Formación Infantil",
      desc: "AQUÍ TAMBIÉN.",
      subgrupos: [
          {
              id: "sub-5-1",
              nombre: "SUBGRUPO 1",
              cursos: [
                { titulo: "Formación de Ética y Valores en Niños, Niñas y Adolescentes", desc: "Promover un programa de formación que eduque de manera integral a todo el personal, padres y representantes, y a los Niñas, Niños y Adolescentes en valores y ética.", mod: "" },
                { titulo: "Robótica Educativa", desc: "Promover la creatividad, el trabajo en equipo y la resolución de problemas a través de actividades prácticas de robótica.", mod: "Presencial" },
                { titulo: "Cuenta Cuentos", desc: "Garantizar la formación en valores, a niños y niñas desde la temprana edad, de una manera más didáctica, pedagógica e interactiva.", mod: "" },
                { titulo: "Juegos y Canciones", desc: "Dar a conocer la importancia de los valores y la ética a través de herramientas lúdicas y didácticas.", mod: "" }
              ]
          }
      ]
  },
  {
      id: "tema-6",
      nombre: "Folklore Venezolano e Identidad Nacional",
      desc: "AQUÍ TAMBIÉN.",
      subgrupos: [
          {
              id: "sub-6-1",
              nombre: "Expresiones Culturales",
              cursos: [
                { titulo: "La Arepera, Palabra que se Come al Derecho y al Revés", desc: "Conocer la historia de la arepera a partir de un viaje culinario desde la nixtamalización (hace 4 mil años) de los granos de maíz a el invento de la harina precocida de maíz (1954) por el ingeniero venezolano Luis Caballero Mejías.", mod: "Presencial" },
                { titulo: "La Yuca Raíz del Casabe", desc: "Conocer las técnicas de elaboración del casabe a través del ingenio y la tecnología ancestral para extraerle el veneno a la yuca brava convertida en la torta de casabe, el mañoco y la naiboa.", mod: "Presencial" },
                { titulo: "Elaboración de Wayunkeras", desc: "Conocer la técnica para la elaboración de muñecas de barro crudo como aporte cultural del pueblo Wayuu.", mod: "Presencial" },
                { titulo: "Elaboración de Leña Artificial", desc: "Conocer la fórmula del Maestro Simón Rodríguez para la elaboración de la leña artificial.", mod: "Presencial" },
                { titulo: "Construcción y Manejo de Títeres", desc: "Impulsar la participación ciudadana a través del teatro de Títeres  CANTIDAD DE PARTICIPANTES MAXIMO 15 MINIMO 10  DIRIGIDO A NIÑOS, JOVENES Y ADULTOS", mod: "Presencial" }
              ]
          },
          {
              id: "sub-6-2",
              nombre: "Identidad Nacional",
              cursos: [
                { titulo: "Ética Bolivariana", desc: "Estudiar la vigencia del pensamiento bolivariano en la construcción de una ética socialista orientada hacia el logro de la mayor suma de felicidad posible.", mod: "Presencial" },
                { titulo: "Identidad Nacional, Sentires Sociales y Culturales que Conforman la Venezolanidad", desc: "Realizar un recorrido histórico cultural por los espacios que constituyen la venezolanidad", mod: "Presencial" },
                { titulo: "Identidad Nacional y Ciencia Abierta", desc: "Producir conocimientos para la vida basados en los saberes y haceres ancestrales.", mod: "Presencial" },
                { titulo: "José Gregorio Hernández: Científico", desc: "Conocer los aportes del Dr. José Gregorio Hernández al ejercicio ético de la ciencia en Venezuela.", mod: "Presencial" },
                { titulo: "José Gregorio Hernández: Escritor", desc: "Conocer los aportes científicos, literarios, filosóficos y epistolares del Dr. José Gregorio Hernández.", mod: "Presencial" },
                { titulo: "José Gregorio Hernández: del Hombre al Santo", desc: "Indagar en los aspectos que llevaron a José Gregorio Hernández a pasar del médico, científico y profesor universitario, al santo del pueblo venezolano.", mod: "Presencial" },
                { titulo: "Detractores del Libertador: Ayer y hoy", desc: "Reflexionar sobre las formas y estrategias que han utilizado los detractores del Libertador, Simón Bolívar, desde el siglo XIX hasta el siglo XXI y los mecanismos de defensa de su legado por los pueblos emancipados.", mod: "Presencial" },
                { titulo: "De Chuquisaca a la 6T", desc: "Develar la génesis del pensamiento conservacionista y ecológico del Simón Bolívar y su concreción en la Revolución Bolivariana.", mod: "Presencial" }
              ]
          },
          {
              id: "sub-6-3",
              nombre: "Políticas Públicas y Ciencias Sociales",
              cursos: [
                { titulo: "Soberanía e Injerencia del Hegemón USA en la Patria Grande Americana", desc: "Develar las políticas injerencistas de los EE.UU. en detrimento de la soberanía de los pueblos Nuestroamericanos.", mod: "Presencial" },
                { titulo: "El Cine de Latinoamérica. Aportes del Relato Cinematográfico de Nuestros Pueblos", desc: "Destacar la importancia y los aportes del cine nuestramericano en la construcción del relato del sujeto latinoamericano.", mod: "Presencial" },
                { titulo: "La Nueva Cara del Fascismo: Cine Foro Para La Paz", desc: "Analizar los efectos del fascismo en las relaciones humanas y sus implicaciones negativas para lograr la paz y la sana convivencia de los pueblos.", mod: "Presencial" },
                { titulo: "El Derecho a Vivir: Cine Foro para la Paz", desc: "Reflexionar sobre los efectos de la intervención norteamericana en los pueblos del Sur a partir de la proyección audiovisual de la película 'Voces Inocentes'", mod: "Presencial" },
                { titulo: "La Gestión Social de la Ciencia como Expresión de la Territorialización del Conocimiento en Venezuela", desc: "Reflexionar sobre los aspectos sustantivos de la gestión social de conocimiento como principio vertebrador de la política de territorialización del conocimiento", mod: "Presencial" },
                { titulo: "La Ciencia Neutral, un Falso Positivo Académico", desc: "Realizar una aproximación histórica desde una perspectiva crítica a la ciencia y su supuesta neutralidad.", mod: "Presencial" },
                { titulo: "Políticas Públicas Transformadoras en Ciencia Y Tecnología", desc: "Comprender los procesos de diseño, aplicación y evaluación de políticas públicas en CTI para las comunidades", mod: "Presencial" },
                { titulo: "Inducción Comités de Innovación y Tecnología", desc: "Dialogo con las comunidades para el fortalecimiento de las Nociones básicas, funciones y alcances de los CIT", mod: "Presencial" },
                { titulo: "Normativa Legal, Referente Jurídico del Accionar Comunitario", desc: "Conocer el conjunto de leyes y normativas que rigen el quehacer comunitario y orientan la planificación y accionar de las organizaciones comunitarias.", mod: "Presencial" },
                { titulo: "Guerra Cognitiva: Efectos y Herramientas para superarla", desc: "Reflexionar sobre los efectos de la guerra cognitiva en el contexto de asedio agresión a los pueblos del mundo.", mod: "Presencial" },
                { titulo: "Herramientas y Habilidades para el Fortalecimiento Psicosocial", desc: "Identificar herramientas y habilidades que fortalezcan la comprensión y reflexión sobre los efectos psicosociales en el contexto de la agresión militar del 3 de enero de 2026", mod: "Presencial" },
                { titulo: "El Cuidado: Nueva forma de estar en el mundo con los otros y la naturaleza", desc: "Reflexionar sobre la necesidad del cuidado como práctica cotidiana para proteger lo esencial humano en el contexto de violencia que vive la humanidad.", mod: "Presencial" },
                { titulo: "La Sistematización de Experiencias Comunitarias", desc: "Adquirir herramientas metodológicas para sistematizar las experiencias en el ámbito comunitario.", mod: "Presencial" }
              ]
          }
      ]
  },
  {
      id: "tema-7",
      nombre: "Vivienda, Hábitat y Desarrollo Urbano",
      desc: "AQUÍ TAMBIÉN.",
      subgrupos: [
          {
              id: "sub-7-1",
              nombre: "SUBGRUPO 1",
              cursos: [
                { titulo: "Cabillas", desc: "", mod: "" },
                { titulo: "Elementos de la Construcción", desc: "", mod: "" },
                { titulo: "Proceso de Construcción de una Vivienda", desc: "", mod: "" },
                { titulo: "Mecánica de Suelos", desc: "", mod: "" },
                { titulo: "Proceso de Fabricación de Cemento", desc: "", mod: "" },
                { titulo: "Estructura", desc: "", mod: "" },
                { titulo: "Construcción", desc: "", mod: "" },
                { titulo: "Cimentación", desc: "", mod: "" },
                { titulo: "Equipo de Seguridad", desc: "", mod: "" },
                { titulo: "Normas COVENIN", desc: "", mod: "" },
                { titulo: "Cartografía Social", desc: "", mod: "" },
                { titulo: "Asesoría en Proyecto", desc: "", mod: "" },
                { titulo: "Control de la Calidad", desc: "", mod: "" }
              ]
          }
      ]
  },
];

let temaActiva = null;
let contadorCursos = 0;
const MAX_CURSOS = 4;

document.addEventListener('DOMContentLoaded', () => {
    renderNivel1();
    agregarBloqueCurso(); 
    document.getElementById('btn-agregar-curso').addEventListener('click', () => {
        if (contadorCursos < MAX_CURSOS) agregarBloqueCurso();
        else alert("Máximo 4 cursos permitidos.");
    });
});

// Lógica de navegación superior
function switchSeccion(mostrarId) {
    ['seccion-grupos', 'seccion-subgrupos', 'seccion-cursos'].forEach(id => {
        document.getElementById(id).classList.add('d-none');
    });
    document.getElementById(mostrarId).classList.remove('d-none');
}

function renderNivel1() {
    temaActiva = null;
    const contenedor = document.getElementById('contenedor-grupos');
    switchSeccion('seccion-grupos');
    contenedor.innerHTML = dataCursos.map(g => `
        <div class="col">
            <div class="nav-card" onclick="seleccionarTema('${g.id}')">
                <h3>${g.nombre}</h3>
                <p class="text-muted small">${g.desc}</p>
            </div>
        </div>
    `).join('');
}

function seleccionarTema(id) {
    temaActiva = dataCursos.find(g => g.id === id);
    const contenedor = document.getElementById('contenedor-subgrupos');
    switchSeccion('seccion-subgrupos');
    contenedor.innerHTML = temaActiva.subgrupos.map(s => `
        <div class="col">
            <div class="nav-card text-center" onclick="seleccionarSubgrupo('${s.id}')">
                <h4 class="mb-0">${s.nombre}</h4>
                <small class="text-primary mt-2 d-block">Ver catálogo →</small>
            </div>
        </div>
    `).join('');
}

function seleccionarSubgrupo(id) {
    const sub = temaActiva.subgrupos.find(s => s.id === id);
    const contenedor = document.getElementById('contenedor-cursos');
    switchSeccion('seccion-cursos');
    contenedor.innerHTML = sub.cursos.map(c => `
        <div class="col">
            <div class="card h-100 shadow-sm border-0 bg-white">
                <div class="card-body">
                    <h6 class="fw-bold text-primary">${c.titulo}</h6>
                    <p class="card-text x-small text-muted">${c.desc}</p>
                    <span class="badge bg-light text-dark border">${c.mod}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function volverAGrupos() { renderNivel1(); }
function volverASubgrupos() { if (temaActiva) seleccionarTema(temaActiva.id); }

// Lógica del Formulario
function agregarBloqueCurso() {
    contadorCursos++;
    const contenedor = document.getElementById('contenedor-seleccion-cursos');
    const index = contadorCursos;
    const div = document.createElement('div');
    div.className = "p-3 border rounded mb-3 bg-white shadow-sm bloque-curso";
    div.id = `bloque-curso-${index}`;
    div.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="badge bg-primary">Preferencia #${index}</span>
            ${index > 1 ? `<button type="button" onclick="eliminarBloque(${index})" class="btn btn-sm btn-link text-danger p-0">Eliminar</button>` : ''}
        </div>
        <div class="row g-2 mb-3">
            <div class="col-md-6">
                <label class="small fw-bold mb-1">Tema</label>
                <select id="tema-${index}" required class="form-select" onchange="actualizarCategorias(${index})">
                    <option value="">-- Seleccionar --</option>
                    ${dataCursos.map(t => `<option value="${t.id}">${t.nombre}</option>`).join('')}
                </select>
            </div>
            <div class="col-md-6">
                <label class="small fw-bold mb-1">Área</label>
                <select id="cat-${index}" required disabled class="form-select" onchange="actualizarCursosVisual(${index})">
                    <option value="">-- Seleccionar --</option>
                </select>
            </div>
        </div>
        <div id="visual-container-${index}">
            <label class="small fw-bold mb-2">Seleccione el Curso:</label>
            <div id="curso-visual-${index}" class="list-group border rounded overflow-auto" style="max-height: 180px; display: none;"></div>
            <div id="placeholder-${index}" class="text-center py-3 border rounded bg-light text-muted x-small">
                Elija un área para mostrar opciones
            </div>
        </div>`;
    contenedor.appendChild(div);
}

function actualizarCategorias(idx) {
    const temaId = document.getElementById(`tema-${idx}`).value;
    const catSelect = document.getElementById(`cat-${idx}`);
    catSelect.innerHTML = '<option value="">-- Seleccionar --</option>';
    document.getElementById(`curso-visual-${idx}`).style.display = 'none';
    document.getElementById(`placeholder-${idx}`).style.display = 'block';

    if (temaId) {
        const tema = dataCursos.find(t => t.id === temaId);
        tema.subgrupos.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.id;
            opt.textContent = s.nombre;
            catSelect.appendChild(opt);
        });
        catSelect.disabled = false;
    } else {
        catSelect.disabled = true;
    }
}

function actualizarCursosVisual(idx) {
  const temaId = document.getElementById(`tema-${idx}`).value;
  const subId = document.getElementById(`cat-${idx}`).value;
  const visual = document.getElementById(`curso-visual-${idx}`);
  const placeholder = document.getElementById(`placeholder-${idx}`);
  
  // 1. Obtener títulos de cursos ya seleccionados en OTROS bloques
  const radiosSeleccionados = Array.from(document.querySelectorAll('input[type="radio"]:checked'))
      .filter(r => !r.name.includes(`radio-${idx}`)) // Excluir los de este mismo bloque
      .map(r => r.value);

  visual.innerHTML = '';

  if (subId) {
      const tema = dataCursos.find(t => t.id === temaId);
      const sub = tema.subgrupos.find(s => s.id === subId);
      
      sub.cursos.forEach((c) => {
          const yaElegido = radiosSeleccionados.includes(c.titulo);
          
          const label = document.createElement('label');
          label.className = `list-group-item list-group-item-action d-flex align-items-start gap-3 py-3 ${yaElegido ? 'disabled bg-light opacity-50' : 'cursor-pointer'}`;
          
          label.innerHTML = `
              <input class="form-check-input mt-1 flex-shrink-0" type="radio" 
                     name="curso-radio-${idx}" value="${c.titulo}" required 
                     ${yaElegido ? 'disabled' : ''}>
              <span>
                  <strong class="d-block ${yaElegido ? 'text-muted' : 'text-dark'}">${c.titulo}</strong>
                  <small class="text-muted">${c.mod} ${yaElegido ? '(Ya seleccionado)' : ''}</small>
              </span>
          `;
          visual.appendChild(label);
      });
      visual.style.display = 'block';
      placeholder.style.display = 'none';
  }
}

function eliminarBloque(idx) {
    document.getElementById(`bloque-curso-${idx}`).remove();
    contadorCursos--;
}

document.getElementById('registro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btnEnvio = e.target.querySelector('button[type="submit"]');
    btnEnvio.disabled = true;
    btnEnvio.innerText = "Enviando...";

    // Recopilar los cursos seleccionados
    const cursosElegidos = Array.from(document.querySelectorAll('input[type="radio"]:checked'))
                                .map(r => r.value);

    const formData = new FormData();
    formData.append('nombre', e.target.querySelector('input[type="text"]').value);
    formData.append('correo', e.target.querySelector('input[type="email"]').value);
    formData.append('telefono', e.target.querySelector('input[type="tel"]').value);
    formData.append('direccion', e.target.querySelectorAll('input[type="text"]')[1].value);
    formData.append('induccion', e.target.querySelector('select').value);
    
    // Añadir hasta 4 cursos
    cursosElegidos.forEach((curso, i) => {
        formData.append(`curso${i+1}`, curso);
    });

    // REEMPLAZA ESTA URL CON LA QUE COPIASTE DE GOOGLE
    const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbwKAPIya9C7hpKanME5fBaO5WM0PHztemFh7iffegUvC58igXhN6XCs3ztEylILDIpI/exec";

    fetch(URL_GOOGLE_SCRIPT, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Importante para evitar bloqueos de seguridad
    })
    .then(() => {
        alert("¡Registro exitoso! Nos pondremos en contacto pronto.");
        e.target.reset();
        location.reload(); // Recarga para limpiar los bloques de cursos
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un problema al enviar. Intenta de nuevo.");
        btnEnvio.disabled = false;
        btnEnvio.innerText = "Enviar Solicitud";
    });
});
