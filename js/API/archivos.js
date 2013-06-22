// archivos
function subirFotos (foto){
	
	var options = new FileUploadOptions();
	options.fileKey="archivo";
	options.fileName="Josue.jpg"
//	options.mimeType="text/plain";
	
	var ft = new FileTransfer();
	ft.upload(foto,	"http://igitsoft.com/pgtest.php",
	function(r){
		navigator.notification.confirm("Los datos han sidos registrados satisfactoriamente", function(btn){
				switch(btn){
				case 1:
					navigator.notification.vibrate(5000);
					break;
				case 2:
					navigator.notification.beep(3);
					break;
					
				}
							window.location.href="#page";
			}, "Registro", "Vibrar, Sonar, Cancelar");
		}
		
	 , function(err){
		 navigator.notification.alert("Error al subir el archivo: " +err.code, null, "Registro", "Aceptar");
		 }, options);
}//subir fotos