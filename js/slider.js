

	var index=1;
$(function(){
	$('.previous').unbind('click').click(function(){
		index=index-1;
		showPics(index);
	});
	$('.next').unbind('click').click(function(){
		index=index+1;
		showPics(index);
	});
	setInterval('showPics('+index+')',1000);
});

function showPics(){
	var len = $("#slideshow").find('li').size()+1;
	console.log(len+'：'+index);
	index=(index==0)?4:((index==len)?1:index);
	console.log(index);
	var $listmain = $("#slideshow").find('li').eq(index);
    $listmain.show().addClass('slideActive').siblings().hide().removeClass('slideActive');
}//动画函数

(function($){
	var setting;
	$.fn.Carousel=function(options){
		setting=$.extend({
			startIndex :1,
			len:5,
			delay:3,//秒

		},options||{})
		

		 //开始轮播
        var start = function() {
			

		}

		
	}
	var 

})(Jquery);
