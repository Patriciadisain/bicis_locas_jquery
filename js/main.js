function validateForm(){
	/* Escribe tú código aquí */
// variables para campos a verificar
var valorNombre = document.getElementById('name').value;
var valorNombreCont = document.getElementsByClassName("name-container")[0];
var valorApellido = document.getElementById('lastname').value;
var valorApellidoCont = document.getElementsByClassName("lastname-container")[0];
var valorMail = document.getElementById('input-email').value;
var valorMailCont = document.getElementsByClassName("email-container")[0];
var valorPass = document.getElementById('input-password').value; 
var valorPassCont = document.getElementsByClassName('form-group')[0];
var selecBici = document.querySelector('select').value;
var selecBiciCont = document.getElementsByClassName('form-group')[1];
	(function validarNombre(){
		var alertaNombre = document.createElement('span');
    alertaNombre.setAttribute('id', 'msgNombre');
    var msgNombre=document.getElementById('msgNombre');
      if(msgNombre != null){
          valorNombreCont.removeChild(msgNombre); 
        }  
  		if (valorNombre == null || valorNombre.length == 0 || /^\s+$/.test(valorNombre)){
  			var nodoTextoNombre = document.createTextNode('Este Campo es Obligatorio');
  			alertaNombre.appendChild(nodoTextoNombre);
        valorNombreCont.appendChild(alertaNombre);
  			}
  		else if (/^[a-zA-Z]*$/.test(valorNombre) == false){
  			var nodoTextoNombre2 = document.createTextNode('Por favor ingrese sólo letras');
  			alertaNombre.appendChild(nodoTextoNombre2);
        valorNombreCont.appendChild(alertaNombre);
  	   	}
  	 	else if (valorNombre.charAt(0).toUpperCase() !== valorNombre.charAt(0)){
  	 		var nodoTextoNombre3 = document.createTextNode('La inicial debe ser mayúscula');
  			alertaNombre.appendChild(nodoTextoNombre3);
        valorNombreCont.appendChild(alertaNombre);
  	 	  }
    // valorNombreCont.appendChild(alertaNombre);
		})();
	(function validarApellido(){
		var alertaApellido = document.createElement('span');
    alertaApellido.setAttribute('id', 'msgApellido');
    var msgApellido=document.getElementById('msgApellido');
      if(msgApellido!=null){
       valorApellidoCont.removeChild(msgApellido); 
      }
  		if ( valorApellido == null || valorApellido.length == 0 || /^\s+$/.test(valorApellido)){
  			var nodoTextoApellido = document.createTextNode('Este Campo es Obligatorio');
  			alertaApellido.appendChild(nodoTextoApellido);
  			}
  		else if (/^[a-zA-Z]*$/.test(valorApellido) == false){
  			var nodoTextoApellido2 = document.createTextNode('Por favor ingrese sólo letras');
  			alertaApellido.appendChild(nodoTextoApellido2);
  	 	}
  	 	else if (valorApellido.charAt(0).toUpperCase() !== valorApellido.charAt(0)){
  	 		var nodoTextoApellido3 = document.createTextNode('La inicial debe ser mayúscula');
  			alertaApellido.appendChild(nodoTextoApellido3);
  	 	}
    valorApellidoCont.appendChild(alertaApellido);
  	})();
  (function validarCorreo(){
    var alertaCorreo = document.createElement('span');
    alertaCorreo.setAttribute('id', 'msgCorreo');
    var msgCorreo=document.getElementById('msgCorreo');
      if(msgCorreo!=null){
       valorMailCont.removeChild(msgCorreo); 
      }
  		if (valorMail == null || valorMail.length == 0){
   			var nodoTextoMail = document.createTextNode('Este Campo es Obligatorio');
  			alertaCorreo.appendChild(nodoTextoMail);
    	} 	else if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valorMail) != true){
   		var nodoTextoMail2 = document.createTextNode('Verifique su e-mail');
  		alertaCorreo.appendChild(nodoTextoMail2);
      }
    valorMailCont.appendChild(alertaCorreo);
  	}) ();
	(function validarPass(){
    var alertaPass = document.createElement('span');
    alertaPass.setAttribute('id', 'msgPass');
    var msgPass=document.getElementById('msgPass');
      if(msgPass!=null){
       valorPassCont.removeChild(msgPass); 
      }
		 	if (valorPass.length == 0 ){		 		
				 var nodoTextoPass = document.createTextNode('Este Campo es Obligatorio');
				 alertaPass.appendChild(nodoTextoPass);
     	}  else if (valorPass.length < 6){
    			var nodoTextoPass2 = document.createTextNode('Tu contraseña debe ser mayor a 6 caracteres');
    			alertaPass.appendChild(nodoTextoPass2);
     	}  else if(valorPass == 123456 || valorPass == 098754){
    			var nodoTextoPass3 = document.createTextNode('Tu contraseña es muy débil');
    			alertaPass.appendChild(nodoTextoPass3);
     	}
    valorPassCont.appendChild(alertaPass);
	   }) ();
  (function escogerBici(){
  var alertaBici = document.createElement('span');
  alertaBici.setAttribute('id', 'msgBici');
  var msgBici = document.getElementById('msgBici');
      if(msgBici != null){
          selecBiciCont.removeChild(msgBici);
      }
    if( selecBici == null || selecBici == 0 ){
      var nodoTextoBici = document.createTextNode('Por favor escoge tu tipo de Bici');
      alertaBici.appendChild(nodoTextoBici);
      selecBiciCont.appendChild(alertaBici);
  }})();
};

$(document).ready(function(){
  var nombre = $('name').val();
  var apellido = $('lastname').val();
    console.log (nombre apellido);
});