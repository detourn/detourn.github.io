$(document).ready(function() {

 $.ajaxSetup ({
     cache: false
 });

      // Hide <div> by default
      $('#cmd').hide();


      // Check on keydown
     $('.inputs').keyup(function (e) {
    		if (e.keyCode == 13) {
          var ajax_load = "<p>LOADING<span class=\"blink\">_</span></p>";

          var loadMap = "https://unilogue.github.io/commands/map.asp";
          var loadDerive = "https://unilogue.github.io/commands/derive.asp";
          var loadGlossary = "https://unilogue.github.io/commands/glossary.asp";

          var value = $(this).val();
          var errorLine = $("<p><span class=\"cmd\">&#62;   UNKNOWN COMMAND</span></p>");
          var newLine = $("<br>&#62;   <input type=\"text\" class=\"inputs\"  placeholder=\"ENTER COMMAND\" />");
          var map = $("<div id=\"div1\"></div>");
          var derive = $("<div id=\"div2\"></div>");
          var glossary = $("<div id=\"div3\"></div>");

            if (value == 'map') { // If input value is div1
              $('body').append(map);
              $("#div1").html(ajax_load).load(loadMap);
              $(map).append(newLine);
              $(this).prop('disabled', true);
            } else if (value == 'derive') { // If input value is div2
              $('body').append(derive);
              $("#div2").html(ajax_load).load(loadDerive);
              $(derive).append(newLine);
              $(this).prop('disabled', true);
            } else if (value == 'glossary') { // If input value is div3
              $('body').append(glossary);
              $("#div3").html(ajax_load).load(loadGlossary);
              $(glossary).append(newLine);
              $(this).prop('disabled', true);
            } else if (value != '') { // If input value is wrong
              $('body').append(errorLine);
              $(errorLine).append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
            }
          }
        });



      $('html').keyup(function (e) {
        if (e.keyCode == 85) {
            $('#cmd').show();
            $('#prompt').hide();
        }
      });

    });
