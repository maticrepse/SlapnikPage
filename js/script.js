$(document).ready(function(){
	$(".slapnikNav li").click(function(){
		$(".slapnikNav p").toggle();
		$(".enatriNav p").hide();
		$(".ullsNav p").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#slapnikTab").show();
		$("#slapnikTab").toggle();
		$("#enatriTab").hide();
		$("#ullsTab").hide();
	});
	$(".enatriNav li").click(function(){
		$(".enatriNav p").toggle();
		$(".slapnikNav p").hide();
		$(".ullsNav p").hide();
		$("#slapnikTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#enatriTab").show();
		$("#enatriTab").toggle();
		$("#ullsTab").hide();
	});
	$(".ullsNav li").click(function(){
		$(".ullsNav p").toggle();
		$(".slapnikNav p").hide();
		$(".enatriNav p").hide();
		$("#slapnikTab").hide();
		$("#enatriTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#ullsTab").show();
		$("#ullsTab").toggle();
	});
});