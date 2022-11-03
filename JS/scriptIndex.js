
// Active isotope with jQuery code:

var $grid = $('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'masonry'
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});  

var regiones = $('.infoRegions');


ocultarTextos(regiones);

function ocultarTextos(regiones){
    $(regiones).hide();
}

$(regiones[0]).fadeIn();

// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
    
    var textoli = $(this).html();
    var opcionesli = $('.iso-nav ul li');
    ocultarTextos(regiones);
    
    if(textoli == "Todos"){
        $(regiones[0]).fadeIn();
    }else if(textoli == "Servicios Empresariales"){
        $(regiones[1]).fadeIn();
    }else if(textoli == "Lavado de Tapicerías"){
         $(regiones[2]).fadeIn();
    }else if(textoli == "Servicios para el Hogar"){
         $(regiones[3]).fadeIn();
    }else if(textoli == "Lavado de Colchones"){
         $(regiones[4]).fadeIn();
    }else if(textoli == "Lavado de Alfombras"){
         $(regiones[5]).fadeIn();
    }else if(textoli == "Lavado de interiores de Autos"){
         $(regiones[6]).fadeIn();
    }
    
    var txelmnt = document.getElementById("textoGaleria");
    txelmnt.scrollIntoView(true);
    window.scrollBy(0, -130);  
	return false;
});




//function navBar() {
//    var x = document.getElementById("myTopnav");
//    if (x.className === "topnav") {
//        x.className += " responsive";
//    } else {
//        x.className = "topnav";
//    }
//}

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");

var header = document.querySelector("header");
// On click
hamburger.addEventListener("click", desactivarNav);

function desactivarNav(){
    hamburger.classList.toggle("is-active");

    header.classList.toggle("active-header");
}

$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 800);

    return false;
});

