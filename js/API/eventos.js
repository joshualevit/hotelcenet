//Eventos
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		if(!isLogin())
			window.location.href = '#login';
	   $('#regSend').tap(function(){
		  if($('#regNom').val()!='' && $('#regTel').val()!='' && $('#regMail').val()!=''){
			  var nom = $('#regNom').val();
			  var tel = $('#regTel').val();
			  var mail = $('#regMail').val();
			  enviarDatos(nom, tel, mail, foto);
			 // navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");
		  }else{
			  navigator.notification.alert('Todos los campos son requeridos', null, "Hotel","Ok");
		  }
	   });
	   
	   $('#regFoto').tap(function(){
		      tomarFoto();
	   });
	}, false);
});

function isLogin(){
	return false;
}