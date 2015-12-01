
  
  var div = $('#div1').hide();

$('input').keydown(function() {

   var value = this.value;

   if ($('input').val() == 'map') {
       div.slideDown();
   } else {
      div.slideUp();   
   }

});
  
