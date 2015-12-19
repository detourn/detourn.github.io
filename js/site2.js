    $(document).ready(function() {

      // Hide both <div> by default
      $('#div1').hide();
      $('#div2').hide();
      $('#div3').hide();
      $('#error').hide();

      // Check on keydown
      $('input').keyup(function (e) {
    		if (e.keyCode == 13) {
          var value = $(this).val();
          $('#div1').hide();
          $('#div2').hide();
          $('#div3').hide();
          $('#error').hide();
          if (value == 'map') { // If input value is div1
            $('#div1').slideDown();
          } else if (value == 'derive') { // If input value is div2
            $('#div2').slideDown();
          } else if (value == 'glossary') { // If input value is div3
            $('#div3').slideDown();
          } else if (value != '') { // If input value is wrong
            $('#error').show();
          }
        }
      });
    });
