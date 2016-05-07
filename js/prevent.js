$(function(){
	$("#menuTab ul li .submenuTab").hide();
	$("#menuTab ul li:not('#lastli') > a").click(function(event){
		event.preventDefault();
		$("#menuTab ul li .submenuTab").stop().slideUp();
		$(this).children(".submenuTab").stop().slideDown();		
	});	
});