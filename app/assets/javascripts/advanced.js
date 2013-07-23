$(document).ready(function(){
  var blur_func = function() {
    console.log('blur');
  }

  var change_func = function() {
    console.log('change');
  }

  var focus_func = function() {
    console.log('focus');
  }

  $('#name').blur(blur_func);
  $('#name').change(change_func);
  $('#name').focus(focus_func);

  var validate_age = function() {
    var age = parseInt($('#age').val());
    if (age >= 18) {
      $('p.status').text('Welcome').addClass('green');
    } else {
      $('p.status').text('Sorry').addClass('red');
    }
  };

  $('#age').blur(validate_age);

  $(document).mousemove(function (event) {
    $('#x').text(event.pageX);
    $('#y').text(event.pageY);

    if (event.pageX % 2 === 0) {
      $('#x').css('color', 'red');
  } else {
      $('#x').css('color', 'green');
  }

    if (event.pageY % 2 === 0) {
      $('#y').css('color', 'red');
  } else {
      $('#y').css('color', 'green');
  }

    var red = ((event.pageX * event.pageY) % 256);
    var green = ((event.pageX * event.pageY * 2) % 256);
    var blue = ((event.pageX * event.pageY * 3) % 256);
    var color = 'rgb(' + red +', '+ green +','+ blue +')';
    concole.log(color);

    $('body').css('background_color', color);

  })


});
