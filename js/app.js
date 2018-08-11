/* ================================= 
  
  Author :Sanam Singh
  Dated: 10 August 2018
  Project - 3 :Interactive Form
  
==================================== */


$( document ).ready(function() {
	
/*****STEP 1 When the page loads, give focus to the first text field ********/
	
  $(function() {
            $("#name").focus();
        });
	
	/*******STEP 2 ”Job Role” section of the form ********/
	$('#other-title').hide();
	$("#title").change(function () {
    var other_value = $(this).val();
    if(other_value=="other")
		$('#other-title').show();
	else
		$("#other-title").hide();
});
/*******STEP 3  ”T-Shirt Info” section of the form **********/

let select_puns=' <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>'+
				  '<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> '+
                  ' <option value="gold">Gold (JS Puns shirt only)</option> ';
				  
let select_heart= '<option value="tomato">Tomato (I &#9829; JS shirt only)</option>'+
                  '<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> '+
                  '<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 	';			  
				  
$('#colors-js-puns').hide();
$('#design').change(function(){
  if($(this).val() == 'js puns')
  { 
    $('#color').html(select_puns);
	$('#colors-js-puns').show();
  }
});
$('#colors-js-puns').hide();
$('#design').change(function(){
  if($(this).val() == 'heart js')
  { 
    $('#color').html(select_heart);
	$('#colors-js-puns').show();
  }
});
/*******STEP 5 Payment Info section of the form *****/

///The "Credit Card" payment option should be selected by default
	$('select option[value="credit card"]').attr("selected",true);
	$('#credit-card').show();
	$('#PayPal').hide();
	$('#Bitcoin').hide();
	
/***IF credit-card IS SELECTED HIDE PAYPAL PAYMENT AND BITCOIN PAYMENT*********/
	$('#payment').change(function(){
  if($(this).val() == 'credit card')
  { 
	$('#credit-card').show();
	$('#Bitcoin').hide();
	$('#PayPal').hide();
  }
	});
/***IF PayPal IS SELECTED HIDE CREDIT CARD PAYMENT AND BITCOIN PAYMENT*********/
	$('#payment').change(function(){
  if($(this).val() == 'paypal')
  { 
	$('#credit-card').hide();
	$('#Bitcoin').hide();
	$('#PayPal').show();
  }
	});
	/***IF BITCOIN IS SELECTED HIDE CREDIT CARD PAYMENT AND PAYPAL PAYMENT*********/
	$('#payment').change(function(){
  if($(this).val() == 'bitcoin')
  { 
	$('#credit-card').hide();
	$('#PayPal').hide();
	$('#Bitcoin').show();
  }
	});

/******* STEP 4 ”Register for Activities” section of the form ********/

/******APPENDED PARA TO SHOW COST**************/
$('.activities').append('<p class="total" style="color:red;"></p>');
$('.total').text("Please select at least one event");	
$('.total').show(); //WHEN NO CHECK BOXES ARE CHECKED SHOW CAPTION 
let ft=0;

/************ FUNCTION FOR COST OF CONF*******/
function calc_cost(t)
{
	ft=ft+(t);
	return ft;
}
 var total;

/****** 1 WHEN JS FRAMEWORK WORKSHOP IS SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND DISABLE EXPRESS WORKSHOP CHECKBOX*******/
 
 $(function()
    {
      $('[name="js-frameworks"]').change(function()
      {
		  if ($(this).is(':checked')) 
		  {
		    total=calc_cost(100);
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
		    $('input[name="express"]').attr('disabled', true).parent().css('color', 'grey');
		  }
/****** 1 WHEN JS FRAMEWORK WORKSHOP IS NOT SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND ABLE EXPRESS WORKSHOP CHECKBOX*******/		   
else
{		  
		  total = calc_cost(-100);
		  if(total===0)
		  {
			  $('.total').text("Please select at least one event");
			  $('.total').show();
			  $('input[name="express"]').attr('disabled', false).parent().css('color', 'black');
		  }
		  else
		  {
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
			$('input[name="express"]').attr('disabled', false).parent().css('color', 'black');
		  }	
}	
});
 }); //JS FRAMEWORK CHECKBOX FUNCTION CLOSED

/****** 1 WHEN EXPRESS WORKSHOP IS SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND DISABLE JS FRAMEWORK WORKSHOP CHECKBOX*******/	
 $(function()
    {
      $('[name="express"]').change(function()
      {
        if ($(this).is(':checked')) 
		{
			 total = calc_cost(100);
			 $('.total').text("Total Cost:$" + total);
			 $('.total').show();
			 $('input[name="js-frameworks"]').attr('disabled', true).parent().css('color', 'grey');
	    }
/****** 1 WHEN EXPRESS WORKSHOP IS NOT SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND ABLE JS FRAMEWORK WORKSHOP CHECKBOX*******/	
        else
		{
		    total = calc_cost(-100);
		    if(total===0)
		  {
			  $('.total').text("Please select at least one event");
			  $('.total').show();
		      $('input[name="js-frameworks"]').attr('disabled', false).parent().css('color', 'black');
		  }
		  else
		  {
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
			$('input[name="js-frameworks"]').attr('disabled', false).parent().css('color', 'black');
		  }	
		}
      });
    });
/****** 1 WHEN JS LIBRARIES WORKSHOP IS SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND DISABLE NODE JS WORKSHOP CHECKBOX*******/	
 $(function()
    {
      $('[name="js-libs"]').change(function()
      {
        if ($(this).is(':checked')) 
		{
			total= calc_cost(100);
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
           $('input[name="node"]').attr('disabled', true).parent().css('color', 'grey');
		}  
/****** 1 WHEN JS LIBRARIES WORKSHOP IS  NOT SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND ABLE NODE JS FRAMEWORK WORKSHOP CHECKBOX*******/	
        else
		{
		      total=calc_cost(-100);
			  if(total===0)
		     {   
			  $('.total').text("Please select at least one event");
			  $('.total').show();
			  $('input[name="node"]').attr('disabled', false).parent().css('color', 'black');
		  }
		  else
		  {
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
			$('input[name="node"]').attr('disabled', false).parent().css('color', 'black');
		  }
		}
		});
    });
/****** 1 WHEN NODEJS  WORKSHOP IS SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND DISABLE JS LIBRARIES WORKSHOP CHECKBOX*******/	
	 $(function()
    {
      $('[name="node"]').change(function()
      {
        if ($(this).is(':checked')) 
		{
			
			total = calc_cost(100);
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
		  $('input[name="js-libs"]').attr('disabled', true).parent().css('color', 'grey');
		}  
/****** 1 WHEN NODEJS  WORKSHOP IS  NOT SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 /****** 3 AND ABLE JS LIBRARIES WORKSHOP CHECKBOX*******/		
        else
		{
			total = calc_cost(-100);
			  if(total===0)
		  {
			  $('.total').text("Please select at least one event");
			  $('.total').show();
			  $('input[name="js-libs"]').attr('disabled', false).parent().css('color', 'black');
		  }
		  else
		  {
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
			$('input[name="js-libs"]').attr('disabled', false).parent().css('color', 'black');
		  }  
		}
	});
    });
/****** 1 WHEN MAIN CONF IS SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 	
 $(function()
    {
      $('[name="all"]').change(function()
      {
        if ($(this).is(':checked')) 
		{
		  total = calc_cost(200);
		  $('.total').text("Total Cost:$" + total);
	      $('.total').show();
		}  
/****** 1 WHEN MAIN CONF  WORKSHOP IS  NOT SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 	else
		{
			total = calc_cost(-200);
			  if(total===0) //If total=0 show text
		  {
			  $('.total').text("Please select at least one event");
			  $('.total').show();
		  }
		  else
		  {
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
		  }
		}    
	 });
    });	
/****** 1 WHEN BUILD TOOLS WORKSHOP IS SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 	$(function()
    {
      $('[name="build-tools"]').change(function()
      {
        if ($(this).is(':checked')) 
		{
			total = calc_cost(100);
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
		}  
/****** 1 WHEN BUILD TOOLS WORKSHOP IS  NOT SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 	else
		{
			total = calc_cost(-100);
			  if(total===0)
		  {
			  $('.total').text("Please select at least one event");
			  $('.total').show();
		  }
		  else
		  {
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
		  }
		}  
		});
    });	
	/****** 1 WHEN npm WORKSHOP IS SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
 	
 $(function()
    {
      $('[name="npm"]').change(function()
      {
        if ($(this).is(':checked')) 
		{
			total = calc_cost(100);
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
		}  
/****** 1 WHEN npm WORKSHOP IS  NOT SELECTED CALCULATE COST OF CONF ********/
 /*****  2 SHOW THE COST ********/
       else
		{
		     total = calc_cost(-100);
			  if(total===0)
		  {
			  $('.total').text("Please select at least one event");
			  $('.total').show();
			  $('input[name="node"]').attr('disabled', false).parent().css('color', 'black');
		  }
		  else
		  {
			$('.total').text("Total Cost:$" + total);
			$('.total').show();
		  }
		}  
	});
    });	
	function checkboxcheck()
	{
	   if($('form input[type=checkbox]:checked').length==0)
	
		return true;
		else return false;
	}
	/*****STEP 7 Form validation messages:******/
	/*****ADDED ERROR PARA TO CVV CCARD ZIP_CODE NAME AND EMAIL*************/
