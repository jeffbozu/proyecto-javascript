const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');

/*ES PARA QUE EL MENO DE TRES RAYAS APARESCA DESPUES Q CARGUE EL HTML*/
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar'); /* para que aparezca el listado del menu al cikar, si no se oculta*/

    }); 
}


/* para que cuando cliquemos en una opcion del menu, el menu desaparezca*/

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}





/*para que en el footer siempre aparezca el año actual automaticamente*/

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}