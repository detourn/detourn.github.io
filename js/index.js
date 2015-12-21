$(document).ready(function() {
   
 $.ajaxSetup ({  
     cache: false  
 });  

      // Hide both <div> by default
      $('#div1').hide();
      $('#div2').hide();
      $('#div3').hide();
      $('#error').hide();

      // Check on keydown
      $('input').keyup(function (e) {
    		if (e.keyCode == 13) {
          var ajax_load = "<p>LOADING...</p>";  
              
 var loadMap = "https://unilogue.github.io/commands/map.asp";
 var loadDerive = "https://unilogue.github.io/commands/derive.asp";
 var loadGlossary = "https://unilogue.github.io/commands/glossary.asp";
              
 $("#div1").html(ajax_load).load(loadMap); 
 $("#div2").html(ajax_load).load(loadDerive); 
 $("#div3").html(ajax_load).load(loadGlossary); 
          var value = $(this).val();
          $('#div1').hide();
          $('#div2').hide();
          $('#div3').hide();
          $('#error').hide();
          if (value == 'map') { // If input value is div1
            $('#div1').show();
            
            
          } else if (value == 'derive') { // If input value is div2
            $('#div2').show();
            
          } else if (value == 'glossary') { // If input value is div3
            $('#div3').show();
            
          } else if (value != '') { // If input value is wrong
            $('#error').show();
          }
        }
      });
    });
