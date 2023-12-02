 $(function(){
        $('#menu').slicknav({
        	label:"",
        	brand:"COACH 4 U "
        });
    });


 $(document).ready(function() {
  $(".skitter-large").skitter({
  	dots:false,
  	 navigation: true
  });
});

 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	   loop:true,
    margin:100,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
  });
});

$(document).ready(function(){
	$(".progress_bar-html").animate({"width":"80%"},1000,function(){
		$(".progress_bar-css").animate({"width":"70%"},1000,function(){
			$(".progress_bar-js").animate({"width":"60%"},1000,function(){
				$(".progress_bar-javascript").animate({"width":"90%"},1000,function(){
					$(".progress_bar-jquery").animate({"width":"40%"},1000,function(){
						$(".progress_bar-power").animate({"width":"90%"},1000)
					});
				});
			});
		});
	});
});