$('label[for="name"]').append('<p id = "error-message-name" style="color:red;"></p>');
$('label[for="mail"]').append('<p id ="error-message-mail" style="color:red;"></p>');
$('label[for="cc-num"]').append('<p id ="error-message-cc-num" style="color:red;"></p>');
$('label[for="zip"]').append('<p id ="error-message-zip" style="color:red;"></p>');
$('label[for="cvv"]').append('<p id ="error-message-cvv" style="color:red;"></p>');
$('#error-message-name').hide();
$('#error-message-mail').hide();
$('#error-message-cc-num').hide();
$('#error-message-zip').hide();
$('#error-message-cvv').hide();
/*******STEP 8 real-time validation error message *********/

	var $regexname = new RegExp("^[A-Z][a-zA-Z]{5,25}$");
	function validate_name()
	{
		if ($('#name').val().match($regexname))  // if there is a match
			 {
				 $('#name').removeClass("invalid"); //remove invalid class
				 $("#error-message-name").css("display","none"); //hide error message
				return true;
             }
           else
		   {
			   if($('#name').val()=="") //if name not entered
			   {   
				$('#error-message-name').text("Enter your name"); //show error message
				$('#name').addClass("invalid").attr("placeholder","Enter valid name"); //add invalid class
				$("#error-message-name").css("display","block"); //show error message
				return false;
			   }
			   else 
			   {
				$('#error-message-name').text("Please enter a valid name(First character should be in capital & should be atleast 5 characters long )"); //show error-message
				$('#name').addClass("invalid");  //add invalid class
				$("#error-message-name").css("display","block"); //show error-message
				 return false;
			   }
           }
    }
	function validate_mail()
	{
	var regexemail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  ;
	var is_email = regexemail.test($('#mail').val()); //Test if mail id is in correct format
	if(is_email)
	{
	  $('#mail').removeClass("invalid");// remove class invalid
	  $('#error-message-mail').css("display","none"); //hide error-message
	  return true;
	}
	else
		if($('#mail').val()=="")
		{
			$('#mail').addClass("invalid"); //add class invalid
			$('#error-message-mail').text("Please enter your email"); //set text of error-message
			$('#error-message-mail').css("display","block"); //show error-message
			return false;
		}
	else
	{
		$('#error-message-mail').text("Please enter a valid email(Format :veryogi@gmail.com)"); //set text of error-message
		$('#error-message-mail').css("display","block"); //show error-message
		$('#mail').addClass("invalid"); //add class invalid
		
		return false;
	}
}
	
    $('#name').keyup(validate_name); //call validate_name() on keyup event
	$('#name').focusout(validate_name); //call validate_name() on focusout event
    $('#mail').keyup(validate_mail); //call validate_mail() on keyup event
	$('#mail').focusout(validate_mail); //call validate_mail() on focusout event
	var $regexccard =/^[1-9][0-9]{12,16}$/; // regex expression for if no.of digits betweeen 13-16 start with 1-9
 
 function validate_ccard() //validate credit card function
	{
		if ($('#cc-num').val().match($regexccard))  // if there is a match
			 {
				 $('#cc-num').removeClass("invalid"); //remove class invalid
				 $("#error-message-cc-num").css("display","none"); //hide error-message
				return true;
		     }
         else  if($('#cc-num').val()=="") //if credit card is not entered
			   {
				$('#error-message-cc-num').text("Please enter your Credit Card No."); //set text of para
				$('#cc-num').addClass("invalid"); //add class invalid
				$("#error-message-cc-num").css("display","block"); //show error-message
				 return false;
			   }
	   	else  //else if not matched with regex
		{
		   $('#error-message-cc-num').text("Please enter a Credit card no(Format :A 13-16 digit number)"); //set text of para
		   $('#error-message-cc-num').css("display","block"); //show error-message
		   $('#cc-num').addClass("invalid"); //add class invalid
		   return false;
	    } 
    }		   
		   $('#cc-num').keyup(validate_ccard); // call validate_ccard() on keyup event
           $('#cc-num').focusout(validate_ccard); // call validate_ccard() on focusout event
           var $regexzip =/^[1-9][0-9]{4}$/;  // regex exp for zip code checking if it is 5 digit no. starting from 1
     
	 function validate_zip_code() //validate_zip_code()
	{
	  if ($('#zip').val().match($regexzip))  // if there is a match
			 {
				 $('#zip').removeClass("invalid"); // remove class invalid
				 $("#error-message-zip").css("display","none"); //hide error-message
				return true;
			 }
       else  if($('#zip').val()=="") //if zip code is not entered
			   { 
				$('#error-message-zip').text("Please enter your Zip Code"); //set the error-message
				$('#zip').addClass("invalid"); // add class invalid
				$("#error-message-zip").css("display","block"); //show error-message
				 return false;
			   }
	   	else //else if regex is not matched
		{
		   $('#error-message-zip').text("Please enter a zip-code(Format :A 5 digit number)"); //set error-message
		   $('#error-message-zip').css("display","block"); //show error-message
		   $('#zip').addClass("invalid"); //add class invalid
	       return false;
	    } 
    }
	
