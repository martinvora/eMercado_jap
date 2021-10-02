// verifica si los campos estan completos y si estan completos nos lleva a index 

function verificar() {
    let dato = document.getElementById('user');
    let alerta = document.getElementById('alerta');
    let password = document.getElementById('pass');
    let usuario = {};
    
    
    if (dato.value.trim() === '' || password.value.trim() === '') {
        
        dato.classList.add("isInvalid");
        alerta.innerHTML = "Complete los campos vacíos";
        alerta.style.color = "red";
        alerta.style.display = "block";
       
    }
    else {
        location.href = "index.html";
        usuario.nombre = dato.value;
        usuario.estado = "conectado";
        localStorage.setItem('usuario', JSON.stringify(usuario));
        
        
    

    }
}




function desconectar(){
    
    
    localStorage.clear();   
    location.reload(); 
    signOut();
    
    
    }
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          location.reload();
        });
        
      }

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    

       conectado();    
        

  
    
});