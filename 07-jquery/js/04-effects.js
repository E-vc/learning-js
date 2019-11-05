$(document).ready(function () {
  const element = $('#element');

  /** normal, fas, fast, slow */

  $('#hide').click(function () {
    // element.hide('fas');
    // element.fadeIn('fast');
    // element.fadeTo('slow', 0.1);
    element.slideUp('normal');
  });

  $('#show').click(function () {
    // element.show('fas');
    // element.fadeOut('fast');
    // element.fadeTo('slow', 1);
    element.slideDown('normal');
  });

  $('#both').click(function () {
    // element.toggle('normal');
    // element.fadeToggle('normal');
    element.slideToggle('normal');
  });

  $('#animation').click(function () {
    element.animate({
      opacity: 0.5,
      fontSize: '+=24px',
    }, 4000, 'linear', function () {
      $(this).after('<div>Animation complete.</div>');
    });
  });
});