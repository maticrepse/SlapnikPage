$(document).ready(function(){
	$(".slapnik li").click(function(){
		$(".slapnik p").toggle();
		$(".enatri p").hide();
		$(".ulls p").hide();
	});
	$(".enatri li").click(function(){
		$(".enatri p").toggle();
		$(".slapnik p").hide();
		$(".ulls p").hide();
	});
	$(".ulls li").click(function(){
		$(".ulls p").toggle();
		$(".slapnik p").hide();
		$(".enatri p").hide();
	});
});