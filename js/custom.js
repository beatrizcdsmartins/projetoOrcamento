$(window).on('load', function(){

	"use strict";

	$('#whatsapp').mask('(99) 99999-9999');
	$('#landline').mask('(99) 9999-9999');
	$('#cnpj').mask("99.999.999/9999-99");
	$('#cep').mask("99.999-999");

	$('#rctrcValorMedioTransportadoPorViagem').maskMoney();
	$('#rctrcValorMercadoriaPMes').maskMoney();
	$('#rctrcValorPagoPMes').maskMoney();
	$('#rctrcLMG').maskMoney();
	$('#rcfdfValorMedioTransportadoPorViagem').maskMoney();
	$('#rcfdfValorMercadoria').maskMoney();
	$('#rcfdfValorPagoPMes').maskMoney();
	$('#rcfdfLMG').maskMoney();
 
 
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 450) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});
 
	
	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".navbar-nav li a, a.scrool").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;
		
	});	
	
});
