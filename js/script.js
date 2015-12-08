$(document).ready(function(){
	$(".slapnikNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$(".enatriNav p").slideToggle(300, function(){
				$(".slapnikNav p").slideToggle(300);
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle(300, function(){
				$(".slapnikNav p").slideToggle(300);
			});
		} else {
			$(".slapnikNav p").slideToggle(300);
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
			$(".slapnikNav p").slideToggle(300, function(){
				$(".enatriNav p").slideToggle(300);
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle(300, function(){
				$(".enatriNav p").slideToggle(300);
			});
		} else {
			$(".enatriNav p").slideToggle(300);
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
			$(".slapnikNav p").slideToggle(300, function(){
				$(".ullsNav p").slideToggle(300);
			});
		} else if($(".enatriNav p").css('display') == "block"){
			$(".enatriNav p").slideToggle(300, function(){
				$(".ullsNav p").slideToggle(300);
			});
		} else {
			$(".ullsNav p").slideToggle(300);
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
			$(".enatriNav p").slideToggle(300);
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle(300);
		} else if ($(".slapnikNav p").css('display') == "block"){
			$(".slapnikNav p").slideToggle(300);
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
			$(".enatriNav p").slideToggle(300);
		} else if($(".ullsNav p").css('display') == "block"){
			$(".ullsNav p").slideToggle(300);
		} else if ($(".slapnikNav p").css('display') == "block"){
			$(".slapnikNav p").slideToggle(300);
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