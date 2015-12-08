$(document).ready(function(){
	$(".slapnikNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$("#enatriTab").fadeToggle(400);
			$(".enatriNav p").slideToggle(400, function(){
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400);
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$("#ullsTab").fadeToggle(400);
			$(".ullsNav p").slideToggle(400, function(){
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400);
			});
		} else if($("#onasTab").css('display') == "block"){
			$("#onasTab").fadeToggle(400, function(){
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400);
			});
		} else if($("#kontaktTab").css('display') == "block"){
			$("#kontaktTab").fadeToggle(400, function(){
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400);
			});
		} else {
			$("#slapnikTab").fadeToggle(400);
			$(".slapnikNav p").slideToggle(400);
		}
	});
	$(".enatriNav li a").click(function(){
		if($(".slapnikNav p").css('display') == "block"){
			$("#slapnikTab").fadeToggle(400);
			$(".slapnikNav p").slideToggle(400, function(){
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400);
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$("#ullsTab").fadeToggle(400);
			$(".ullsNav p").slideToggle(400, function(){
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400);
			});
		} else if($("#onasTab").css('display') == "block"){
			$("#onasTab").fadeToggle(400, function(){
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400);
			});
		} else if($("#kontaktTab").css('display') == "block"){
			$("#kontaktTab").fadeToggle(400, function(){
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400);
			});
		} else {
			$("#enatriTab").fadeToggle(400);
			$(".enatriNav p").slideToggle(400);
		}
	});
	$(".ullsNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$("#enatriTab").fadeToggle(400);
			$(".enatriNav p").slideToggle(400, function(){
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400);
			});
		} else if($(".slapnikNav p").css('display') == "block"){
			$("#slapnikTab").fadeToggle(400);
			$(".slapnikNav p").slideToggle(400, function(){
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400);
			});
		} else if($("#onasTab").css('display') == "block"){
			$("#onasTab").fadeToggle(400, function(){
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400);
			});
		} else if($("#kontaktTab").css('display') == "block"){
			$("#kontaktTab").fadeToggle(400, function(){
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400);
			});
		} else {
			$("#ullsTab").fadeToggle(400);
			$(".ullsNav p").slideToggle(400);
		}
	});
	$(".onasNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$("#enatriTab").fadeToggle(400);
			$(".enatriNav p").slideToggle(400, function(){
				$("#onasTab").fadeToggle(400);
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$("#ullsTab").fadeToggle(400);
			$(".ullsNav p").slideToggle(400, function(){
				$("#onasTab").fadeToggle(400);
			});
		} else if($(".slapnikNav p").css('display') == "block"){
			$("#slapnikTab").fadeToggle(400);
			$(".slapnikNav p").slideToggle(400, function(){
				$("#onasTab").fadeToggle(400);
			});
		} else if($("#kontaktTab").css('display') == "block"){
			$("#kontaktTab").fadeToggle(400, function(){
				$("#onasTab").fadeToggle(400);
			});
		} else {
			$("#onasTab").fadeToggle(400);
		}
	});
	$(".kontaktNav li a").click(function(){
		if($(".enatriNav p").css('display') == "block"){
			$("#enatriTab").fadeToggle(400);
			$(".enatriNav p").slideToggle(400, function(){
				$("#kontaktTab").fadeToggle(400);
			});
		} else if($(".ullsNav p").css('display') == "block"){
			$("#ullsTab").fadeToggle(400);
			$(".ullsNav p").slideToggle(400, function(){
				$("#kontaktTab").fadeToggle(400);
			});
		} else if($(".slapnikNav p").css('display') == "block"){
			$("#slapnikTab").fadeToggle(400);
			$(".slapnikNav p").slideToggle(400, function(){
				$("#kontaktTab").fadeToggle(400);
			});
		} else if($("#onasTab").css('display') == "block"){
			$("#onasTab").fadeToggle(400, function(){
				$("#kontaktTab").fadeToggle(400);
			});
		} else {
			$("#kontaktTab").fadeToggle(400);
		}
	});
	$(".navbar-toggle").click(function(){
		$(".navbar-content").slideToggle(400);
	});
});
$(window).ready(function(){
	var width = window.innerWidth;
	if(width<768){
		//@media (max-width: 767px)
		//širina gumba 44px
		$(".navbar-toggle").css('left', width/2-22-15);
	}else{

	}
});
$(window).resize(function(){
	var width = window.innerWidth;
	if(width<768){
		//@media (max-width: 767px)
		$(".navbar-toggle").css('left', width/2-22-15);
	}else{

	}
});