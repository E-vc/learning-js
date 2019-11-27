$(document).ready(() => {
  /** Slider */
  if (window.location.href.indexOf('index') > -1) {
    $('.slider').bxSlider({ mode: 'fade', captions: true, pager: false });

    /** Dynamic information - Posts */
    const posts = [
      {
        title: 'First publication',
        content: 'Quisque quis interdum nisl. Curabitur quis pulvinar lorem. Vestibulum congue metus id congue ultrices. Phasellus malesuada massa egestas arcu maximus tincidunt. Cras id consequat dolor, sed vulputate ex. Cras vel mi non mi interdum aliquet eu vitae sapien. Duis condimentum condimentum euismod. Vivamus ac mattis justo. Mauris interdum viverra dictum. Mauris pulvinar lectus lacinia auctor semper. Curabitur congue sapien non magna cursus malesuada. Suspendisse sollicitudin lorem mauris, a viverra est tincidunt at.',
        published: moment().format('Do MMM YYYY'),
      },
      {
        title: 'Second publication',
        content: 'Etiam iaculis lectus non consectetur finibus. Quisque porttitor mauris ac nisl gravida, in ornare turpis feugiat. Morbi mi quam, condimentum non sem ut, blandit faucibus urna. Nunc eu felis eros. Duis egestas feugiat venenatis. Ut faucibus, sem ut rhoncus ultrices, sem ex ornare massa, et vehicula arcu ex at tortor. Duis vel condimentum massa, non fermentum magna. Suspendisse eu egestas odio, id auctor neque. Praesent blandit massa felis, id viverra lacus lacinia et. Mauris suscipit nisi quis eleifend malesuada.',
        published: moment().format('Do MMM YYYY'),
      },
    ];

    const articles = $('.articles');
    for (let i = 0; i < posts.length; i += 1) {
      const post = `
        <article class="article card">
          <p class="h2 color"><img src="./assets/icon/news.svg" alt="News" class="icon" />${posts[i].title}</p>
          <div class="divider"></div>
          <span class="date">Posted on - ${posts[i].published}</span>
          <div class="divider"></div>
          <p class="text-justify">${posts[i].content}</p>
          <button type="button" class="btn btn-outline color">Read more &rarr;</button>
        </article>
      `;
      articles.append(post)
    }
  }

  /** Change themes */
  const theme = $('#theme');
  $('.teal').click(() => theme.attr('href', './css/theme-teal.css'));
  $('.olive').click(() => theme.attr('href', './css/theme-olive.css'));

  /** Automatic scroll to top */
  $('#to-top').click((event) => {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  /** Login false */
  const name = $('#name'), email = $('#email'), password = $('#password');

  const dialog = $('#dialog-sign-in').dialog({
    autoOpen: false, height: 460, width: 460, modal: true,
    buttons: {
      Cancel: () => dialog.dialog('close'),
      'Create an account': addUser,
    },
  });

  /** Open content in an interactive overlay */
  $('#sign-in').click(() => dialog.dialog('open'));

  /** Set values in the localStorage */
  function addUser() {
    localStorage.setItem('name', name.val());
    localStorage.setItem('email', email.val());
    localStorage.setItem('password', password.val());
    showUser();
  }

  /** Get values of the localStorage in an element */
  function showUser() {
    const value = localStorage.getItem('name');
    if (value) {
      $('#get-name').html(value);
    }
    dialog.dialog("close");
  }

  /** Accordion About me */
  $('#about-me').accordion();
});