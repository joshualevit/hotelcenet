//almacenamiento
function registro(usuario){
	if(window.localStorage.getItem('id')==undefined){
		window.localStorage.setItem('usuario',usuario);
		window.localStorage.setItem('id',infoDisp()['id']);
	}
}
//Acceso a la BD
function accesoBD(){
	var bd = window.openDatabase('Hotel','1.0','Hotel',200000);
	return bd;
}
function guardarReserva(th,ha,di,pe){
		//var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
		accesoBD.transaction(function populateDB(tx) {   
		 //tx.executeSql('DROP TABLE IF EXISTS DEMO');
		 tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, ha,di,pe)');
		 tx.executeSql('INSERT INTO reservas (th,ha,di,pe) VALUES ("'+th+'","'+ha+'","'+di+'","'+pe+'")');
		 //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}, function errorCB(err) {
		    alert("Error processing SQL: "+err);
		}, function successCB() { 
		   navigator.notification.alert("Esperando conexion con servidor...", null,"Guardado", "Aceptar");
		});
}

function guardarhistorial(th,ha,di,pe){
		//var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
		accesoBD.transaction(function populateDB(tx) {   
		 //tx.executeSql('DROP TABLE IF EXISTS DEMO');
		 tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique, th, ha,di,pe)');
		 tx.executeSql('INSERT INTO historial (th,ha,di,pe) VALUES ("'+th+'","'+ha+'","'+di+'","'+pe+'")');
		 //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}, function errorCB(err) {
		    alert("Error processing SQL: "+err);
		}, function successCB() { 
		   navigator.notification.alert("Hecho...", null,"HECHOO", "Aceptar");
		});
}