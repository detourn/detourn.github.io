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
           var help = $("<p><table style='width:75%' class='cmd'><tr><td><span class=\"blink2\">*</span> COMMANDS :</td><td>[m]ap</td><td>[d]erive</td><td>[g]lossary</td></tr><tr><td></td><td>[?] help</td><td>[clear]</td><td>[git]</td></tr></table></p>");

           var map = $("<div class=\"map\"></div>");
           var derive = $("<div class=\"derive\"></div>");
           var glossary = $("<div class=\"glossary\"></div>");

           var mOpen = $('<p><span class=\"cmd\">&#62;&nbsp;[m]ap is already open!</span></p><br>');
           var dOpen = $('<p><span class=\"cmd\">&#62;&nbsp;[d]erive is already open!</span></p><br>');
           var gOpen = $('<p><span class=\"cmd\">&#62;&nbsp;[g]lossary is already open!</span></p><br>');

           $.fn.mCmd = function() {
             $('.container').append(map);
             $(".map").html(ajax_load).load(loadMap);
           };

           $.fn.dCmd = function() {
             $('.container').append(derive);
             $(".derive").html(ajax_load).load(loadDerive);
           };

           $.fn.gCmd = function() {
             $('.container').append(glossary);
             $(".glossary").html(ajax_load).load(loadGlossary);
           };

           $.fn.newLine = function() {
            $('.container').append("<p>&#62;&nbsp;</p>").append(newLine);
            $(this).prop('disabled', true);
            $(this).removeClass('inputs');
            $('.inputs').replaceWith(newLine);
            $('.inputs:first').focus();
           };

            if (value == 'm' && !($('.map').length)) { // If input value is map
                $(this).mCmd();
                $(this).newLine();
            } else if (value == 'm'  && ($('.map').length)) { // If map is present
                $(map).removeClass('map');
                $('.container').append(mOpen);
                $(this).newLine();
            } else if (value == 'd' && !($('.derive').length)) { // If input value is derive
                $(this).dCmd();
                $(this).newLine();
            } else if (value == 'd'  && ($('.derive').length)) { // If derive is present
                $(derive).removeClass('derive');
                $('.container').append(dOpen);
                $(this).newLine();
            } else if (value == 'g' && !($('.glossary').length)) { // If input value is glossary
                $(this).gCmd();
                $(this).newLine();
            } else if (value == 'g'  && ($('.glossary').length)) { // If glossary is present
                $(glossary).removeClass('glossary');
                $('.container').append(gOpen);
                $(this).newLine();
            } else if (value == '?') { // If input value is ?
                $('.container').append(help);
                $(this).newLine();
            } else if (value == 'clear') { // If input value is clear
                $('.container').empty();
                $(this).newLine();
            } else if (value == 'git') { // If input value is clear
                window.open('https://github.com/unilogue', '_blank');
                $('.container').append("<br>");
                $(this).newLine();
            } else if (value != '') { // If input value is wrong
                $('.container').append(errorLine);
                $(this).newLine();
            } else if (value == '') { // If input value is wrong
                $('.container').append(errorLine);
                $(this).newLine();
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
