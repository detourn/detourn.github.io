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
          var arrow = $("<p>&#62;   </p>").before('.inputs');
          var errorLine = $("<p><span class=\"cmd\">&#62;   UNKNOWN COMMAND</span></p>");
          var newLine = $('.inputs').clone(true).val('');
          var map = $("<div id=\"div1\"></div>");
          var derive = $("<div id=\"div2\"></div>");
          var glossary = $("<div id=\"div3\"></div>");
          var help = $("<p><span class=\"cmd\">COMMANDS : [map] [derive] [glossary]</span></p>");

            if (value == 'map') { // If input value is div1
              $('body').append(map);
              $("#div1").html(ajax_load).load(loadMap);
              $('body').append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
            } else if (value == 'derive') { // If input value is div2
              $('body').append(derive);
              $("#div2").html(ajax_load).load(loadDerive);
              $('body').append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
            } else if (value == 'glossary') { // If input value is div3
              $('body').append(glossary);
              $("#div3").html(ajax_load).load(loadGlossary);
              $('body').append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
            } else if (value == '?') { // If input value is ?
              $('body').append(help);
              $('body').append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
            } else if (value != '') { // If input value is wrong
              $('body').append(errorLine);
              $('body').append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
            }
          }
        });



      $('html').click(function () {
          $('#cmd').show();
          $('#prompt').hide();
      });


    });
