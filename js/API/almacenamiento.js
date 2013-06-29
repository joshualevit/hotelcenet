// almacenamiento

function registro(usuario){
	
	if(windows.localStorage.getItem('id')== undefined)
	{
	indow.localStorage.setItem('usuario',usuario);
	window.localStorage.setItem('id', infoDisp()['id']);	
	}

}