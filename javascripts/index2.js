 $(document).ready(function() {

      // Hide both <div> by default
      $('#error').hide();

      // Check on keydown
      $('input').keyup(function (e) {
    		if (e.keyCode == 13) {
          var value = $(this).val();
          $('#error').hide();
          if (value == 'map') { // If input value is div1
            $('#div1').load("https://unilogue.github.io/commands #div1");
            $('#div1').getScript("https://unilogue.github.io/javascripts/map1.js");
          } else if (value == 'derive') { // If input value is div2
            $('#div2').load("https://unilogue.github.io/commands #div2");
          } else if (value == 'glossary') { // If input value is div3
            $('#div3').load("https://unilogue.github.io/commands #div3");
          } else if (value != '') { // If input value is wrong
            $('#error').show();
          }
        }
      });
    });
