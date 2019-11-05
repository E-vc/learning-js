$(document).ready(function () {
  /** jQuery - AJAX load() Method */
  $('#json').load('https://jsonplaceholder.typicode.com/photos/1');

  const url = 'https://rickandmortyapi.com/api/character';
  /** jQuery - AJAX get() Method */
  $.get(`${url}`, function (response) {
    response.results.forEach((character) => {
      $('#info-character').append(`
        <li class="list-base-item">
          <img class="img-character" src="${character.image}" alt="${character.name}" />
          ${character.name} - ${character.gender}
        </li>
      `);
    });
  });

  /** Toggle characters */
  $('#toggle').click(function () {
    $('#characters').fadeToggle('slow');
    $('#add-users').fadeToggle('slow');
  });

  const url_reqres = 'https://reqres.in/api/users';

  /** Event Click */
  $('#add-user').click(function () {
    const user = { 'name': $('#name').val(), 'job': $('#job').val() };
    createUser(url_reqres, user);
  });

  /** Event Submit */
  $('#form-add-users').submit(function (event) {
    event.preventDefault();
    const user = { 'name': $('input[id="name"]').val(), 'job': $('input[id="job"]').val() };
    createUser($(this).attr('action'), user);
    createUserAjax($(this).attr('action'), user.name);
  });
});

function createUser(url, user) {
  /** jQuery - AJAX post() Method */
  $.post(url, user, function (response) {
    $('#info-user').fadeIn('slide', function () {
      for (field in response) {
        $('#info-user').append(`<li class="list-horizontal-item"><strong>${field}</strong>: ${response[field]}</li>`);
      }
    });
  }).done(function () {
    $('[name="message"').append('&raquo; User added successfully.')
  });
}

function createUserAjax(url, name) {
  /** jQuery - AJAX post() Method - .ajax() */
  $.ajax({ /** dataType: 'json', contentType: 'application/json', beforeSend: function */
    url: url,
    type: 'POST',
    data: { name, movies: ['Joker', 'Ready or Not'] },
    success: function (data, status) { console.log(data, status) },
    error: function () { console.log('An occurred error') },
    timeout: 2000,
  });
}