$(document).ready(function () {
  console.log('jQuery');

  /** Selector id */
  $('#silver').css('color', 'silver').addClass('border');
  $('#orange').css('color', 'orange');
  $('#maroon').css('color', 'maroon').addClass('border');

  /** Selector class - [0] or .eq(1) */
  $('.shadow').css('border-radius', '0.75rem');
  $('.border').click(function () {
    $(this).removeClass('border');
  });

  /** Selector tag */
  const paragraph = $('p');
  paragraph.css('cursor', 'pointer');
  paragraph.click(function () {
    const selector = $(this);
    if (selector.css('font-size') < '16px') {
      selector.addClass('border');
      selector.css('font-size', '16px');
    } else {
      selector.css('font-size', '12px');
    }
  });

  /** Selector attribute */
  $('[title="GitHub"]').css('color', 'black').addClass('text-decoration');
  $('[title="Google"]').css('color', 'red').addClass('text-decoration');
  $('[title="Twitter"]').css('color', 'aqua').addClass('text-decoration');
  $('[title="Instagram"]').css('color', 'purple').addClass('text-decoration');
  $('[title="Facebook"]').css('color', 'navy').addClass('text-decoration');

  /** Find and Parent */
  $('p, span')
    .css('border-radius', '0.75rem')
    .css('border', '1px solid white')
    .css('border-left-color', 'gray')
    .css('padding', '6px');

  const find = $('#paragraph').find('p');
  find.css('border-bottom-color', 'gray').css('padding', '1rem');

  find.parent().parent(); /** /container/paragraph/p */
});