$(document).ready(function () {
    setTimeout(function(){
        $('.ball').fadeOut(500);
    }, 2000);
});

setTimeout(function(){
  $('body').addClass('loaded');
}, 2000);


$('#terms').click(function () {
  if($(this).is(':checked')) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
});