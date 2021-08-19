// saluda al usuario y hace visibile el boton de desconectar 

function conectado() {
let usuario = JSON.parse(localStorage.getItem("usuario"));
let nombre_usuario = document.getElementById('nombre');
let botondeslogueo = document.getElementById('btnlogin');

nombre_usuario.innerHTML= "Hola"+" "+usuario.nombre+"!";
nombre_usuario.style.color ="white";
botondeslogueo.classList.remove("invisible");


};