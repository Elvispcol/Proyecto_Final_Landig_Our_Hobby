let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo,clave, usuario, imagen, titulo,mensaje;

function iniciarLogin(){
	btn_enviar = document.getElementById("btn_enviar");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
	mensaje = document.querySelector("#ventana p");
	titulo = document.querySelector("#ventana h1");
	imagen = document.querySelector("#ventana span");
	correo = document.getElementById("correo");
	clave = document.getElementById("clave");
	ventana = document.querySelector("#ventana");
	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit",procesarLogin);
	btn_cerrar_modal.addEventListener("click",cerrarVentana);
}

function mensaje_exito(texto_mensaje){
    imagen.innerHTML = "🥳"; 
    btn_cerrar_modal.innerHTML = "Continuar";
    titulo.innerHTML = "Yayy!";
    mensaje.innerHTML = texto_mensaje;
    titulo.classList.remove("color_error_texto");
    titulo.classList.add("color_exito_texto");
    btn_cerrar_modal.classList.remove("color_error_texto","color_error_borde")
    btn_cerrar_modal.classList.add("color_exito_texto","color_exito_borde");
}

function mensaje_error(texto_mensaje){
	imagen.innerHTML = "😥"; 
    btn_cerrar_modal.innerHTML = "Intenta nuevamente";
    titulo.innerHTML = "Oops!";
    mensaje.innerHTML = texto_mensaje;
    titulo.classList.add("color_exito_texto");
    titulo.classList.add("color_error_texto");
    btn_cerrar_modal.classList.remove("color_exito_texto","color_exito_borde");
    btn_cerrar_modal.classList.add("color_error_texto","color_error_borde");
}

function abrirVentana(){
	ventana.classList.remove("hidden");
}

function cerrarVentana(evento){
	//ventana.classList.add("hidden");
	location.href = "index.html";
}

function procesarLogin(evento){

	let txt_correo,txt_clave;
	let str_usuario, md5_clave;
	let error = false;
	txt_correo = correo.value;
	txt_clave = md5(clave.value);

	str_usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(str_usuario);
	
	if(usuario){
		if(usuario.correo === txt_correo && usuario.clave === txt_clave){
			cambiarSesion(true);
			mensaje_exito("Muy bien, logueo exitoso, continua disfrutando del sitio.");
		}
		else{
			error = true;
		}
	}else{
		error = true;
	}

	if(error){
		mensaje_error("Revisa los datos, ocurrio un error.");
	}

	abrirVentana();
	evento.preventDefault();


	//console.log(evento.target);

}