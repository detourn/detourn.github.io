$(document).ready(function() {

 $.ajaxSetup ({
     cache: false
 });

      // Hide <divs> by default
      $('#cmd').hide();


      // Check on keydown
     $('.inputs').keyup(function (e) {
    		if (e.keyCode == 13) {

           var value = $(this).val();
           var ajax_load = "<p>LOADING<span class=\"blink\">_</span></p>";


           var loadMap = "commands/map.asp";
           var loadDerive = "commands/derive.asp";
           var loadGlossary = "commands/glossary.asp";

           var errorLine = $("<p><span class=\"cmd\">&#62;&nbsp;UNKNOWN COMMAND</span></p><br>");
           var newLine = $('.inputs').clone(true).val('');
           var help = $("<p><span class=\"cmd\"># COMMANDS : [m]ap&nbsp;&nbsp;&nbsp; [d]erive [g]lossary<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[?] help [clear]&nbsp; [git]</span></p><br>");

           var map = $("<div id=\"div1\"></div>");
           var derive = $("<div id=\"div2\"></div>");
           var glossary = $("<div id=\"div3\"></div>");

          // Tiny jQuery Plugin
          // by Chris Goodchild
          $.fn.exists = function(callback) {
            var args = [].slice.call(arguments, 1);

            if (this.length) {
              callback.call(this, args);
            }

            return this;
          };

          // Usage
          $(map).exists(function() {
            this.append('<p><span class=\"cmd\">&#62;&nbsp;This is already open!</span></p><br>');
          });
          $(derive).exists(function() {
            this.append('<p><span class=\"cmd\">&#62;&nbsp;This is already open!</span></p><br>');
          });
          $(glossary).exists(function() {
            this.append('<p><span class=\"cmd\">&#62;&nbsp;This is already open!</span></p><br>');
          });

            if (value == 'm') { // If input value is div1
              $('.container').append(map);
              $("#div1").html(ajax_load).load(loadMap);
              $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
              $('.inputs:first').focus();
            } else if (value == 'd') { // If input value is div2
              $('.container').append(derive);
              $("#div2").html(ajax_load).load(loadDerive);
              $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
              $('.inputs:first').focus();
            } else if (value == 'g') { // If input value is div3
              $('.container').append(glossary);
              $("#div3").html(ajax_load).load(loadGlossary);
              $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
              $('.inputs:first').focus();
            } else if (value == '?') { // If input value is ?
              $('.container').append(help);
              $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
              $('.inputs:first').focus();
            } else if (value == 'clear') { // If input value is clear
              $('.container').empty();
              $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
              $('.inputs:first').focus();
            } else if (value == 'git') { // If input value is clear
              window.open('https://github.com/unilogue', '_blank');
              $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
              $('.inputs:first').focus();
            } else if (value != '') { // If input value is wrong
              $('.container').append(errorLine);
              $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
              $(this).prop('disabled', true);
              $(this).removeClass('inputs');
              $('.inputs').replaceWith(newLine);
              $('.inputs:first').focus();
            }
          }
        });

     $('html').keydown(function(e) {
      if (e.which == 88 && e.ctrlKey) { // value = help
        $('#cmd').show();
        $('#prompt').hide();
    }
         });


    });
