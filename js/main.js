$(document).ready(function(){
  $('button').click(function(){
  // Borrar los span si es que existen, para no sobre-escribirlos
    $('.borrar').remove();
// variables para campos a verificar
    var valorNombre = $('#name').val();
    var valorApellido = $('#lastname').val();
    var valorMail = $('#input-email').val();
    var valorPass = $('#input-password').val();
    var selecBici = $('select').val();
    (function validarNombre(){ 
        if (valorNombre == null || valorNombre.length == 0 || /^\s+$/.test(valorNombre)){
          $('.name-container').append('<span class="borrar" >Este campo es obligatorio</span>');
        } else if (/^[a-zA-Z]*$/.test(valorNombre) == false){
          $('.name-container').append('<span class="borrar" >Ingresar sólo letras</span>');
        } else if (valorNombre.charAt(0).toUpperCase() !== valorNombre.charAt(0)){
           $('.name-container').append('<span class="borrar" >La inicial debe ser mayúscula</span>');
        }
     })();
    (function validarApellido(){ 
        if (valorApellido == null || valorApellido.length == 0 || /^\s+$/.test(valorApellido)){
          $('.lastname-container').append('<span class="borrar" >Este campo es obligatorio</span>');
          } else if (/^[a-zA-Z]*$/.test(valorApellido) == false){
          $('.lastname-container').append('<span class="borrar" >Ingresar sólo letras</span>');
          } else if (valorApellido.charAt(0).toUpperCase() !== valorApellido.charAt(0)){
           $('.lastname-container').append('<span class="borrar" >La inicial debe ser mayúscula</span>');
          }
    })  ();
    (function validarCorreo(){
        if (valorMail == null || valorMail.length == 0){
          $('.email-container').append('<span class="borrar" >Este campo es obligatorio</span>');
        } else if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valorMail) != true){
          $('.email-container').append('<span class="borrar" >Este campo es obligatorio</span>');
        }
    }) ();
    (function validarPass(){
        if (valorPass.length == 0 ){
          $('.form-group:first').append('<span class="borrar" >Este campo es obligatorio</span>');      
        } else if (valorPass.length < 6){
          $('.form-group:first').append('<span class="borrar" >Tu contraseña debe ser mayor a 6 caracteres</span>');  
        } else if(valorPass == 123456 || valorPass == 098754){
          $('.form-group:first').append('<span class="borrar" >Tu contraseña es muy débil</span>');
        }
     }) ();
    (function escogerBici(){
        if( selecBici == null || selecBici == 0 ){
          $('.form-group:eq(1)').append('<span class="borrar" >Por favor escoge una bici</span>');  
        }
    }) ();
  });
});