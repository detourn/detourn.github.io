$(document).ready(function() {

 $.ajaxSetup ({
     cache: false
 });

      // Hide both <div> by default
      $('#div1').hide();
      $('#div2').hide();
      $('#div3').hide();
      $('#cmd').hide();
      $('#error').hide();

      // Check on keydown
      $('input').keyup(function (e) {
    		if (e.keyCode == 13) {
          var ajax_load = "<p>LOADING<span class=\"blink\">_</span></p>";

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

          var newLine = $("<br>&#62;   <input type=\"text\" placeholder=\"ENTER COMMAND\" />");

            if (value == 'map') { // If input value is div1
              $('#div1').show();
            } else if (value == 'derive') { // If input value is div2
              $('#div2').show();
            } else if (value == 'glossary') { // If input value is div3
              $('#div3').show();
            } else if (value != '') { // If input value is wrong
              $('#error').show();
              $('#error').append(newLine);
            }
          }
        });

      $('input').blur(function () {
        $('input').prop('disabled', false);
      });

      $('html').keyup(function (e) {
        if (e.keyCode == 85) {
            $('#cmd').show();
            $('#prompt').hide();
        }
      });

    });