$('#zip').keyup(validate_zip_code); //call validate_zip_code() on keyup event
$('#zip').focusout(validate_zip_code);		//call validate_zip_code() on focusout event   

var $regexcvv =/^[1-9][0-9]{2}$/; //regex for cvv check if it is a 3 digit no start from 1
 function validate_cvv() //validate_cvv()
	{
		if ($('#cvv').val().match($regexcvv))  // if there is a match
			 {
				 $('#cvv').removeClass("invalid"); //remove class invalid
				 $("#error-message-cvv").css("display","none"); //show error-message
			     return true;
             }
          else  if($('#cvv').val() == "") //if cvv is not entered
			   {
				$('#error-message-cvv').text("Please enter a your cvv number"); //set para
				$('#cvv').addClass("invalid"); //add class invalid
				$("#error-message-cvv").css("display","block"); //show error-message
				 return false;
			   }
		   	else //if regex is not matched
		{
		   $('#error-message-cvv').text("Please enter a valid cvv no.(Format :A 3 digit number)"); //set para
		   $('#error-message-cvv').css("display","block"); //show error-message
		   $('#cvv').addClass("invalid"); //add  class invalid
		   return false;
	    } 
    }		   
		$('#cvv').keyup(validate_cvv);   //call validate_cvv() on keyup event
	    $('#cvv').focusout(validate_cvv);  //call validate_cvv() on focusout event
	    
	  /****STEP 6  Form validation **************/
	  $('#basic').append('<p id="top_id" style="color:red;"></p>');
	  $("form").submit(function(event){
		    if($('option[value= "credit card"]').is(':selected')) // if credit card option is selected
			{
				//check name,mail,cvv,ccard no,zipcode if they return true
				
            				
				if(validate_name()==false)
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text(" ERROR!!! Please enter your name");
				  var name= "Name";
				  //console.log("A miss");
				  //alert("Something is a miss (Not Submitted)");
				}
				else if(validate_mail()==false)
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text(" ERROR!!! Please enter your email");
				  
				  //console.log("A miss");
				  //alert("Something is a miss (Not Submitted)");
				}
				else if(checkboxcheck())
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text("ERROR!!! Please select at least one event.");
					
				}
				
				else if(validate_ccard()==false)
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text(" ERROR!!! Please enter your credit card no.");
				}
				else if(validate_zip_code()==false)
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text(" ERROR!!! Please enter your zip code");
				  
				  //console.log("A miss");
				  //alert("Something is a miss (Not Submitted)");
				}
				else if(validate_ccv()==false)
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text("ERROR!!! Please enter your ccv no.");
					 $(':input[type="submit"]').prop('disabled', true);
				}
				else if(validate_name() && validate_mail() && validate_zip_code() && validate_ccard() && validate_cvv() && !$(checkboxcheck()))
				{
					 $(':input[type="submit"]').prop('disabled', false);
				  alert("Thanks for registering !! See you at the Conf.");// alert 
				  
				}
				
			}
			
	   if(!$('option[value= "credit card"]').is(':selected'))
		    // if credit card option is not selected
		   {
					//check name,mail if they return true
				  
					if(validate_name()==false)
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text("ERROR!!! Please enter your name");
				  
				  //console.log("A miss");
				  //alert("Something is a miss (Not Submitted)");
				}
				else if(validate_email()==false)
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text("ERROR!!! Please enter your email");
				  
				  //console.log("A miss");
				  //alert("Something is a miss (Not Submitted)");
				}
				else if (checkboxcheck())
				{
					event.preventDefault();
					window.scrollTo(0,0);
					$('#top_id').text("ERROR!!! Please select at least one event.");
					
					 $(':input[type="submit"]').prop('disabled', true);
					 //alert("Please select at least one event ");
				}
				else  if(validate_name() && validate_mail() && (!$(checkboxcheck()))) 
				{
					 $(':input[type="submit"]').prop('disabled', false);
				   alert("Thanks for registering !! See you at the Conf.");
				}
				
			   
		   }
		});
	   
}); //end of document.ready();

