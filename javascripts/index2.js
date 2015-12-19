$(document).ready(function() {
   
 

      // Hide both <div> by default
      $('#div1').hide();
      $('#div2').hide();
      $('#div3').hide();
      $('#error').hide();

      // Check on keydown
      $('input').keyup(function (e) {
    		if (e.keyCode == 13) {
          var value = $(this).val();
          $('#div1').hide();
          $('#div2').hide();
          $('#div3').hide();
          $('#error').hide();
          if (value == 'map') { // If input value is div1
            $('#div1').show();
            $('#div1').load("https://unilogue.github.io/map");
            $.getScript("https://unilogue.github.io/javascripts/map1.js");
          } else if (value == 'derive') { // If input value is div2
            $('#div2').show();
            $('#div2').load("https://unilogue.github.io/derive");
          } else if (value == 'glossary') { // If input value is div3
            $('#div3').show();
            $('#div3').load("https://unilogue.github.io/glossary");
          } else if (value != '') { // If input value is wrong
            $('#error').show();
          }
        }
      });
    });
