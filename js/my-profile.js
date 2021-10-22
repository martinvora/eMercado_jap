    function editarPerfil () {
        
                

            let datoNombre = document.getElementById('editarNombres');
            let datoApellido = document.getElementById('editarApellidos');
            let perfil = {};
            
            
           
            
                perfil.nombres = datoNombre.value;
                perfil.apellidos = datoApellido.value;
              
                localStorage.setItem('perfil', JSON.stringify(perfil));
                location.reload();
                
                
            
        
            
        
    
        };
    
       
    function mostrarPerfil () {

        
        let perfilDatos1 = JSON.parse(localStorage.getItem('perfil'));
            let mostrarNombre = document.getElementById("nombrePerfil");
            let mostrarApellido = document.getElementById("apellidoPerfil");

            mostrarNombre.innerHTML = perfilDatos1.nombres 
            mostrarApellido.innerHTML = perfilDatos1.apellidos
            
    }            

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    mostrarPerfil();

});