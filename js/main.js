
// CHANGE MAIL SETTINGS HERE ============================
$(document).ready(function(){
    $('#sendContactEmail').click(function(){
        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'ljt3I7hdhMYJd2w_n1HnVg', // Mandrillapp API Key --> Get it on https://mandrillapp.com/
            'message': { // email settings
              'from_email': $('#exampleInputEmail1').val(),
              'to': [
                  {
                    'email': 'arthur.leroy.beaulieu@tfhcapital.com', //'contact@tfhcapital.com',
                    'name': 'Contact',
                    'type': 'to'
                  }
                ],
              'autotext': 'true',
              'subject': $('#exampleInputEmail1').val() + ' from TFH Capital',
              'html': 'Numero: ' + $('#phoneInput').val() + '<br><br>'+ $('#exampleInputTextarea1').val()
            }
          }
         }).done(function(response) {
           console.log(response); 
           $('#information-form').hide();
           $('#confirmation-form').show();
        });
    });
});
 // ====================================================

var ie = (function(){
  var undef, v = 3, div = document.createElement('div');

  while (
    div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
    div.getElementsByTagName('i')[0]
    );

    return v> 4 ? v : undef;
}());

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (ie) ||  $( window ).width() < 996) {

}else{
  $(".onepage").onepage_scroll();
};

    $( document ).ready(function() {
    $('.navbar-inverse').height($('navbar-brand').height());
});

window.onload = function(e){
    $('#homescreen').height($(window).height());
    $('#finance .col-md-6.pic').height($('#finance .col-md-6.pic img').height());
};