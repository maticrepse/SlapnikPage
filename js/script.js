$(document).ready(function(){
	var width = window.innerWidth
	var zakleniHoverBool = false;
	var refreshInterval;
	if(width<768) {
		$(".slapnikNav li a").click(function () {
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#onasTab").fadeToggle(400);
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#slapnikTab").fadeToggle(400);
					$("#opisMobilnoSlapnik").slideToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
			} else {
				if ($("#opisMobilnoSlapnik").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#opisMobilnoSlapnik").slideToggle(400);
					$("#slapnikTab").fadeToggle(400);
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#opisMobilnoSlapnik").slideToggle(400);
						$("#slapnikTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
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
			if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#onasTab").fadeToggle(400);
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#enatriTab").fadeToggle(400);
					$("#opisMobilnoEnatri").slideToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
			} else {
				if ($("#opisMobilnoEnatri").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#opisMobilnoEnatri").slideToggle(400);
					$("#enatriTab").fadeToggle(400);
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#opisMobilnoEnatri").slideToggle(400);
						$("#enatriTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
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
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
			} else if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#onasTab").fadeToggle(400);
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#ullsTab").fadeToggle(400);
					$("#opisMobilnoUlls").slideToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
			} else {
				if ($("#opisMobilnoUlls").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#opisMobilnoUlls").slideToggle(400);
					$("#ullsTab").fadeToggle(400);
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#opisMobilnoUlls").slideToggle(400);
						$("#ullsTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
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
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
			} else if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
			} else if ($("#kontaktTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#onasTab").fadeToggle(400);
				});
				$("#kontaktTab").fadeToggle(400);
			} else {
				if ($("#onasTab").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#onasTab").fadeToggle(400);
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#onasTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
				}
			}
		});
		$(".kontaktNav li a").click(function () {
			if ($("#opisMobilnoEnatri").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#opisMobilnoEnatri").slideToggle(400);
				$("#enatriTab").fadeToggle(400);
			} else if ($("#opisMobilnoUlls").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#opisMobilnoUlls").slideToggle(400);
				$("#ullsTab").fadeToggle(400);
			} else if ($("#opisMobilnoSlapnik").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#opisMobilnoSlapnik").slideToggle(400);
				$("#slapnikTab").fadeToggle(400);
			} else if ($("#onasTab").css('display') == "block") {
				$(".navbar-content").slideToggle(400, function(){
					$("#kontaktTab").fadeToggle(400);
				});
				$("#onasTab").fadeToggle(400);
			} else {
				if ($("#kontaktTab").css('display') == "block") {
					$(".navbar-content").slideToggle(400, function(){
						$("#defaultTab").fadeToggle(400);
					});
					$("#kontaktTab").fadeToggle(400);
				} else {
					$(".navbar-content").slideToggle(400, function(){
						$("#kontaktTab").fadeToggle(400);
					});
					$("#defaultTab").fadeToggle(400);
				}
			}
		});
	}else{
		$(".slapnikNav li a").click(function () {
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#slapnikTab").fadeToggle(400);
					$(".slapnikNav p").slideToggle(400);
				});
			} else {
				if ($(".slapnikNav p").css('display') == "block") {
					$("#slapnikTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#slapnikTab").fadeToggle(400);
					});
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
			if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#enatriTab").fadeToggle(400);
					$(".enatriNav p").slideToggle(400);
				});
			} else {
				if ($(".enatriNav p").css('display') == "block") {
					$("#enatriTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#enatriTab").fadeToggle(400);
					});
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
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
			} else if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#ullsTab").fadeToggle(400);
					$(".ullsNav p").slideToggle(400);
				});
			} else {
				if ($(".ullsNav p").css('display') == "block") {
					$("#ullsTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#ullsTab").fadeToggle(400);
					});
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
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
			} else if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
			} else if ($("#kontaktTab").css('display') == "block") {
				$("#kontaktTab").fadeToggle(400, function () {
					$("#onasTab").fadeToggle(400);
				});
			} else {
				if ($("#onasTab").css('display') == "block") {
					$("#onasTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#onasTab").fadeToggle(400);
					});
				}
			}
		});
		$(".kontaktNav li a").click(function () {
			if ($(".enatriNav p").css('display') == "block") {
				$("#enatriTab").fadeToggle(400);
				$(".enatriNav p").slideToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
			} else if ($(".ullsNav p").css('display') == "block") {
				$("#ullsTab").fadeToggle(400);
				$(".ullsNav p").slideToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
			} else if ($(".slapnikNav p").css('display') == "block") {
				$("#slapnikTab").fadeToggle(400);
				$(".slapnikNav p").slideToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
			} else if ($("#onasTab").css('display') == "block") {
				$("#onasTab").fadeToggle(400, function () {
					$("#kontaktTab").fadeToggle(400);
				});
			} else {
				if ($("#kontaktTab").css('display') == "block") {
					$("#kontaktTab").fadeToggle(400, function () {
						$("#defaultTab").fadeToggle(400);
					});
				} else {
					$("#defaultTab").fadeToggle(400, function () {
						$("#kontaktTab").fadeToggle(400);
					});
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