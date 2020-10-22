$(document).ready(function(){
	$("button#box_btn1").click(function(){
		$("div#box_div_mover").animate({left: '450px'},3000,()=>{$("div#box_div").css("background-color","white")});
		$("div#box_div_mover").animate({top: '450px','backgroundColor': 'green'},3000,()=>{$("div#box_div").css("background-color","orange")});
		$("div#box_div_mover").animate({left: '0px','backgroundColor': 'yellow'},3000,()=>{$("div#box_div").css("background-color","violet")});
		$("div#box_div_mover").animate({top: '0px','backgroundColor': 'red'},3000,()=>{$("div#box_div").css("background-color","blue")});
	});
	$("button#box_btn2").click(function(){
		$("div#box_div_mover").stop(true);
    });
});