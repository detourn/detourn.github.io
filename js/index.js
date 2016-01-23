$(document).ready(function() {
  //Define first typing example:
     new TypingText(document.getElementById("example1"), 50);
     //Type out examples:
     TypingText.runAll();

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

           var errorLine = $("<p class=\"glitch\">&#62;&nbsp;UNKNOWN COMMAND</p><br>");
           var newLine = $('.inputs').clone(true).val('');
           var help = document.getElementById("cmd").innerHTML;


           var map = $("<div class=\"map\"></div>");
           var derive = $("<div class=\"derive\"></div>");
           var glossary = $("<div class=\"glossary\"></div>");
           var advice = $("<div id=\"advice\" class=\"advice\" style=\"max-height:350px; overflow-y: scroll;\"></div>");

           var mOpen = $('<p class=\"glitch\">&#62;&nbsp;[m]ap is already open!</p><br>');
           var dOpen = $('<p class=\"glitch\">&#62;&nbsp;[d]erive is already open!</p><br>');
           var gOpen = $('<p class=\"glitch\">&#62;&nbsp;[g]lossary is already open!</p><br>');
           var aOpen = $('<p class=\"glitch\">&#62;&nbsp;[a]dvice is already open!</p><br>');


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

           $.fn.aCmd = function() {
             $('.container').append(advice);
             $(".advice").html(ajax_load).load("commands/advice.html", ajax_error);
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
            } else if (value == '?') { // If input value is ?
               $('.container').append(help);
            } else if (value == 'clear') { // If input value is clear
               $('.container').empty();
            } else if (value == 'git') { // If input value is git
               window.open('https://github.com/unilogue', '_blank');
               $('.container').append("<br>");
            } else if (value == 'b') { // If input value is git
               window.open('https://ni-sui.tumblr.com', '_blank');
               $('.container').append("<br>");
            } else if (value == 'clever') { // If input value is git
               window.open('clever.html', '_self');
               $('.container').append("<br>");
            } else if (value == 'gis') { // If input value is git
               window.open('gis.html', '_self');
               $('.container').append("<br>");
            } else if (value == '3') {
               window.open('three.html', '_self');
               $('.container').append("<br>");
            } else if (value != '') { // If input value is wrong
               $('.container').append(errorLine);
            } else if (value == '') { // If input value is blank
               $('.container').append("<p class=\"glitch\">&#62;&nbsp;VALUE = null (0% DATA RECEIVED)</p><br>");
            }  $(this).newLine();

        }
    });

     $('html').keydown(function(e) {
      if (e.which == 88 && e.ctrlKey) { $('#cmd').show(); $('#prompt').hide();}
      else if (e.which == 118) {window.open('/', '_self');}
   });
 });
