$(document).ready(function(){
	$(".slapnikNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$(".enatriNav p").slideToggle("slow", function(){
				$(".slapnikNav p").slideToggle("slow");
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle("slow", function(){
				$(".slapnikNav p").slideToggle("slow");
			});
		} else {
			$(".slapnikNav p").slideToggle("slow");
		}
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#slapnikTab").show();
		$("#slapnikTab").toggle();
		$("#enatriTab").hide();
		$("#ullsTab").hide();
		$("#onasTab").hide();
		$("#kontaktTab").hide();
	});
	$(".enatriNav li a").click(function(){
		if($(".slapnikNav p").css('display') == "block"){
			$(".slapnikNav p").slideToggle("slow", function(){
				$(".enatriNav p").slideToggle("slow");
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle("slow", function(){
				$(".enatriNav p").slideToggle("slow");
			});
		} else {
			$(".enatriNav p").slideToggle("slow");
		}
		$("#slapnikTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#enatriTab").show();
		$("#enatriTab").toggle();
		$("#ullsTab").hide();
		$("#onasTab").hide();
		$("#kontaktTab").hide();
	});
	$(".ullsNav li a").click(function(){
		if($(".slapnikNav p").css('display') == "block"){
			$(".slapnikNav p").slideToggle("slow", function(){
				$(".ullsNav p").slideToggle("slow");
			});
		} else if($(".enatriNav p").css('display') == "block"){
			$(".enatriNav p").slideToggle("slow", function(){
				$(".ullsNav p").slideToggle("slow");
			});
		} else {
			$(".ullsNav p").slideToggle("slow");
		}
		$("#slapnikTab").hide();
		$("#enatriTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#ullsTab").show();
		$("#ullsTab").toggle();
		$("#onasTab").hide();
		$("#kontaktTab").hide();
	});
	$(".onasNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$(".enatriNav p").slideToggle("slow");
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle("slow");
		} else if ($(".slapnikNav p").css('display') == "block"){
			$(".slapnikNav p").slideToggle("slow");
		}
		$("#slapnikTab").hide();
		$("#enatriTab").hide();
		$("#ullsTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#onasTab").show();
		$("#onasTab").toggle();
		$("#kontaktTab").hide();
	});
	$(".kontaktNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$(".enatriNav p").slideToggle("slow");
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle("slow");
		} else if ($(".slapnikNav p").css('display') == "block"){
			$(".slapnikNav p").slideToggle("slow");
		}
		$("#slapnikTab").hide();
		$("#enatriTab").hide();
		$("#ullsTab").hide();
		$("#onasTab").hide();
		//Odkomentiraj spodnjo vrstico in zakomentiraj vrstico pod njo, da bo vedno prikazan en element
		//$("#kontaktTab").show();
		$("#kontaktTab").toggle();
	});
});