const dataCursos = [
  {
      id: "tema-1",
      nombre: "Herramientas Tecnológicas y Software Libre",
      desc: "AGREGAR DESCRIPCION.",
      subgrupos: [
          {
              id: "sub-1",
              nombre: "Aprendizaje y Transformación Digital",
              cursos: [
                { titulo: "Aplicación de SCRUM con el Gestor de Proyectos TAIGA", desc: "Procesos de la metodología SCRUM a través de TAIGA.", mod: "Virtual" },
                { titulo: "Introducción a la Metodología SCRUM", desc: "Marco conceptual para el manejo de flujos ágiles.", mod: "Virtual" },
                { titulo: "Aplicación Práctica de la Metodología SCRUM", desc: "Gestión de proyectos con ejemplos prácticos.", mod: "Virtual" },
                { titulo: "Desarrollo de Estrategias Formativas no Presenciales", desc: "Fundamentos de plataformas tecnológicas.", mod: "Virtual" },
                { titulo: "Orientaciones Metodológicas para REA", desc: "Diseño y elaboración de Recursos Educativos Abiertos.", mod: "Virtual" },
                { titulo: "Herramientas Didácticas en la Enseñanza", desc: "Uso de herramientas en la construcción del aprendizaje.", mod: "Virtual" },
                { titulo: "Metodología Ágil para Procesos Formativos", desc: "Estrategias de diseño instruccional ágil.", mod: "Virtual" },
                { titulo: "Arquitectura Orientada a Servicios (SOA)", desc: "Prácticas de organización fundamentales.", mod: "Virtual" },
                { titulo: "Ingeniería de Software", desc: "Conocer el ciclo de vida del desarrollo de software.", mod: "Virtual" },
                { titulo: "Interoperabilidad para la Transformación Digital", desc: "Fundamentos en el sector público.", mod: "Virtual" },
                { titulo: "Gestión de Proyectos Tecnológicos", desc: "Elementos que intervienen en la gestión de proyectos.", mod: "Virtual" },
                { titulo: "Diagnóstico Estratégico", desc: "Métodos y prácticas para procesos de diagnóstico.", mod: "Virtual" },
                { titulo: "Formulación de Proyectos Científico-Tecnológicos", desc: "Metodología de marco lógico.", mod: "Virtual" },
                { titulo: "Instalación y Configuración Canaima GNU/Linux", desc: "Historia y proceso de instalación.", mod: "Virtual" }
              ]
          },
          {
              id: "sub-2",
              nombre: "Software",
              cursos: [
                { titulo: "Sistemas Expertos", desc: "Metodología de desarrollo y estructuras lógicas.", mod: "Virtual" },
                { titulo: "Desarrollo de Sistemas Expertos y PROLOG", desc: "Automatización de procesos mediante Prolog.", mod: "Virtual" },
                { titulo: "Pensamiento Lógico", desc: "Lógica aplicada a soluciones tecnológicas.", mod: "Virtual" },
                { titulo: "Programación Java", desc: "Sintaxis y organización de programas.", mod: "Virtual" },
                { titulo: "Programación PHP", desc: "POO y estructuras de control.", mod: "Virtual" },
                { titulo: "PHP para Formularios Web", desc: "Manejo de GET, POST, cookies y sesiones.", mod: "Virtual" },
                { titulo: "Framework Laravel", desc: "Estructura del framework mediante ejercicio práctico.", mod: "Virtual" },
                { titulo: "Programación Python", desc: "Control de flujo y estructuras de datos.", mod: "Virtual" },
                { titulo: "LibreOffice Writer Básico", desc: "Conocimientos teóricos para el procesador de textos.", mod: "Virtual" },
                { titulo: "LibreOffice Writer Intermedio", desc: "Herramientas avanzadas de edición.", mod: "Virtual" },
                { titulo: "GitLab como Repositorio", desc: "Implementación de Git para desarrollo.", mod: "Virtual" },
                { titulo: "WordPress para Principiantes", desc: "Desarrollo de sitios web básicos.", mod: "Virtual" },
                { titulo: "SCRATCH para Competencias STEAM", desc: "Pensamiento lógico y metodología Scratch.", mod: "Virtual" }
              ]
          }
      ]
  },
  {
      id: "tema-2",
      nombre: "TEMA 2",
      desc: "AQUÍ TAMBIÉN.",
      subgrupos: [
          {
              id: "sub-3",
              nombre: "SUBGRUPO 1",
              cursos: [
                  { titulo: "CURSO 1", desc: "DESCRIPCIÓN.", mod: "Presencial" },
                  { titulo: "CURSO 2", desc: "OTRA DESCRIPCIÓN.", mod: "Presencial" }
              ]
          }
      ]
  }
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
    const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbyZzFteCkMwoZdrMXuf4pXR2yu1n-2rdG6PxhbIRhR2TZ2X8D225EhhVX85ZgY40npW/exec";

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
