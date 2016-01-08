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

           $.fn.mCmd = function() {
             $('.container').append(map);
             $("#div1").html(ajax_load).load(loadMap);
           };

           $.fn.dCmd = function() {
             $('.container').append(derive);
             $("#div2").html(ajax_load).load(loadDerive);
           };

           $.fn.gCmd = function() {
             $('.container').append(glossary);
             $("#div3").html(ajax_load).load(loadGlossary);
           };

           $.fn.newLine = function() {
            $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
            $(this).prop('disabled', true);
            $(this).removeClass('inputs');
            $('.inputs').replaceWith(newLine);
            $('.inputs:first').focus();
           };

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
            this.append('<p><span class=\"cmd\">&#62;&nbsp;[m]ap is already open!</span></p><br>');
          });
          $(derive).exists(function() {
            return this;
            this.append('<p><span class=\"cmd\">&#62;&nbsp;[d]erive is already open!</span></p><br>');
          });
          $(glossary).exists(function() {
            this.gCmd().remove();
            this.append('<p><span class=\"cmd\">&#62;&nbsp;[g]lossary is already open!</span></p><br>');
          });

            if (value == 'm') { // If input value is div1
                $(this).mCmd();
            } else if (value == 'd') { // If input value is div2
                $(this).dCmd();
            } else if (value == 'g') { // If input value is div3
                $(this).gCmd();
            } else if (value == '?') { // If input value is ?
                $('.container').append(help);
            } else if (value == 'clear') { // If input value is clear
                $('.container').empty();
            } else if (value == 'git') { // If input value is clear
                window.open('https://github.com/unilogue', '_blank');
            } else if (value != '') { // If input value is wrong
                $('.container').append(errorLine);
            }

/*appends2all*/ $(this).newLine();
          }
        });

     $('html').keydown(function(e) {
      if (e.which == 88 && e.ctrlKey) { // value = help
        $('#cmd').show();
        $('#prompt').hide();
    }
         });


    });
