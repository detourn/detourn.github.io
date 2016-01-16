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
           var ajax_load = "<p id=\"load\">LOADING<span class=\"blink\">_</span></p>";
           var ajax_error = function( response, status, xhr ) {
                            if ( status == "error" ) {
                                var msg = "ERROR! ";
                                $('p#load').replaceWith("<p id=\"error\"></p>");
                                $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );}}

           var errorLine = $("<p class=\"cmd\">&#62;&nbsp;UNKNOWN COMMAND</p><br>");
           var newLine = $('.inputs').clone(true).val('');
           var help = $("<p><table style='width:75%' class='cmd'><tr><td><span class=\"blink2\">*</span> COMMANDS :</td><td>[m]ap</td><td>[d]erive</td><td>[g]lossary</td></tr><tr><td></td><td>[?] help</td><td>[clear]</td><td>[git]</td></tr></table></p>");

           var map = $("<div class=\"map\"></div>");
           var derive = $("<div class=\"derive\"></div>");
           var glossary = $("<div class=\"glossary\"></div>");
           var ok = $("<div class=\"ok\"></div>");

           var mOpen = $('<p><span class=\"cmd\">&#62;&nbsp;[m]ap is already open!</span></p><br>');
           var dOpen = $('<p><span class=\"cmd\">&#62;&nbsp;[d]erive is already open!</span></p><br>');
           var gOpen = $('<p><span class=\"cmd\">&#62;&nbsp;[g]lossary is already open!</span></p><br>');


           $.fn.mCmd = function() {
             $('.container').append(map);
             $(".map").html(ajax_load).load("commands/map.asp", ajax_error);
           };

           $.fn.dCmd = function() {
             $('.container').append(derive);
             $(".derive").html(ajax_load).load("commands/derive.asp", ajax_error);
           };

           $.fn.gCmd = function() {
             $('.container').append(glossary);
             $(".glossary").html(ajax_load).load("commands/glossary.asp", ajax_error);
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
            } else if (value == 'm'  && ($('.map').length)) { // If map is present
               $(map).removeClass('map');
               $('.container').append(mOpen);
            } else if (value == 'd' && !($('.derive').length)) { // If input value is derive
               $(this).dCmd();
            } else if (value == 'd'  && ($('.derive').length)) { // If derive is present
               $(derive).removeClass('derive');
               $('.container').append(dOpen);
            } else if (value == 'g' && !($('.glossary').length)) { // If input value is glossary
              $(this).gCmd();
            } else if (value == 'g'  && ($('.glossary').length)) { // If glossary is present
               $(glossary).removeClass('glossary');
               $('.container').append(gOpen);
            } else if (value == 'ok' && !($('.ok').length)) {
               $('.container').append(ok);
               $(".ok").html(ajax_load).load("commands/okc.html", ajax_error);
            } else if (value == 'ok' && ($('.ok').length)) {
               $(ok).removeClass('ok');
               $('.container').append("<p class=\"cmd\">&#62;&nbsp;[ok] is already open!</p><br>");
            } else if (value == '?') { // If input value is ?
               $('.container').append(help);
            } else if (value == 'clear') { // If input value is clear
               $('.container').empty();
            } else if (value == 'git') { // If input value is git
               window.open('https://github.com/unilogue', '_blank');
               $('.container').append("<br>");
            } else if (value != '') { // If input value is wrong
               $('.container').append(errorLine);
            } else if (value == '') { // If input value is blank
               $('.container').append("<p class=\"cmd\">&#62;&nbsp;VALUE = null (0% DATA RECEIVED)</p><br>");
            }  $(this).newLine();

        }
    });

     $('html').keydown(function(e) {
      if (e.which == 88 && e.ctrlKey) {
        $('#cmd').show();
        $('#prompt').hide();
    }
   });
 });
