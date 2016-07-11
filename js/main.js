$('.created').hide();
$('.mess').hide();
$('.crea').hide();
$(function(){

  $('#host-event').submit(function(event){
    var schema = {
      name : $("#name").val(),
      type : $("#type").val(),
      host : $("#host").val(),
      location : $("#location").val(),
      start : $("#start-time").val(),
      end : $("#end-time").val(),
      guest : $("#guest").val(),
      info : $("#info").val()
    }

    var db = new Firebase('https://meetup-a696c.firebaseio.com/')
    db.child("events")
      .push().set(schema);
    event.preventDefault();
    $('#host-event')[0].reset();
    $('.created').show();
  });

  $('#create-ac').submit(function(event){
    event.preventDefault();
    if($('#agree').is(':checked')){
      $('.crea').hide();
      if ($('#password').val() != $('#rpass').val()){
        $('.mess').html("Passwords should be same");
        $('.mess').show();
      }else{
        $('.mess').hide();
        var pass = $('#password').val();
        console.log(pass.length);
        if(pass.length <8){

          $('.mess').html("Passwords should have atleast 8 char");
          $('.mess').show();
        }else{
          $('.mess').hide();
          $('.crea').show();
          $('#create-ac')[0].reset();
        }
      }
    }else{
      $('.crea').hide();
      $('.mess').html("Please agree the terms and condition");
      $('.mess').show();
    }


/*

      if($('#password').val() == $('#repeat-pass').val()){
        document.getElementById('repeat-pass').setCustomValidity('');

      }else{
        document.getElementById('repeat-pass').setCustomValidity("Not equal");
      }
    }else{
      alert("Not checked");
    }
    event.preventDefault();
*/
  });

});
