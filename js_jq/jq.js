const btt=$('#back_to_top'); //$()는 html의 tag 문서를 jquery문법으로 인식시겨줌
$(window).scroll(function(){
	if($(window).scrollTop() > 300){
		btt.addClass('visible')
	}else{
		btt.removeClass('visible')
	}
})

btt.click(function(e){
	e.preventDefault();
	$('html,body').animate({scrollTop:0},500);
})

/* const qlink=$('.quick_link');
$(window).scroll(function () {
	if($(window).scrollTop() > 300){
		qlink.addClass('visible')
	}else{
		qlink.removeClass('visible')
	}	
}) */