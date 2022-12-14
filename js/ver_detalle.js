function leerProductoActual(){
	let producto;

	producto = localStorage.getItem("producto");
	producto = JSON.parse(producto);

	pintarDetalleProducto(producto);
}
function pintarDetalleProducto(info_producto){

	let precio = info_producto.precio;
	let precio_con_descuento = precio - (precio*info_producto.descuento);
	precio_con_descuento = roundToPrecision(precio_con_descuento,2);
	let contenedor = document.querySelector(".detalle_producto");
	let html = `
		<div class="desc1-left col-md-6">
		    <img src="images/${info_producto.imagen}" class="img-fluid" alt="">
		</div>
	    <div class="desc1-right col-md-6 pl-lg-3">
	        <h3>${info_producto.nombre}</h3>
	        <h5>${precio_con_descuento} <span>${precio}</span> 
	        <a href="#">Click for offer</a></h5>
	        <div class="available mt-3">
	            <form action="#" method="post" class="w3pvt-newsletter subscribe-sec">
	                <input type="email" name="Email" placeholder="Enter your email..." required="">
	                <button class="btn submit">Check</button>

	            </form>
	            <span><a href="#">login to save in wishlist </a></span>
	            <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.. </p>
	        </div>
	        <div class="share-desc mt-5">
	            <div class="share text-left">
	                <h4>Share Product :</h4>
	                <div class="social-ficons mt-4">
	                    <ul>
	                        <li><a href="#"><span class="fa fa-facebook"></span> Facebook</a></li>
	                        <li><a href="#"><span class="fa fa-twitter"></span> Twitter</a></li>
	                        <li><a href="#"><span class="fa fa-google"></span>Google</a></li>
	                    </ul>
	                </div>
	            </div>
	            <div class="clearfix"></div>
	        </div>
	    </div>`;
	    contenedor.innerHTML = html;
}