$(function(){
  

    $("#menu-toggle").click(function(e) {       
        $("#wrapper").toggleClass("active");
    });


   
   $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",        
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
     
        labels: {
            previous : 'Previous',
            next : 'Next',
            finish : '',
            current : ''
        }, 
        

        onStepChanged: function (event, currentIndex, newIndex) {
       
            if (currentIndex < newIndex) {
                $('.steps li.current').next().removeClass('done');                                  
              }
              var $input = $('#submittrade');

              if (currentIndex === 5) { //if last step          
                var $input = $('#submittrade');
                $('.actions > ul > li:last-child').attr('style', 'display:none');                            
                $('a[href="#finish"]').remove();
                $input.appendTo($('ul[aria-label=Pagination]'));       
                $input.attr('style', 'display:block');
                } 
          },

        onStepChanging: function (event, currentIndex, newIndex) {        
            $('ul[aria-label=Pagination] button').attr('style', 'display:none');                                  
            if (newIndex === 5) { //if last step   
                $('ul[aria-label=Pagination] button').attr('style', 'display:block');                              
            }
    
           //Trade values- Form 1
            
           
            var tconfirmno = $('#tconfirmno').val();
            var tconfirmdate = $('#tconfirmdate').val();
            var bussinesstype = $('#bussinesstype').val();
            var tradername = $('#tradername').val();
            var brokercomm_per = $('#brokercomm_per').val();
            var brokercomm_rs = $('#brokercomm_rs').val();
            var tradernameb = $('#tradernameb').val();
            var tradedetails = $('#tradedetails').val();


            



            var tsellername= $('#tsellername').val();
            var sellerdetails= $('#sellerdetails').val();
            var tstation = $('#tstation').val();
            var tstate_qual = $('#tstate_qual').val();
            var tvariety = $('#tvariety').val();
            var thsn = $('#thsn').val();
            var tgrade = $('#tgrade').val();
           // var tstapleb = $('#tstaple-b').val();
            var tmicfrom = $('#tmicfrom').val();
            var tmicto = $('#tmicto').val();
            var tgtex = $('#tgtex-b').val();
            var tgpt = $('#tgpt').val();
            var ttrash = $('#ttrash-s').val();
            var tmositure = $('#tmositure-s').val();          
            var tmicfroms = $('#tmicfrom-s').val();
            var tmictos= $('#tmicto-s').val();
            var tprice = $('#tprice-s').val();
            var termdel = $('#termdel').val();
            var tgst = $('#tgst').val();                    
            var termpays = $('#termpay_s').val();
            var tfirstpays = $('#firstpay_s').val();           
            var tfirstpaydays = $('#firstpayday_s').val();
            var tsecondpaypers = $('#secondpayper_s').val();
            var tsecondpaydays = $('#secondpayday_s').val();
          //  var tinterestlates = $('#tinterestlate').val();    
            var tpassings = $('#passing_s').val();
            var tbrokername_b = $('#tbrokername_b').val();
            var brokercomm_per1= $('#brokercomm_per1').val();
            var brokercomm_rs1 = $('#brokercomm_rs1').val();         
            var tnotes = $('#tnotes').val();       
         
            
       


            var tbuyername= $('#tbuyername').val();
            var buyerdetails= $('#buyerdetails').val();
            var tstationb = $('#tstation_b').val();
            var tstate_qualb = $('#tstate_qualb').val();
            var tvarietyb = $('#tvariety_b').val();
            var thsnb = $('#thsn_b').val();
            var tgradeb = $('#tgrade_b').val();
            //var tstaplebb = $('#tstaple-b1').val();
            var tmicfromb = $('#tmicfrom_b').val();
            var tmictob = $('#tmicto_b').val();
            var tgtexb = $('#tgtex-b').val();
            var tgptb = $('#tgpt_b').val();
            var ttrashb = $('#ttrash-s1').val();
            var tmositureb = $('#tmositure_b').val();          
            var tmicfromsb = $('#tmicfrom_b').val();
            var tmictosb= $('#tmicto_b').val();
            var tpriceb = $('#tprice_b').val();
            var termdelb = $('#termdel_b').val();
            var tgstb = $('#tgst_b').val();                    
            var termpaysb = $('#termpay_b').val();
            var tfirstpaysb = $('#firstpay_b').val();           
            var tfirstpaydaysb = $('#firstpayday_b').val();
            var tsecondpaypersb = $('#secondpayper_b').val();
            var tsecondpaydaysb = $('#secondpayday_b').val();
          //  var tinterestlatesb = $('#tinterestlate_b').val();    
            var tpassingsb = $('#passing_b').val();
            var tbrokername_bb = $('#tbrokername_s1').val();
            var brokercomm_pers= $('#brokercomm_per_s').val();
            var brokercomm_rss = $('#brokercomm_rs_s').val();         
            var tnotess = $('#tnotes_b').val();       
          

            var tbales = $('#tbales').val();
            var ttruck = $('#ttruck').val();           
            var termdel = $('#termdel').val();
            var tgst = $('#tgst').val();
            var tdispatchdays = $('#tdispatchdays').val();
            var tmillgateno = $('#tmillgateno ').val();    
            var weighbridgeno = $('#weighbridgeno').val();
            var transinsur = $('#ransinsur').val();
            var insurance_details= $('#insurance_details').val();
             
           //trade form1
   
           
           $('#tconfirmno-val').text(tconfirmno);
           $('#tconfirmdate-val').text(tconfirmdate);
           $('#tbussinesstype-val').text(bussinesstype);
           $('#tradername-val').text(tradername);
           $('#brokercomm_per-val').text(brokercomm_per);
           $('#brokercomm_rs-val').text(brokercomm_rs);
          
          

                
           $('#tsellername-val').text(tsellername);
           $('#sellerdetails-val').text(sellerdetails);
           $('#tstation-val').text(tstation);
           $('#tstate_qual-val').text(tstate_qual);
           $('#tvariety-val').text(tvariety);
          // $('#tstaple-val').text(tstaple-b);
           $('#tmicfrom-val').text(tmicfrom);
           $('#tmicto-val').text(tmicto);
           $('#tgtex-val').text(tgtex);
           $('#tgrade-val').text(tgrade);
           $('#ttrash-val').text(ttrash);
           $('#tmositure-val').text(tmositure);
           $('#thsn-val').text(thsn);
           $('#ttruck-val').text(ttruck);
           $('#tprice-val').text(tprice);
           $('#termdel-val').text(termdel);
           $('#tgst-val').text(tgst);
           $('#tdispatch-val').text(tdispatchdays);
           $('#ttruck-val').text(ttruck);          
        //  $('#termpay-val').text(termpay);
           $('#tfirstpay-val').text(tfirstpays);
           $('#tsecondpayper-val').text(tsecondpaypers);
           $('#tfirstpayday-val').text(tfirstpaydays);
           $('#tsecondpayday-val').text(tsecondpaydays);
          // $('#tinterestlate-val').text(tinterestlate);       
           $('#tnotes-val').text(tnotes);


           $('#tbuyername-val').text(tbuyername);
           $('#buyerdetails-val').text(buyerdetails);
           $('#tstation-valb').text(tstationb);
           $('#tstate_qual-valb').text(tstate_qualb);
           $('#tvariety-valb').text(tvarietyb);
           //$('#tstaple-valb').text(tstapleb);
           $('#tmicfrom-valb').text(tmicfromb);
           $('#tmicto-valb').text(tmictob);
           $('#tgtex-valb').text(tgtexb);
           $('#tgrade-valb').text(tgradeb);
           $('#ttrash-valb').text(ttrashb);
           $('#tmositure-valb').text(tmositureb);
           $('#thsn-valb').text(thsnb);
           //$('#ttruck-valb').text(ttruckb);
           $('#tprice-valb').text(tpriceb);
           $('#termdel-valb').text(termdelb);
           $('#tgst-valb').text(tgstb);
           //$('#tdispatch-valb').text(tdispatchb);
          // $('#ttruck-valb').text(ttruckb);          
           //$('#termpay-valb').text(termpay);
           $('#tfirstpay-valb').text(tfirstpays);
           $('#tsecondpayper-valb').text(tsecondpaypers);
           $('#tfirstpayday-valb').text(tfirstpaydays);
           $('#tsecondpayday-valb').text(tsecondpaydays);
         //  $('#tinterestlate-valb').text(tinterestlate);       
           $('#tnotes-val').text(tnotess);


           $('#tbales-val').text(tbales);
           $('#ttruck-val').text(ttruck);
           $('#termdel-valb').text(termdel);
           $('#tgst-valb').text(tgst);
           $('#tdispatchdays-valb').text(tdispatchdays);
           $('#tmillgateno-valb').text(tmillgateno);
           $('#weighbridgeno-valb').text(weighbridgeno);
           $('#transinsur-valb').text(transinsur);
           $('#insurance_details-valb').text(insurance_details);
         
             

            $("#form-register").validate().settings.ignore = ":disabled,:hidden";
            return $("#form-register").valid();
           
        }
    }); 
});

