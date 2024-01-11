
document.addEventListener("DOMContentLoaded", function () {
    var imagenesProductos = document.querySelectorAll(".imagen-producto");
    var lightbox = document.getElementById("lightbox");
    var imagenAmpliada = document.getElementById("imagen-ampliada");

    imagenesProductos.forEach(function (imagenProducto) {
        imagenProducto.addEventListener("click", function () {
            var rutaImagen = imagenProducto.src;
            imagenAmpliada.src = rutaImagen;
            lightbox.style.display = "flex";
        });
    });
});
