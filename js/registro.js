let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo,clave,nombre,celular, usuario,imagen, titulo,mensaje;

function iniciarRegistro(){
	btn_enviar = document.getElementById("btn_enviar");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
	correo = document.getElementById("correo");
	nombre = document.getElementById("nombre");
	celular = document.getElementById("celular");
	clave = document.getElementById("clave");
	ventana = document.getElementById("ventana");

	mensaje = document.querySelector("#ventana p");
	titulo = document.querySelector("#ventana h1");
	imagen = document.querySelector("#ventana span");

	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit",procesarRegistro);
	btn_cerrar_modal.addEventListener("click",cerrarVentana);

}

function mensaje_exito(texto_mensaje){
    imagen.innerHTML = "🥳"; 
    btn_cerrar_modal.innerHTML = "Continuar";
    titulo.innerHTML = "Yayy!";
    mensaje.innerHTML = texto_mensaje;
    titulo.classList.add("color_exito_texto");
    btn_cerrar_modal.classList.add("color_exito_texto","color_exito_borde");
}

function mensaje_error(texto_mensaje){
	imagen.innerHTML = "😥"; 
    btn_cerrar_modal.innerHTML = "Intenta nuevamente";
    titulo.innerHTML = "Oops!";
    mensaje.innerHTML = texto_mensaje;
    titulo.classList.add("color_error_texto");
    btn_cerrar_modal.classList.add("color_error_texto","color_error_borde");
}

function abrirVentana(){
	ventana.classList.remove("hidden");
}

function cerrarVentana(evento){
	location.href = "login.html";
}

function procesarRegistro(evento){

	let txt_correo,txt_clave,txt_celular,txt_nombre;
	let str_usuario;
	txt_correo = correo.value;
	txt_nombre = nombre.value;
	txt_celular = celular.value;
	txt_clave = md5(clave.value);

	usuario = {
		correo:txt_correo,
		clave:txt_clave,
		celular:txt_celular,
		nombre:txt_nombre
	};

	str_usuario = JSON.stringify(usuario);
	localStorage.setItem("usuario",str_usuario);

	mensaje_exito("Muy bien, registro exitoso");
	abrirVentana();
	evento.preventDefault();

	//console.log(evento.target);

}