$(function(){
	$(window).resize(function(){
		var checksize = $(window).width();
		(checksize <= 1024) ? ($('#container').removeClass('container')) : ($('#container').addClass('container'));	
	});
	
	if($(document).width() <= 1024){
		$('#container').removeClass('container');
	}else{
		$('#container').addClass('container');
	}	
})