// saluda al usuario y hace visibile el boton de desconectar 

function conectado() {
let usuario = JSON.parse(localStorage.getItem("usuario"));
let nombre_usuario = document.getElementById('nombre');
let botondeslogueo = document.getElementById('btnlogin');
let botonlogin = document.getElementById('botonlog');


nombre_usuario.innerHTML= usuario.nombre;
nombre_usuario.style.color ="white";
botondeslogueo.classList.remove("invisible");
nombre_usuario.classList.remove("invisible");
botonlogin.classList.add("invisible");

};