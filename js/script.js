$(document).ready(function(){
	var width = window.innerWidth
	var zakleniHoverBool = false;
	var refreshInterval;
	if(width<768) {
		$(".slapnikNav li a").click(function () {
			$(".slapnikNav").css("font-weight", "bold");
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav").css("font-weight", "normal");
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#onasTab").fadeToggle(400);
				$(".onasNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($("#opisMobilnoSlapnik").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#opisMobilnoSlapnik").slideToggle(400);
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav").css("font-weight", "normal");
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#opisMobilnoSlapnik").slideToggle(400);
						$("#slapnikTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
					$(".slapnikNav").css("font-weight", "bold");
				}
			}
			var stevecHover=0;
			$(".carousel-control.left").css("display", "block");
			$(".carousel-control.right").css("display", "block");
			zakleniHoverBool=true;
			refreshInterval = setInterval(function(){
				if(stevecHover==0){
					stevecHover=1;
				}else if(stevecHover==1){
					stevecHover=2;
					$(".carousel-control.left").fadeToggle(400);
					$(".carousel-control.right").fadeToggle(400);
					zakleniHoverBool=false;
				}else{
					clearInterval(refreshInterval);
				}
			}, 1500);
		});
		$(".enatriNav li a").click(function () {
			$(".enatriNav").css("font-weight", "bold");
			if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#onasTab").fadeToggle(400);
				$(".onasNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($("#opisMobilnoEnatri").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#opisMobilnoEnatri").slideToggle(400);
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav").css("font-weight", "normal");
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#opisMobilnoEnatri").slideToggle(400);
						$("#enatriTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
					$(".enatriNav").css("font-weight", "bold");
				}
			}
			var stevecHover=0;
			$(".carousel-control.left").css("display", "block");
			$(".carousel-control.right").css("display", "block");
			zakleniHoverBool=true;
			refreshInterval = setInterval(function(){
				if(stevecHover==0){
					stevecHover=1;
				}else if(stevecHover==1){
					stevecHover=2;
					$(".carousel-control.left").fadeToggle(400);
					$(".carousel-control.right").fadeToggle(400);
					zakleniHoverBool=false;
				}else{
					clearInterval(refreshInterval);
				}
			}, 1500);
		});
		$(".ullsNav li a").click(function () {
			$(".ullsNav").css("font-weight", "bold");
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav").css("font-weight", "normal");
			} else if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#onasTab").fadeToggle(400);
				$(".onasNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($("#opisMobilnoUlls").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#opisMobilnoUlls").slideToggle(400);
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav").css("font-weight", "normal");
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#opisMobilnoUlls").slideToggle(400);
						$("#ullsTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
					$(".ullsNav").css("font-weight", "bold");
				}
			}
			var stevecHover=0;
			$(".carousel-control.left").css("display", "block");
			$(".carousel-control.right").css("display", "block");
			zakleniHoverBool=true;
			refreshInterval = setInterval(function(){
				if(stevecHover==0){
					stevecHover=1;
				}else if(stevecHover==1){
					stevecHover=2;
					$(".carousel-control.left").fadeToggle(400);
					$(".carousel-control.right").fadeToggle(400);
					zakleniHoverBool=false;
				}else{
					clearInterval(refreshInterval);
				}
			}, 1500);
		});
		$(".onasNav li a").click(function () {
			$(".onasNav").css("font-weight", "bold");
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav").css("font-weight", "normal");
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav").css("font-weight", "normal");
			} else if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($("#onasTab").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#onasTab").fadeToggle(400);
					$(".onasNav").css("font-weight", "normal");
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#onasTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
					$(".ullsNav").css("font-weight", "bold");
				}
			}
		});
		$(".kontaktNav li a").click(function () {
			$(".kontaktNav").css("font-weight", "bold");
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav").css("font-weight", "normal");
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav").css("font-weight", "normal");
			} else if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#onasTab").fadeToggle(400);
				$(".onasNav").css("font-weight", "normal");
			} else {
				if ($("#kontaktTab").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#kontaktTab").fadeToggle(400);
					$(".kontaktNav").css("font-weight", "normal");
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#kontaktTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
					$(".kontaktNav").css("font-weight", "bold");
				}
			}
		});
	}else{
		$(".slapnikNav li a").click(function () {
			$(".slapnikNav").css("font-weight", "bold");
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
				$(".enatriNav").css("font-weight", "normal");
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
				$(".ullsNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
				$(".onasNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($(".slapnikNav p").css('display') == "block") {
					$("#slapnikTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
					$(".slapnikNav").css("font-weight", "normal");
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#slapnikTab").fadeToggle(400);
					});
					$(".slapnikNav").css("font-weight", "bold");
				}
				$(".slapnikNav p").slideToggle(400);
			}
			var stevecHover=0;
			$(".carousel-control.left").css("display", "block");
			$(".carousel-control.right").css("display", "block");
			zakleniHoverBool=true;
			refreshInterval = setInterval(function(){
				if(stevecHover==0){
					stevecHover=1;
				}else if(stevecHover==1){
					stevecHover=2;
					$(".carousel-control.left").fadeToggle(400);
					$(".carousel-control.right").fadeToggle(400);
					zakleniHoverBool=false;
				}else{
					clearInterval(refreshInterval);
				}
			}, 1500);
		});
		$(".enatriNav li a").click(function () {
			$(".enatriNav").css("font-weight", "bold");
			if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
				$(".ullsNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
				$(".onasNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($(".enatriNav p").css('display') == "block") {
					$("#enatriTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
					$(".enatriNav").css("font-weight", "normal");
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#enatriTab").fadeToggle(400);
					});
					$(".enatriNav").css("font-weight", "bold");
				}
				$(".enatriNav p").slideToggle(400);
			}
			var stevecHover=0;
			$(".carousel-control.left").css("display", "block");
			$(".carousel-control.right").css("display", "block");
			zakleniHoverBool=true;
			refreshInterval = setInterval(function(){
				if(stevecHover==0){
					stevecHover=1;
				}else if(stevecHover==1){
					stevecHover=2;
					$(".carousel-control.left").fadeToggle(400);
					$(".carousel-control.right").fadeToggle(400);
					zakleniHoverBool=false;
				}else{
					clearInterval(refreshInterval);
				}
			}, 1500);
		});
		$(".ullsNav li a").click(function () {
			$(".ullsNav").css("font-weight", "bold");
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
				$(".enatriNav").css("font-weight", "normal");
			} else if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
				$(".onasNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($(".ullsNav p").css('display') == "block") {
					$("#ullsTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
					$(".ullsNav").css("font-weight", "normal");
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#ullsTab").fadeToggle(400);
					});
					$(".ullsNav").css("font-weight", "bold");
				}
				$(".ullsNav p").slideToggle(400);
			}
			var stevecHover=0;
			$(".carousel-control.left").css("display", "block");
			$(".carousel-control.right").css("display", "block");
			zakleniHoverBool=true;
			refreshInterval = setInterval(function(){
				if(stevecHover==0){
					stevecHover=1;
				}else if(stevecHover==1){
					stevecHover=2;
					$(".carousel-control.left").fadeToggle(400);
					$(".carousel-control.right").fadeToggle(400);
					zakleniHoverBool=false;
				}else{
					clearInterval(refreshInterval);
				}
			}, 1500);
		});
		$(".onasNav li a").click(function () {
			$(".onasNav").css("font-weight", "bold");
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
				$(".enatriNav").css("font-weight", "bold");
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
				$(".ullsNav").css("font-weight", "normal");
			} else if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
				$(".kontaktNav").css("font-weight", "normal");
			} else {
				if ($("#onasTab").css('display') == "block") {
					$("#onasTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
					$(".onasNav").css("font-weight", "normal");
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#onasTab").fadeToggle(400);
					});
					$(".onasNav").css("font-weight", "bold");
				}
			}
		});
		$(".kontaktNav li a").click(function () {
			$(".kontaktNav").css("font-weight", "bold");
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
				$(".enatriNav").css("font-weight", "normal");
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
				$(".ullsNav").css("font-weight", "normal");
			} else if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
				$(".slapnikNav").css("font-weight", "normal");
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
				$(".onasNav").css("font-weight", "normal");
			} else {
				if ($("#kontaktTab").css('display') == "block") {
					$("#kontaktTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
					$(".kontaktNav").css("font-weight", "normal");
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#kontaktTab").fadeToggle(400);
					});
					$(".kontaktNav").css("font-weight", "bold");
				}
			}
		});
	}
	/*if(width<768){
	 var stevecHover=0;
	 var refreshInterval = setInterval(function(){
	 if(stevecHover==0){
	 stevecHover=1;
	 }else if(stevecHover==1){
	 stevecHover=2;
	 $(".carousel-control.left").fadeToggle(400);
	 $(".carousel-control.right").fadeToggle(400);
	 }else{
	 clearInterval(refreshInterval);
	 }
	 }, 1500);
	 }*/
	$(".navbar-toggle").click(function(){
		$(".navbar-content").slideToggle(400);
	});
	$(".CarouselClass").hover(function(){
		if(!zakleniHoverBool){
			$(".carousel-control.left").fadeIn(400);
			$(".carousel-control.right").fadeIn(400);
		}else{
			clearInterval(refreshInterval);
			$(".carousel-control.left").css("display", "block");
			$(".carousel-control.right").css("display", "block");
			zakleniHoverBool=false;
		}
	}, function(){
		$(".carousel-control.left").fadeOut(400);
		$(".carousel-control.right").fadeOut(400);
	});
	$(".CarouselClass").swiperight(function() {
		$(this).carousel('prev');
		//$(this).css('margin-bottom', 75);
	});
	$(".CarouselClass").swipeleft(function() {
		$(this).carousel('next');
		//$(this).css('margin-bottom', 75);
	});
});
$(window).ready(function(){
	var width = window.innerWidth;
	if(width<768){
		//@media (max-width: 767px)
		$(".navbar-toggle").css('left', width/2-22-15);
		$(".CarouselClass").css('left', (width-(width*0.6))/2);
		$(".opisMobilno").css('margin-left', (width-(width*0.6))/2);
		$(".CarouselClass").css('width', "60%");
		$("#onasTab").css('margin-left', (width-(width*0.6))/2);
		$("#kontaktTab").css('margin-left', (width-(width*0.6))/2);
	}else if (width<1200){
		$(".CarouselClass").css('width', 400);
		$(".CarouselClass").css('left', ((width*0.666)-400)/2);
	}else if(width<1441){
		$(".CarouselClass").css('width', 400);
		$(".CarouselClass").css('left', ((width*0.75)-400)/2);
	}else{
		$(".CarouselClass").css('width', "37.037%");
		$(".CarouselClass").css('left', ((width*0.75)-(width*0.75)*0.37037)/2);
	}
});
$(window).resize(function(){
	var width = window.innerWidth;
	if(width<768){
		//@media (max-width: 767px)
		$(".navbar-toggle").css('left', width/2-22-15);
		$(".CarouselClass").css('left', (width-(width*0.6))/2);
		$(".opisMobilno").css('margin-left', (width-(width*0.6))/2);
		$(".CarouselClass").css('width', "60%");
		$("#onasTab").css('margin-left', (width-(width*0.6))/2);
		$("#kontaktTab").css('margin-left', (width-(width*0.6))/2);
	}else if (width<1200){
		$(".CarouselClass").css('width', 400);
		$(".CarouselClass").css('left', ((width*0.666)-400)/2);
	}else if(width<1441){
		$(".CarouselClass").css('width', 400);
		$(".CarouselClass").css('left', ((width*0.75)-400)/2);
	}else{
		$(".CarouselClass").css('width', "37.037%");
		$(".CarouselClass").css('left', ((width*0.75)-(width*0.75)*0.37037)/2);
	}
});
$(document).ready(function() {
	$.ajax({
		url: 'someScript.php',
		success: function(data) {
			var posamezn = data.split("%iskalo%");
			for (var i in posamezn) {
				var drugaIteracija = posamezn[i].split(",");
				var dolzina = drugaIteracija.length;
				if(drugaIteracija[0]=="enatri"){
					var stevec=0;
					for (var j=1; j<dolzina-1; j++){
						if(drugaIteracija[j]!="." && drugaIteracija[j]!=".."){
							stevec++;
							//console.log(drugaIteracija[j]);
							var aktiven="";

							if(stevec==1){
								aktiven=" active";
							}
							//console.log('<div class="item'+aktiven+'"><img src="images/enatri/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-4)+'"> </div>');
							$("#enatriC").append('<div class="item'+aktiven+'"><img src="images/enatri/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-4)+'"> </div>');

						}
					}
				}else if(drugaIteracija[0]=="slapnik"){
					var stevec=0;
					for (var j=1; j<dolzina-1; j++){
						if(drugaIteracija[j]!="." && drugaIteracija[j]!=".."){
							stevec++;
							//console.log(drugaIteracija[j]);
							var aktiven="";

							if(stevec==1){
								aktiven=" active";
							}
							//console.log('<div class="item'+aktiven+'"><img src="images/slapnik/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-4)+'"> </div>');
							$("#slapnikC").append('<div class="item'+aktiven+'"><img src="images/slapnik/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-4)+'"> </div>');
						}
					}
				}else if(drugaIteracija[0]=="ulls"){
					var stevec=0;
					for (var j=1; j<dolzina-1; j++){
						if(drugaIteracija[j]!="." && drugaIteracija[j]!=".."){
							stevec++;
							//console.log(drugaIteracija[j]);
							var aktiven="";

							if(stevec==1){
								aktiven=" active";
							}
							//console.log('<div class="item'+aktiven+'"><img src="images/ulls/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-4)+'"> </div>');
							$("#ullsC").append('<div class="item'+aktiven+'"><img src="images/ulls/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-4)+'"> </div>');
						}
					}
				}else if(drugaIteracija[0]=="home"){
					for (var j=1; j<dolzina-1; j++){
						if(drugaIteracija[j]!="." && drugaIteracija[j]!=".."){
							//console.log(drugaIteracija[j]);
							//console.log('<img class="CarouselClass" src="images/home/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-3)+'" id="zacetnaSlika">');
							$("#defaultTab").append('<img class="CarouselClass" src="images/home/'+drugaIteracija[j]+'" alt="'+drugaIteracija[j].substring(0, drugaIteracija[j].length-3)+'" id="zacetnaSlika">');
						}
					}
				}
			}
			var width = window.innerWidth;
			if(width<768){
				//@media (max-width: 767px)
				$(".navbar-toggle").css('left', width/2-22-15);
				$(".CarouselClass").css('left', (width-(width*0.6))/2);
				$(".opisMobilno").css('margin-left', (width-(width*0.6))/2);
				$(".CarouselClass").css('width', "60%");
				$("#onasTab").css('margin-left', (width-(width*0.6))/2);
				$("#kontaktTab").css('margin-left', (width-(width*0.6))/2);
			}else if (width<1200){
				$(".CarouselClass").css('width', 400);
				$(".CarouselClass").css('left', ((width*0.666)-400)/2);
			}else if(width<1441){
				$(".CarouselClass").css('width', 400);
				$(".CarouselClass").css('left', ((width*0.75)-400)/2);
			}else{
				$(".CarouselClass").css('width', "37.037%");
				$(".CarouselClass").css('left', ((width*0.75)-(width*0.75)*0.37037)/2);
			}
		}
	});
});