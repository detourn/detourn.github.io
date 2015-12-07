// Hide both <div> by default
$('#div1').hide();
$('#div2').hide();
$('#div3').hide();
$('#error').hide();

// Check on keydown
$('input').keydown(function() {
  if ($('input').val() == 'map') {  // If input value is div1
       $('#div2').hide();
       $('#div3').hide();
       $('#div1').slideDown();
  } else if ($('input').val() == 'derive') {  // If input value is div2
       $('#div1').hide();
       $('#div3').hide();
       $('#div2').slideDown();
  } else if ($('input').val() == 'glossary') {  // If input value is div2
       $('#div1').hide();
       $('#div2').hide();
       $('#div3').slideDown();
  } else {
       $('#div1').hide();
       $('#div2').hide();
       $('#div3').hide();
       $('#error').slideDown();
  }
});
