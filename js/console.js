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
            bot.ask(input, function (err, response) {
            console.log('me > ' + input);
            console.log('cb > ' + response); // Will likely be: "Living in a lonely world"
          });
          $(this).val('');
       }

   }
});

$('html').keydown(function(e) {
 if (e.which == 118) {
    window.open('/', '_self');
}
});

if (typeof console  != "undefined")
  if (typeof console.log != 'undefined')
    console.olog = console.log;
else
  console.olog = function() {};

console.log = function(message) {
  console.olog(message);
  $('.console').append('<br>' + '<p>' + message + '</p>');
};
console.error = console.debug = console.info =  console.log
});