//Payment options
$(document).ready(function(){

    
    $('textarea').each(function(){
        $(this).val($(this).val().trim());
    }
);


    $('#tradedate').datepicker();


    $('#framework').multiselect({
        nonSelectedText: 'Select',
        includeSelectAllOption: true,
        buttonWidth:'200px'
       });
 
       $('#framework1').multiselect({
        nonSelectedText: 'Select ',
        includeSelectAllOption: true,
        buttonWidth:'200px'
       });
 
       
    
    $("#firstpay_b").prop("disabled", true);
    $("#firstpayday_b").prop("disabled", true);
    $("#secondpay_b").prop("disabled", true);
    $("#secondpayday_b").prop("disabled", true);
    $("#firstpay_b").css("background-color", "lightgray");
    $("#firstpayday_b").css("background-color", "lightgray");
    $("#secondpay_b").css("background-color", "lightgray");
    $("#secondpayday_b").css("background-color", "lightgray");
    
    $("#firstpay_s").prop("disabled", true);
    $("#firstpayday_s").prop("disabled", true);
    $("#secondpay_s").prop("disabled", true);
    $("#secondpayday_s").prop("disabled", true);
    $("#firstpay_s").css("background-color", "lightgray");
    $("#firstpayday_s").css("background-color", "lightgray");
    $("#secondpay_s").css("background-color", "lightgray");
    $("#secondpayday_s").css("background-color", "lightgray");



    //Broker yer or no
    $("#tradernameb").prop("disabled", true);
   // $("#tradergstin").prop("disabled", true);  
    $("#tdoor_add_t").prop("disabled", true);          
    $("#tradernameb").css("background-color", "lightgray");
    //$("#tradergstin").css("background-color", "lightgray");
    $("#tdoor_add_t").css("background-color", "lightgray");

    $("#tbrokername_b").prop("disabled",true);
    $("#brokercomm_per1").prop("disabled", true);  
    $("#brokercomm_rs1").prop("disabled", true);          
    $("#tbrokername_b").css("background-color", "lightgray");
    $("#brokercomm_per1").css("background-color", "lightgray");
    $("#brokercomm_rs1").css("background-color", "lightgray");

    
    $("#tbrokername_s1").prop("disabled",true);
    $("#brokercomm_per_s").prop("disabled", true);  
    $("#brokercomm_rs1_S").prop("disabled", true);          
    $("#tbrokername_s1").css("background-color", "lightgray");
    $("#brokercomm_per_s").css("background-color", "lightgray");
    $("#brokercomm_rs_s").css("background-color", "lightgray");


    $("#termpay_b").change(function() {
        if ($(this).val() == "partial") {  
        $("#firstpay_b").prop("disabled", false);
        $("#firstpayday_b").prop("disabled", false);
        $('#secondpay_b').prop('disabled',false);
        $("#secondpayday_b").prop("disabled", false);
        $("#firstpay_b").css("background-color", "white");
         $("#firstpayday_b").css("background-color", "white");
        $("#secondpay_b").css("background-color", "white");
        $("#secondpayday_b").css("background-color", "white");
        }
        else
       {
        $("#firstpayday_b").prop("disabled", true);
        $("#firstpay_b").prop("disabled", true);
        $('#secondpay_b').prop('disabled',true);
        $('#secondpayday_b').prop('disabled',true);
        $("#firstpay_b").css("background-color", "lightgray");
        $("#firstpayday_b").css("background-color", "lightgray");
        $("#secondpay_b").css("background-color", "lightgray");
        $("#secondpayday_b").css("background-color", "lightgray");
       }
    });

    $("#termpay_s").change(function() {
        if ($(this).val() == "partial") {  

        $("#firstpay_s").prop("disabled", false);
        $("#firstpayday_s").prop("disabled", false);
        $('#secondpay_s').prop('disabled',false);
        $("#secondpayday_s").prop("disabled", false);
        $("#firstpay_s").css("background-color", "white");
         $("#firstpayday_s").css("background-color", "white");
        $("#secondpay_s").css("background-color", "white");
        $("#secondpayday_s").css("background-color", "white");
        }
        else
       {
        $("#firstpayday_s").prop("disabled", true);
        $("#firstpay_s").prop("disabled", true);
        $('#secondpay_s').prop('disabled',true);
        $('#secondpayday_s').prop('disabled',true);
        $("#firstpay_s").css("background-color", "lightgray");
        $("#firstpayday_s").css("background-color", "lightgray");
        $("#secondpay_s").css("background-color", "lightgray");
        $("#secondpayday_s").css("background-color", "lightgray");
       }
    });
    

    
    $("#termpay_b").change(function() {
        if ($(this).val() == "partial") {  

        $("#tfirstpa_b").prop("disabled", false);
        $("#tfirstpayday_b").prop("disabled", false);
        $('#tsecondpayper_b').prop('disabled',false);
        $("#tsecondpayday_b").prop("disabled", false);
        $("#tfirstpa_b").css("background-color", "white");
         $("#tfirstpayday_b").css("background-color", "white");
        $("#tsecondpayper_b").css("background-color", "white");
        $("#tsecondpayday_b").css("background-color", "white");
        }
        else
       {
        $("#tfirstpayday_b").prop("disabled", true);
        $("#tfirstpa_b").prop("disabled", true);
        $('#tsecondpayper_b').prop('disabled',true);
        $('#tsecondpayday_b').prop('disabled',true);
       }
    });

    $("input[name='trader_yes']").click(function () {
        
        if ($(this).val() ==='trader_yes')
        {
        
            $("#tradernameb").prop("disabled", false);
          // $("#tradergstin").prop("disabled", false);  
            $("#tdoor_add_t").prop("disabled", false);
                  
            $("#tradernameb").css("background-color", "white");
           // $("#tradergstin").css("background-color", "white");
            $("#tdoor_add_t").css("background-color", "white");
        }
        if ($("input[name='trader_yes']:checked").val() == 'trader_no') {
            $("#tradernameb").prop("disabled", true);
            //$("#tradergstin").prop("disabled", true);  
            $("#tdoor_add_t").prop("disabled", true);
                  
            $("#tradernameb").css("background-color", "lightgray");
           // $("#tradergstin").css("background-color", "lightgray");
            $("#tdoor_add_t").css("background-color", "lightgray");
        }
    });

   /* $("input[name='seler_broker_yes']").click(function () {
       
        if ($(this).val() ==='seler_broker_yes')
        {
         
            $("#tbrokername_b").prop("disabled", false);
            $("#brokercomm_per1").prop("disabled", false);  
            $("#brokercomm_rs1").prop("disabled", false);
                  
            $("#tbrokername_b").css("background-color", "white");
            $("#brokercomm_per1").css("background-color", "white");
            $("#brokercomm_rs1").css("background-color", "white");
        }
        else{
            $("#tbrokername_b").prop("disabled",true);
            $("#brokercomm_per1").prop("disabled", true);  
            $("#brokercomm_rs1").prop("disabled", true);
                  
            $("#tbrokername_b").css("background-color", "lightgray");
            $("#brokercomm_per1").css("background-color", "lightgray");
            $("#brokercomm_rs1").css("background-color", "lightgray");
        }
    });*/

    $("input[name='seler_broker_yes_s']").click(function () {
       
        if ($(this).val() ==='seler_broker_yes')
        {
            
            $("#tbrokername_s1").prop("disabled", false);
            $("#brokercomm_per_s").prop("disabled", false);  
            $("#brokercomm_rs_s").prop("disabled", false);
                  
            $("#tbrokername_s1").css("background-color", "white");
            $("#brokercomm_per_s").css("background-color", "white");
            $("#brokercomm_rs_s").css("background-color", "white");
        }
        else{
            $("#tbrokername_s1").prop("disabled",true);
            $("#brokercomm_per_s").prop("disabled", true);  
            $("#brokercomm_rs_s").prop("disabled", true);
                  
            $("#tbrokername_s1").css("background-color", "lightgray");
            $("#brokercomm_per_s").css("background-color", "lightgray");
            $("#brokercomm_rs_s").css("background-color", "lightgray");
        }
    });

$("#bussinesstype").change(function() {

    if ($(this).val() == "brokeroption") { 
        $("#tbrokername_s").prop("disabled", false);
        $("#brokercontact_no").prop("disabled", false);
        $("#brokercontact_email").prop("disabled", false);  
        $("#brokercomm_per").prop("disabled", false);
        $("#brokercomm_rs").prop("disabled", false);         
        $("#brokercontact_no").css("background-color", "white");
        $("#brokercontact_email").css("background-color", "white");
        $("#brokercomm_per").css("background-color", "white");
        $("#brokercomm_rs").css("background-color", "white");
        $("#tbrokername_s").css("background-color", "white");
}
else{

    $("#tbrokername_s").prop("disabled", true);
    $("#brokercontact_no").prop("disabled", true);
    $("#brokercontact_email").prop("disabled", true);  
    $("#brokercomm_per").prop("disabled", true);
    $("#brokercomm_rs").prop("disabled", true);         
    $("#brokercontact_no").css("background-color", "lightgray");
    $("#brokercontact_email").css("background-color", "lightgray");
    $("#brokercomm_per").css("background-color", "lightgray");
    $("#brokercomm_rs").css("background-color", "lightgray");
    $("#tbrokername_s").css("background-color", "lightgray");


  
}
});

});

$('form input:not([type="submit"])').keydown(function(e) {
          if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

