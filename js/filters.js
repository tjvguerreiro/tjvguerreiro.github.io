$(document).ready(function(){
    $('.filters ul li a').click(function(e){
		console.log("hello")
        e.preventDefault();
        
        var filter = $(this).attr('id');
        
        $('.posts-list div').show().addClass('visible');
		
		if (filter != "")
			$('.posts-list div:not([class*="' + filter + '"])').hide().removeClass('visible');
     
    });
});

$(document).ready(function(){
    $('.filters h2 a').click(function(e){
		console.log("hello2")
        e.preventDefault();
             

		$('.filters ul').toggle();
		$('.filters ul li').toggle();
		$('.filters ul li').show().addClass('visible');
		
     
    });
});