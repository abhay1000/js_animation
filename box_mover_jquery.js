"use strict";
let wit,hei;
$(document).ready(function(){
	$("body").ready(function(){
		$("div#box_div").hide();
		$("button#box_btn1,button#box_btn2").hide();
	});
	$("button#resize").click(function(){
	    wit = $("input#text1").val();
		hei = $("input#text2").val();
		$("div#width-height-input").hide(3000);
		$("button#box_btn1,button#box_btn2,div#box_div,div#box_div_mover").show(3000);
        $("div#box_div").animate({width: wit+'px',height: hei+'px'},3000);		
	});
	$("button#box_btn1").click(function(){
		$("div#box_div_mover").animate({left: (wit-50)+'px'},3000,()=>{$("div#box_div").css("background-color","cyan")});
		$("div#box_div_mover").animate({top: (hei-50)+'px','backgroundColor': 'green'},3000,()=>{$("div#box_div").css("background-color","orange")});
		$("div#box_div_mover").animate({left: '0px','backgroundColor': 'yellow'},3000,()=>{$("div#box_div").css("background-color","violet")});
		$("div#box_div_mover").animate({top: '0px','backgroundColor': 'red'},3000,()=>{$("div#box_div").css("background-color","blue")});
	});
	$("button#box_btn2").click(function(){
		$("div#box_div_mover").stop(true);
    });
});
