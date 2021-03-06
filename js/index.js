// ===== ARRAYS PRODUCTOS ===== //
const MAS_VENDIDOS = {
    "mates" : [
        ["1","1","img/productos/top/2-min.jpg"],
        ["3","1","img/productos/top/4-min.jpg"],
        ["5","1","img/productos/top/6-min.jpg"],
        ["6","1","img/productos/top/7-min.jpg"],
        ["7","1","img/productos/top/9-min.jpg"],
    ],
    "sets" : [
        ["9","1","img/productos/top/8-min.jpg"],
        ["10","1","img/productos/top/11-min.jpg"]
    ],
    "bombillas" : [
        ["11","1","img/productos/top/1-min.jpg"]
    ]
}

function mostrarProductos(){
    let products = document.getElementById("productsIndex");
    let i = 0
    let p = MAS_VENDIDOS
    
    products.innerHTML = "";

     // recorro todos los tipos de MATES/BOMBILLAS/SETS/ACC
    for (let j = 0; j < Object.keys(p).length; j++){
        let tipo = Object.keys(p)[j]

        //recorro todos los tipos de modelos de un producto
        p[tipo].forEach (function(producto) {

            // Creo el boton para el modal segun bootstrap
            let modalButton = document.createElement("div");
            modalButton.className = "producto col-12 col-sm-6 col-md-4 col-lg-3 my-3 mx-3 d-flex justify-content-end";
            modalButton.setAttribute("type","button");
            modalButton.setAttribute("data-bs-toggle","modal");
            modalButton.setAttribute("data-bs-target",`#${tipo}${producto[0]}`);
            modalButton.setAttribute("style",`background-image: url('${producto[2]}')`);
            products.appendChild(modalButton);

            // Creo el modal segun bootstrap
            let modal = document.createElement("div");
            modal.className = "modal fade"
            modal.id = `${tipo}${producto[0]}`;
            modal.role = "dialog";
            modal.setAttribute("tabindex","-1");
            modal.setAttribute("aria-labelledby","exampleModalLabel");
            modal.setAttribute("arida-hidden","true");
            modal.innerHTML = 
            `
                <div class="modal-dialog modal-lg modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-0">
                            <div class="row align-items-stretch">
                                <!--- Carrousel --->
                                <div class="">
                                    <div class="carousel slide carousel-fade" id="carouselExampleControls${tipo}${i}" data-bs-ride="carousel">
                                        <div id = "carousel${tipo}${i}" class="">
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-lg-3">
                                    <div class="producto-modal-footer">
                                    <a href="https://www.instagram.com/glam.mates" target="_blank"class="p contactar btn btn-dark"><i class="fab fa-instagram fa-lg"></i>CONTACTAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            products.appendChild(modal)
            
            // Seteo la cantidad de fotos de cada carrousel del modal
            let carousel = document.getElementById(`carousel${tipo}${i}`)
            for (var c = 2; c < producto.length; c++) {
                let foto = document.createElement("div")
                if (c == 2) {
                    foto.className = "producto-modal carousel-item active"
                }
                else {
                    foto.className = "producto-modal carousel-item"
                };
                foto.setAttribute("style",`background-image: url('${producto[c]}')`);
                carousel.appendChild(foto);
            }
            i++;
        })
    }
}

mostrarProductos()