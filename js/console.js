$(document).ready(function() {

var bot = new cleverbot("BIsKhtIhZdmgbOPp", "DwikyXztHk6GEG7LcvHCKfObCxYduTMP");


bot.setNick("sessionname")

bot.create(function (err, session) {
  // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

  // Woo, you initialized cleverbot.io.  Insert further code here
});

$('#clever').keyup(function (e) {
   if (e.keyCode == 13) {

      var value = $(this).val();
      var input = value;

       if (value == input) {
          document.getElementById("input").innerHTML =
          '<p>&#62;&nbsp;' + bot.ask(input, function (err, response) {
            console.log(input);
            console.log(response); // Will likely be: "Living in a lonely world"
          }); + '</p>';
          $(this).val('');
       }

   }
});

if (typeof console  != "undefined")
  if (typeof console.log != 'undefined')
    console.olog = console.log;
else
  console.olog = function() {};

console.log = function(message) {
  console.olog(message);
  $('.console').append('<br>' + '<p>&#62;&nbsp;' + message + '</p>');
};
console.error = console.debug = console.info =  console.log
});