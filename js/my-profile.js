    
    function editarPerfil () {
        
                
            let perfil = {};
            let datoNombre = document.getElementById('editarNombres');
            let datoApellido = document.getElementById('editarApellidos');
            let datoEdad = document.getElementById('editarEdad');
            let datoEmail = document.getElementById('editarEmail');
            let datoTelefono = document.getElementById('editarTelefono');
            
    
            perfil.nombres = datoNombre.value;
            perfil.apellidos = datoApellido.value;
            perfil.edad = datoEdad.value;  
            perfil.email = datoEmail.value;
            perfil.telefono = datoTelefono.value;
            
            
            localStorage.setItem('perfil', JSON.stringify(perfil));
            location.reload();



        };
    
       
    function mostrarPerfil () {

        
        let perfilDatos = JSON.parse(localStorage.getItem('perfil'));
            
            let mostrarNombre = document.getElementById("nombrePerfil");
            let mostrarApellido = document.getElementById("apellidoPerfil");
            let mostraEdad = document.getElementById("edadPerfil");
            let mostrarEmail = document.getElementById("emailPerfil");
            let mostrarTelefono = document.getElementById("telefonoPerfil");
            

            mostrarNombre.innerHTML = perfilDatos.nombres 
            mostrarApellido.innerHTML = perfilDatos.apellidos
            mostraEdad.innerHTML = perfilDatos.edad
            mostrarEmail.innerHTML = perfilDatos.email
            mostrarTelefono.innerHTML = perfilDatos.telefono
            
            
            
            
    } ;           


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    mostrarPerfil();

});