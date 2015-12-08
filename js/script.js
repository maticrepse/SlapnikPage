$(document).ready(function(){
	$(".slapnikNav li a").click(function(){
		$(".slapnikNav p").toggle();
		$(".enatriNav p").hide();
		$(".ullsNav p").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#slapnikTab").show();
		$("#slapnikTab").toggle();
		$("#enatriTab").hide();
		$("#ullsTab").hide();
		$("#onasTab").hide();
		$("#kontaktTab").hide();
	});
	$(".enatriNav li a").click(function(){
		$(".enatriNav p").toggle();
		$(".slapnikNav p").hide();
		$(".ullsNav p").hide();
		$("#slapnikTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#enatriTab").show();
		$("#enatriTab").toggle();
		$("#ullsTab").hide();
		$("#onasTab").hide();
		$("#kontaktTab").hide();
	});
	$(".ullsNav li a").click(function(){
		$(".ullsNav p").toggle();
		//$(".ullsNav p").fadeToggle();
		$(".slapnikNav p").hide();
		$(".enatriNav p").hide();
		$("#slapnikTab").hide();
		$("#enatriTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#ullsTab").show();
		$("#ullsTab").toggle();
		$("#onasTab").hide();
		$("#kontaktTab").hide();
	});
	$(".onasNav li a").click(function(){
		$(".ullsNav p").hide();
		$(".slapnikNav p").hide();
		$(".enatriNav p").hide();
		$("#slapnikTab").hide();
		$("#enatriTab").hide();
		$("#ullsTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#onasTab").show();
		$("#onasTab").toggle();
		$("#kontaktTab").hide();
	});
	$(".kontaktNav li a").click(function(){
		$(".ullsNav p").hide();
		$(".slapnikNav p").hide();
		$(".enatriNav p").hide();
		$("#slapnikTab").hide();
		$("#enatriTab").hide();
		$("#ullsTab").hide();
		$("#onasTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#kontaktTab").show();
		$("#kontaktTab").toggle();
	});
});