
function llenarProductos(){
	productos[1]={
		id:1,
		nombre:"Concierto Todos Los Géneros",
		precio:0,
		imagen:"E0_Concierto2_By_freepik.png",
		estrellas:5,
		descuento:.4
	};
	productos[2]={
		id:2,
		nombre:"Acampar Valle Aburrá",
		precio:0,
		imagen:"E1_Acampar1_By_freepik.png",
		estrellas:4,
		descuento:.3
	};
	productos[3]={
		id:3,
		nombre:"Escalando Bajo Techo",
		precio:0,
		imagen:"E2_Escala3_By_freepik.png",
		estrellas:3,
		descuento:.2
	};
	productos[4]={
		id:4,
		nombre:"Un día como tenista",
		precio:0,
		imagen:"E3_Tenis1_By_freepik.png",
		estrellas:3,
		descuento:.1
	};
	productos[5]={
		id:5,
		nombre:"Ciclismo en Grupo",
		precio:0,
		imagen:"E4_Ciclismo1_By_freepik.png",
		estrellas:4,
		descuento:0
	};
	productos[6]={
		id:6,
		nombre:"Maratón de Juegos de mesa",
		precio:0,
		imagen:"E6_Juego_Mesa1_By_freepik.png",
		estrellas:3,
		descuento:.4
	};
	productos[7]={
		id:7,
		nombre:"Reto cocina salvaje",
		precio:0,
		imagen:"Cocina_By_freepik.png",
		estrellas:4.5,
		descuento:.1
	};
	productos[8]={
		id:8,
		nombre:"Tributo a las motos pesadas",
		precio:0,
		imagen:"Motos_By_freepik.png",
		estrellas:3.5,
		descuento:.6
	};
	productos[9]={
		id:9,
		nombre:"Trabajo Comunitario",
		precio:0,
		imagen:"Trabajo_Comunitario1_By_freepik.png",
		estrellas:3.8,
		descuento:.3
	};
	productos[10]={
		id:10,
		nombre:"Gánale a un experto de ajedrez",
		precio:0,
		imagen:"Ajedrez_By_freepik.png",
		estrellas:4.1,
		descuento:.4
	};
	productos[11]={
		id:11,
		nombre:"Tarde de Kayak",
		precio:0,
		imagen:"Kayak_Rio_By_freepik.png",
		estrellas:2.5,
		descuento:0
	};
	productos[12]={
		id:12,
		nombre:"Globo Por La Ciudad",
		precio:0,
		imagen:"Globo_By_freepik.png",
		estrellas:5,
		descuento:0
	};
}

function armarProducto(info_producto){
	let precio = info_producto.precio;
	let precio_con_descuento = precio - (precio*info_producto.descuento);
	precio_con_descuento = roundToPrecision(precio_con_descuento,2);
	let producto = `
	<div class="col-lg-3 shop-info-grid text-center mt-4">
            <div class="product-shoe-info shoe">
                <div class="men-thumb-item">
                    <img src="images/${info_producto.imagen}" class="img-fluid" alt="">

                </div>
                <div class="item-info-product">
                    <h4>
                        <a href="javascript:void(0);" onclick="verDetalle(${info_producto.id});">${info_producto.nombre}</a>
                    </h4>

                    <div class="product_price">
                        <div class="grid-price">
                            <span class="money">
                            	<span class="line">${precio}</span> 
                            	$${precio_con_descuento}
                            </span>
                        </div>
                    </div>
                    <ul class="stars">
                        <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star-o" aria-hidden="true"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>`;

    return producto;
}

function verDetalle(id){
	let seleccion = JSON.stringify(productos[id]);
	let producto_actual = localStorage.setItem("producto",seleccion);
	location.href = "single.html";
}

function pintarGaleria(){
	let html = '';
	let contador = 1;
	let contenedor = document.querySelector(".galeria");

	for(var i in productos){

		html += (contador==1)?'<div class="row shop-wthree-info text-center">':'';
		html += armarProducto(productos[i]);
		if(contador==4)
		{
			html += '</div>';
			contador = 1;
		}
		else{
			contador++;
		}
	}
    html += "<br><br>";
	contenedor.innerHTML = html;
}