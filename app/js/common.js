$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('#menu-toggle-wrapper').click(function()
		{
			$(this).toggleClass('active');
			if($(this).hasClass('active'))
			{
				$('.nav-menu').slideDown(500);
				$('.nav-menu').insertAfter($('.page-header .container'));
			}
			else
			{
				$('.nav-menu').slideUp(500);
				$('.nav-menu').appendTo($('.nav-menu-wrapper'));
			}
		});

	$(".slider-container").owlCarousel({
		singleItem:true,
		pagination:false
	});

	$('.book__slider').owlCarousel({
		items:3,
		itemsDesktop:[1199,3],
		itemsDesktopSmall:[979,2],
		itemsTablet:[768,2],
		itemsMobile:[650,1],
		pagination:false,
		navigation:true,
		navigationText:false
	});

	$('.hotel-card').equalHeight();

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
