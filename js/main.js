function goBack() {
     window.history.back();
   }

$(function(){

    $("#menu-toggle").click(function(e) {       
        $("#wrapper").toggleClass("active");
    });


 
   


$(document).ready(function() {
    $('form input:not([type="submit"])').keydown(function(e) {
    // $('form input').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }

     $('.nav-item a').on('click', function(e){
    var currentAttrValue = $(this).attr('href');
    // Show/Hide Tabs
    $('.tab-content ' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
    });
   
    });

    //Jquery Date 
	$("#expirydate").datepicker({
        minDate: 0
	});

    /* -----------------------------------------------
    validation message
    -------------------------------------------------*/
        $( "#invaild1" ).hide();
        $( "#invaild2" ).hide();
        $( "#invaild3" ).hide();
        $( "#invaild4" ).hide();
        $( "#invaild5" ).hide();
	   $( "#invaild6" ).hide();
        $( "#invaildin1" ).hide();
        $( "#invaildin2" ).hide();
        $( "#compnameexist" ).hide();
    
      $("#company_nick_name").keypress(function() {
           $(this).css("border", "none"); $( "#invaild1" ).hide();     
      });
      //company nickname
   
     /////////////
      $("#company_name_reg").keypress(function() {
           $(this).css("border", "none"); $( "#invaild2" ).hide();        
      });
      $("#adddoor").keypress(function() {
           $(this).css("border", "none"); $( "#invaild3" ).hide();     
      });
      $("#pincode").keypress(function() {
           $(this).css("border", "none"); $( "#invaild4" ).hide();     
      });
      $("#primary_email").keypress(function() {
           $(this).css("border", "none"); $( "#invaild5" ).hide();     
      });     
	  $("#vend_state").keypress(function() {
           $(this).css("border", "none"); $( "#invaild6" ).hide();     
      });
      $("#insurcompany").keypress(function() {
           $(this).css("border", "none"); $( "#invaildin2" ).hide();     
      });
      $("#expirydate").keypress(function() {
           $(this).css("border", "none"); $( "#invaildin1" ).hide();     
      });
	  $("#expirydate").click(function() {
           $(this).css("border", "none"); $( "#invaildin1" ).hide();     
      });
//////////////////////////////////

$("#company_name_reg").change(function() {
     $(this).css("border", "none"); $( "#invaild2" ).hide();        
});
$("#adddoor").change(function() {
     $(this).css("border", "none"); $( "#invaild3" ).hide();     
});
$("#pincode").change(function() {
     $(this).css("border", "none"); $( "#invaild4" ).hide();     
});
$("#primary_email").change(function() {
     $(this).css("border", "none"); $( "#invaild5" ).hide();     
});     
 $("#vend_state").change(function() {
     $(this).css("border", "none"); $( "#invaild6" ).hide();     
});
$("#insurcompany").change(function() {
     $(this).css("border", "none"); $( "#invaildin2" ).hide();     
});

$("#company_name_reg").click(function() {
     $(this).css("border", "none"); $( "#invaild2" ).hide();        
});
$("#adddoor").click(function() {
     $(this).css("border", "none"); $( "#invaild3" ).hide();     
});
$("#pincode").click(function() {
     $(this).css("border", "none"); $( "#invaild4" ).hide();     
});
$("#primary_email").click(function() {
     $(this).css("border", "none"); $( "#invaild5" ).hide();     
});     
 $("#vend_state").click(function() {
     $(this).css("border", "none"); $( "#invaild6" ).hide();     
});
$("#insurcompany").click(function() {
     $(this).css("border", "none"); $( "#invaildin2" ).hide();     
});


//////////////////////////////////////////////////

	//Vendor Validation		
	$( "#form-register" ).submit(function(e) {
    // e.preventDefault();
      var txtval = $("#company_nick_name").val();
      if (txtval == "") {$("#company_nick_name").css("border", "1px solid red");$( "#invaild1" ).show();}
      else{$("#company_nick_name").css("border", "none");$( "#invaild1" ).hide();}

      var txtval1 = $("#company_name_reg").val();
      if (txtval1 == "") {$("#company_name_reg").css("border", "1px solid red");$( "#invaild2" ).show();}
      else{$("#company_name_reg").css("border", "none");$( "#invaild2" ).hide();}

      var txtval2 = $("#adddoor").val();
      if (txtval2 == "") {$("#adddoor").css("border", "1px solid red");$( "#invaild3" ).show();}
      else{$("#adddoor").css("border", "none");$( "#invaild3" ).hide();}


      var txtval3 = $("#pincode").val();
      if (txtval3 == "") {$("#pincode").css("border", "1px solid red");$( "#invaild4" ).show();}
      else{$("#pincode").css("border", "none");$( "#invaild4" ).hide();}

      var txtval4 = $("#primary_email").val();
      if (txtval4 == "") {$("#primary_email").css("border", "1px solid red");$( "#invaild5" ).show();}
      else{$("#primary_email").css("border", "none");$( "#invaild5" ).hide();}

      var txtval5 = $("#vend_state").val();
      if (txtval5 == "") {$("#vend_state").css("border", "1px solid red");$( "#invaild6" ).show();}
      else{$("#vend_state").css("border", "none");$( "#invaild6" ).hide();}

      if( $('#vend_state').has('option').length > 0 ) {
          $("#vend_state").css("border", "1px solid red");$( "#invaild6" ).show();}
          else{$("#vend_state").css("border", "none");$( "#invaild6" ).hide();}
	//Check Insurance field
     if($("#insurno").val()  !== ""){	

		if($("#insurcompany").val()  == "" && ($("#expirydate").val()  == "")) {       
		  $("#insurcompany").css("border", "1px solid red"); 
		  $( "#invaildin2" ).show();	
	  	  $("#expirydate").css("border", "1px solid red");
	     $( "#invaildin1" ).show();	
	  }

	  else if($("#insurcompany").val()  == "") {       
		  $("#insurcompany").css("border", "1px solid red"); 
		  $( "#invaildin2" ).show();		
	  }

	  else  if( $("#expirydate").val()  == "") {        
      $("#expirydate").css("border", "1px solid red");
	  $( "#invaildin1" ).show();
	 alert("hhh")
	  }	
	   		
	}
		
   });
    
   

     });  
  });