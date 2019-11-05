$(document).ready(function () {
  $('img').each(function (index, element) {
    $(this).parent().append(element.alt)
  });
  showLinks();

  $('#add-link').click(function () {
    const new_link = $('#link');
    if (new_link.val().trim().length === 0) {
      $('#message').text('Please enter valid link');
      return false;
    }
    /**
     * append: add to the top of the list.
     * prepend: add to the end of the list.
     * html: add to the element.
     * before: add before of the list.
     * after: add after of the list.
     */
    $('#list-links').append(`<li class="list-base-item"><a href="${new_link.val()}" class="text-decoration"></a></li>`);
    showLinks();
    new_link.val('');
    $('#message').text('Link added');
  });
});

function showLinks() {
  $('a').each(function () {
    const href = $(this).attr('href');
    $(this).text(href);
    $(this).attr('target', '_blank'); // Add attribute to tag 'a'. (removeAttr)
  });
}