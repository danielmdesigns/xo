$(document).ready(function(){
	"use strict";
	alert("ready to work");
	var x = "x";
	var o = "o";
	var turns = 0;
	// Spot vars
	var spot1 = $("#spot1");
	var spot2 = $("#spot2");
	var spot3 = $("#spot3");
	var spot4 = $("#spot4");
	var spot5 = $("#spot5");
	var spot6 = $("#spot6");
	var spot7 = $("#spot7");
	var spot8 = $("#spot8");
	var spot9 = $("#spot9");
	
	$(".content").on("click", function(){
		if(spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o") ||
			spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o") ||
			spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o") ||
			spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o") ||
			spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o") ||
			spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o") ||
			spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o") ||
			spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o")
		){
			alert("Winner: O");
			$(".content").text("+");
			$(".content").removeClass("disable");
			$(".content").removeClass("o");
			$(".content").removeClass("x");
		} else if(spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x") ||
			spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x") ||
			spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x") ||
			spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x") ||
			spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x") ||
			spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x") ||
			spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x") ||
			spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x")
		){
			alert("Winner: X");
			$(".content").text("+");
			$(".content").removeClass("disable");
			$(".content").removeClass("o");
			$(".content").removeClass("x");
		} else if(turns === 8){
			alert("Tie Game");
			$(".content").text("+");
			$(".content").removeClass("disable");
			$(".content").removeClass("o");
			$(".content").removeClass("x");
			turns = 0;
		} else if($(this).hasClass("disable")){
			alert("This spot is already filled");
		} else if(turns%2 === 0){
			turns++;
			alert("adding a O");
			$(this).text(o);
			$(this).addClass("disable o");
			$(".square").addClass("disable o");
			//animation for differnt users
			$(this).animate({"border-radius":"100px"}, "slow");
			$(this).closest(".square").css("background","white");
			if(spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o") ||
				spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o") ||
				spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o") ||
				spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o") ||
				spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o") ||
				spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o") ||
				spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o") ||
				spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o")
			){
				alert("Winner: O");
				turns = 0;
			}
		} else {
			turns++;
			$(this).text(x);
			$(this).addClass("disable x");
			$(".square").addClass("disable x");
			if(spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x") ||
				spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x") ||
				spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x") ||
				spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x") ||
				spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x") ||
				spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x") ||
				spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x") ||
				spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x")
			){
			alert("Winner: X");
			turns = 0;
			}
		}
	});
		// Reset Handler
		$("#reset").click(function(){
		$(".content").text("");
		$(".content").removeClass("disable");
		$(".content").removeClass("o");
		$(".content").removeClass("x");
		$(".content").css("border-radius","0");
		$(".square").css("background","black");
		turns = 0;
	});
});