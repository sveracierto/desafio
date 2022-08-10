function agregarTareas (){
    let tarea = document.getElementById("tarea").value;
    let hora = document.getElementById("hora").value;
    let tareaError = document.getElementById("tareaError");
    let horaError = document.getElementById("horaError");
    let error = false;

    if(tarea == ""){
        tareaError.innerHTML = "Falta completar el Campo Tarea!";
        tareaError.classList.add("is-invalid");
        error = true;
    } else {
        tareaError.innerHTML = "";
        tareaError.className = "";
    }
    if(hora == ""){
        horaError.innerHTML = "Falta completar el Campo Tarea!";
        horaError.classList.add("is-invalid");
        error = true;
    }
        else {
            horaError.innerHTML = "";
            horaError.className = "";
        }
  guardarTareaenLs(tarea,hora)

}
function cargarTareas() {
    return JSON.parse(localStorage.getItem("tareas"));
    }
function guardarTareaenLs (nombre,fecha) {
    const tareas = cargarTareas();
    let total_tareas = tareas.length;
    const tarea = {id:(total_tareas+1), nombre:nombre, fecha:fecha}
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log("Se guardo la Tarea" + nombre);
    limpiarCampos();
    listarTareas();
}
function limpiarCampos (){
    document.getElementById("tarea").value = "";
    document.getElementById("tarea").value = "";
}

function listarTareas (){
    let resultado = document.getElementById("resultado");
    const tareas = cargarTareas();
    let total_tareas = tareas.length;

    if (total_tareas = 0) {
       resultado.innerHTML = '<div class = "alert aler-danger" role="alert">"No se encontraron Tareas!"<div>'
    }
    else {
        tarea.forEach((tarea) => {
            let item = document.createElement("div");
            item.className = "alert alert-warning alert dismissible fade show"
            item.role = "alert";
            item.innerHTML = <b>Tarea</b>: ${tarea.nombre} -<b>hora</b>: ${tarea.hora}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>;
          resultado.appendChild(item);
        })  
      }
}

document.getElementById("botonEnviar").addEventListener("click",agregarTareas);
listarTareas ();