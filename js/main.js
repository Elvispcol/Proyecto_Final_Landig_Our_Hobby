let contenedor_menu;
let menu_items = [];
let paginas = [];
var productos = [];
var iniciarLogin = undefined, iniciarRegistro = undefined;
let cont_sesion;
let logeado = false;
const menu_html = `<li>
<a href="javascript:void(0);" id="item_1">Home</a>
</li>
<li>
<a href="javascript:void(0);" id="item_2">About Us</a>
</li>
<li>
<!-- First Tier Drop Down -->
<label for="drop-2" class="toggle">
Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span>
</label>
<a href="#">Dropdown 
<span class="fa fa-angle-down" aria-hidden="true"></span>
</a>
<input type="checkbox" id="drop-2" />
<ul>
    <li><a href="javascript:void(0);" id="item_3" class="drop-text">Services</a></li>
    <li><a href="javascript:void(0);" id="item_4" class="drop-text">Single Page</a></li>
</ul>
</li>
<li>
<a href="javascript:void(0);" id="item_5">Collections</a>
</li>
<li>
<a href="javascript:void(0);" id="item_6">Contact</a>
</li>`;
let sesion_on =`
<span>
    <img src="images/avatar.png" alt="">
</span>
<a href="javascript:void(0)" id="cerrar_sesion" onClick="cambiarSesion(false);" class="btn"><i class="fa fa-sign-out" aria-hidden="true"></i> Cerrar sesión</a>
`;
let sesion_off = `
<a href="login.html" class="btn">
<span class="fa fa-user-circle-o"></span> Login</a>
<a href="register.html" class="btn">
<span class="fa fa-pencil-square-o"></span> Registro</a>`;

window.onload = function(){
    contenedor_menu = document.querySelector(".menu");
    contenedor_menu.innerHTML = menu_html;
    setTimeout(hideURLbar, 0);

    cont_sesion = document.querySelector(".forms");
    cambiarSesion(JSON.parse(localStorage.getItem("logeado")));

    if(iniciarLogin)
    {
        iniciarLogin();
    }

    if(iniciarRegistro)
    {
        iniciarRegistro();
    }
    //https://dmitripavlutin.com/javascript-defined-variable-checking/
    if(window.hasOwnProperty("pintarGaleria"))
    {
        llenarProductos();
        pintarGaleria();
    }

    if(window.hasOwnProperty("leerProductoActual")){
        leerProductoActual();
    }
    asignarNavegacion();
    activarPaginaActual();
}

function cambiarSesion(bandera){

    logeado = bandera;
    localStorage.setItem("logeado",logeado);

    if(logeado)
    {
        cont_sesion.innerHTML = sesion_on;
    }
    else
    {
        cont_sesion.innerHTML = sesion_off;

        if(cerrarSesion())
        {
            location.href = "index.html";
        }
    }
}

function cerrarSesion(){
    let pagina_actual = location.pathname.split("/").pop();
    return (pagina_actual === paginas["item_3"] || pagina_actual === paginas["item_4"] || pagina_actual === paginas["item_5"]);
}

function asignarNavegacion(){
    menu_items.push(document.getElementById("item_1"));
    menu_items.push(document.getElementById("item_2"));
    menu_items.push(document.getElementById("item_3"));
    menu_items.push(document.getElementById("item_4"));
    menu_items.push(document.getElementById("item_5"));
    menu_items.push(document.getElementById("item_6"));

    paginas["item_1"] = "index.html";
    paginas["item_2"] = "about.html";
    paginas["item_3"] = "coming.html";
    paginas["item_4"] = "single.html";
    paginas["item_5"] = "shop.html";
    paginas["item_6"] = "contact.html";

    for(var i of menu_items)
    {
        i.addEventListener("click",abrirPagina);
    }
}

function hideURLbar() {
    window.scrollTo(0, 1);
}

function actualizarSeleccion(btn){
    for(var i of menu_items){
        i.classList.remove("active");
    }
    btn.parentElement.classList.add("active");
}

function activarPaginaActual(){
    let pagina = localStorage.getItem("pagina_actual");
    let btn;
    console.log(pagina);
    if(pagina){
        btn = document.getElementById(pagina);
        actualizarSeleccion(btn);
    }
}

function guardarPaginaActual(pagina){
    let seleccion = pagina;
    console.log(pagina);
    localStorage.setItem("pagina_actual",seleccion);
}

function abrirPagina(evento){

    let pagina = evento.target.id;
    let puede_ingresar = true;
    
    //actualizarSeleccion(evento.target);

    if(pagina === "item_3" || pagina === "item_4" || pagina === "item_5")
    {
        puede_ingresar = logeado;
    }

    if(puede_ingresar)
    {
        guardarPaginaActual(pagina);
        location.href = paginas[pagina];
    }
    else
    {
        alert("Esta seccion requiere inicio de sesion.");
        location.href = "login.html";
        //TODO: Personalizar con mensaje lightbox
    }
}

const roundToPrecision = (value, decimals) => {
  const pow = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * pow) / pow;
};