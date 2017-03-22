$(document).ready(function(){
    $('.filters ul li a').click(function(e){
		console.log("hello")
        e.preventDefault();
        
        var filter = $(this).attr('id');
        
        $('.posts-list div').show().addClass('visible');
		$('.posts-list h2').show().addClass('visible');
		
		if (filter != "" && filter != "all"){
			$('.posts-list div:not([class*="' + filter + '"])').hide().removeClass('visible');
			if($.isNumeric(filter)) {
				$('.posts-list h2:not([class*="' + filter + '"])').hide().removeClass('visible');
			}
		}  
    });
});
