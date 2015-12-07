// Hide both <div> by default


// Check on keydown
$('input').keydown(function() {
    if ($('input').val() == 'map') {  // If input value is div1
       
       $('#div1').slideDown();
  } else if ($('input').val() == 'derive') {  // If input value is div2
       
       $('#div2').slideDown();
  } else if ($('input').val() == 'glossary') {  // If input value is div3
       
       $('#div3').slideDown();
  } else if ($('input').val() > 0) {  // If input value is wrong
       
       $('#error').slideDown();
  } else {
       
  }
});
