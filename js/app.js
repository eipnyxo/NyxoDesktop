//window.$ = jQuery = require('jquery');
var iangle = 0;
$(function () {
	//init carousel
	var nbchild = $("#spinner > img").length;
	iangle = 360 / nbchild;
	var dangle = 0;
	document.styleSheets[0].addRule('figure#spinner','transform-origin: 50% 50% '+ -62.5 * nbchild+'px;');
	document.styleSheets[0].addRule('figure#spinner img','transform-origin: 50% 50% '+ -62.5 * nbchild+'px;');
	for (var i = 1; i <= nbchild; i++) {
		document.styleSheets[0].addRule('figure#spinner img:nth-child('+ i +')','transform:rotateY('+ dangle +'deg)');
		dangle -= iangle;
	}


	$("#content").find("#leftbar").html($("#home").find(".leftbar").html());
	$("#content").find("#midbar").html($("#home").find(".midbar").html());



	$('.menu-action').click(function(e) {
		e.preventDefault();
		$('.menu-action').each(function( index ) {
			$(this).removeClass("active");
		});
		$(this).addClass("active");


		//add du contenu
		var href = $(this).attr('href');
		var newleftbar = $(href).find(".leftbar").html();
		var newmidbar = $(href).find(".midbar").html();

		$("#content").find("#leftbar").html(newleftbar);
		$("#content").find("#midbar").html(newmidbar);
		$('.equalize').equalize({reset: true});
	});

	$('.equalize').equalize({reset: true});
});

//carousel
var angle = 0;
function galleryspin(sign) {
	spinner = document.querySelector("#spinner");
	if (!sign) {
		angle = angle + iangle;
	} else {
		angle = angle - iangle;
	}
	spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
