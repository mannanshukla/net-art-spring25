$(document).ready(function() {
  const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFC75F', '#C34A36', '#B388EB', '#00C9A7'];
  let index = 0;
  let firstClick = true;

  $('#container').on('click', function() {
    if (firstClick) {
      $('#description').fadeIn();
      $('body').css('color', '#fff'); 
      firstClick = false;
    }

    $('body').css('background-color', colors[index]);

    $('#title').css({
      'transform': `rotate(${Math.random() * 20 - 10}deg) scale(${1 + Math.random() * 0.3})`,
      'color': colors[(index + 1) % colors.length]
    });

    $('#description').css('color', colors[(index + 2) % colors.length]);

    index = (index + 1) % colors.length;
  });
});
