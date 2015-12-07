// Hide both <div> by default
$('#div1').hide();
$('#div2').hide();
$('#div3').hide();

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
  } else {  // If input value is not equal to div1 or div2, hide both
      $('#div1').hide();
      $('#div2').hide();
      $('#div3').hide();
  }
});
