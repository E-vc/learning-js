$(document).ready(function () {
  const dragg_resiza = $('.dragg-resiza');
  /** Draggable - Allow elements to be moved using the mouse. */
  dragg_resiza.draggable();

  /** Resizable - Change the size of an element using the mouse. */
  dragg_resiza.resizable();

  const selectable = $('#selectable');
  /** Selectable - Use the mouse to select elements, individually or in a group. */
  selectable.selectable();

  const sortable = $('#sortable');
  /** Sortable - Reorder elements in a list or grid using the mouse. */
  sortable.sortable({
    update: (event, ui) => console.log(event.target, ui),
  });

  /** Droppable - Create targets for draggable elements. */
  $('#draggable').draggable();
  $('#droppable').droppable({
    drop: (event, ui) => $(this).find('#text').html('Droppable!'),
  });

  /** Effects */
  $('#show-effect').click(() => {
    /** slide, fade, drop, fold, puff, scale, shake, blind */
    $('#card-effect').effect('puff', 'slow');
    $('#card-effect').toggle('explode', 2000);
  });

  /** Tooltip - Customizable, themeable tooltips, replacing native tooltips. */
  $('a').tooltip();

  /** Dialog - Open content in an interactive overlay. */
  $('#show-dialog').click(function () {
    $('body').css('background', 'rgba(204, 204, 204, 0.5)')
    $('#dialog').dialog({
      close: () => $('body').css('background', 'white'),
    });
  });

  /** Datepicker - Select a date from a popup or inline calendar. */
  $('#datepicker').datepicker();

  /** Tabs - A single content area with multiple panels, each associated with a header in a list. */
  $('#tabs').tabs();
});