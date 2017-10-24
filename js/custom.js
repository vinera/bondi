$(document).ready(function(){
	var touch = $('#toggle-nav');
	var menu = $('.main-menu__list');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

});

  $(document).ready(function() {
    $("a.main-menu__link").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
  });


 