$(document).ready(function() {
	var UScitzenship ="yes";
	var mortgageType ="purchase";
	var amountAvailableForDown = 0;
	var estimatedCreditScore = 640;
	var bkDate = 0;
	var shortSaleDate = 0;

	$("#question1").show();
	$("#question2").hide();
	$("#purchase1").hide();
	$("#purchase2").hide();
	$("#purchase3").hide();

	$("#citzenYes").on({
        click: function() {
        	UScitzenship = "yes";
        	$("#question1").hide();
			$("#question2").show();
			$("#purchase2").hide();
			$("#purchase3").hide();
     }   
    })
    $("#citzenNo").on({
        click: function() {
        	UScitzenship = "yes";
        	$("#question1").hide();
			$("#question2").show();
			$("#purchase1").show();
			$("#purchase2").hide();
			$("#purchase3").hide();
     }   
    })
    $("#wantsToPurchase").on({
        click: function() {
        	$("#question1").hide();
			$("#question2").hide();
			$("#purchase1").show();
			$("#purchase2").hide();
			$("#purchase3").hide();
     }   
    })
    $("#wantsToRefinance").on({
        click: function() {
        	$("#question1").hide();
			$("#question2").show();
			$("#purchase1").show();
			$("#purchase2").hide();
			$("#purchase3").hide();
     }   
    })
    $("#arizonaYes").on({
        click: function() {
        	$("#question1").hide();
        	$("#question1").hide();
			$("#question2").hide();
			$("#purchase1").hide();
			$("#purchase2").show();
			$("#purchase3").hide();

     }   
    })


});
