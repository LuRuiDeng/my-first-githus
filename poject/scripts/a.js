$(function(){
	$(" .more").hover(function(){
		$(this).find('a').addClass('hover_a');
		$(this).find('.listBox').stop().slideDown(400);
	},function(){
		$(this).find('a').removeClass('hover_a');
		$(this).find('.listBox').stop().slideUp(600);
	});
	$(".more .listBox li").hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
	},function(){
		$(this).removeClass('on');/*针对鼠标离开ul区域的情况*/
	});
});