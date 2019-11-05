/** Events (click, hover, dbclick, blur, focus, move...) */
$(document).ready(function () {
  console.log('jQuery - Events');

  /** MouseHover */
  $('.container').hover(function () {
    $(this)
      .css('cursor', 'move')
      .css('background', '#eee');
  }, function () {
    $(this)
      .css('cursor', 'default')
      .css('background', '#fff')
  });

  /** MouseOver - MouseOut */
  $('.shadow').mouseover(function () {
    $(this).css('cursor', 'pointer');
    $(this).css('background', 'white');
  });

  $('.shadow').mouseout(function () {
    $(this)
      .css('cursor', 'default')
      .css('background', '#eee');
  });

  /** Click and Double Click */
  $('.shadow').click(function () {
    const p = document.createElement('p');
    const text = document.createTextNode('Event Click');
    p.appendChild(text);
    $(this).append(p);
  });

  $('.shadow').dblclick(function () {
    $('p').remove();
  });

  /** Blur and Focus */
  $('#name').focus(function () {
    $(this).parent().parent().find('.form-group').eq(0).css('border-bottom-color', 'olive');
  });

  const p = $('#show-name');

  $('#name').blur(function () {
    $(this).parent().parent().find('.form-group').eq(0).css('border-bottom-color', '#eee');
    const name = $(this).val();
    p.text(name).show();
  });

  /** MouseDown and MouseUp */
  p.mousedown(function () {
    $(this).css('font-size', '24px');
  });

  p.mouseup(function () {
    $(this).css('font-size', '16px');
  });

  /** MouseMove */
  const follow_me = $('#show-position');
  $(document).mousemove(function (event) {
    follow_me.css('left', event.clientX).css('top', event.clientY);
    follow_me.text(`x ${event.clientX} | y ${event.clientY}`).show();
  });
});