$(document).ready(function(){
        // INFO
    $(".info-container").on("mouseenter", function(){
        $(this).children([".info"]).addClass("ocultar");
    });
    $(".info-container").on("mouseleave", function(){
        $(this).children([".info"]).removeClass("ocultar");
    });

    // SECCION MÁS VENDIDO
    let producto = $(".productos--masVendido");
    let mover = producto.outerWidth();
    let desplazamiento = 0;
    let moverSeccion = 
    setInterval(function(){
        desplazamiento += mover;
        if(desplazamiento>500){
            desplazamiento = 0;
            producto.animate({
                left: `0` 
            }, 1)
            producto.animate({
                left: `-=${mover}`
            }, 150)
        }else{
            producto.animate({
                left: `-=${mover}` 
            }, 150)
        }
    }, 2000);

    $(".productos--masVendido").on("mouseenter", a => clearInterval(moverSeccion));
    $(".productos--masVendido").on("mouseleave", a => {moverSeccion = setInterval(function(){
        producto.animate({
            left: `-=${mover}` 
        }, 150);
    }, 2000);});
});