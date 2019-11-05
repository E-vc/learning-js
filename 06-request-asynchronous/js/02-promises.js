'use strict';
/** Promises */
let ul_list = document.querySelector('#list');
let div_users = document.querySelector('#users');

/** Create Promise - Object lady */
function getObjectLady() {
  const lady = {
    email: 'kana.tachibana@gmail.com',
    last_name: 'Tachibana',
    first_name: 'Kana',
    avatar: './img/lady-kana.jpg',
  };
  return new Promise((resolve, reject) => {
    const lady_string = JSON.stringify(lady);
    return typeof lady_string !== 'string'
      ? reject(new Error('Failed to convert object to string.'))
      : resolve(lady_string);
  });
}

/** Show users in a list */
function showUsers(users) {
  users.forEach(user => {
    let li = document.createElement('li');
    let value = document.createTextNode(`${user.first_name} ${user.last_name}`);
    li.appendChild(value);
    ul_list.appendChild(li);
  });
  document.getElementsByClassName('loading')[0].style.display = 'none';
}

/** Show a user named Kana */
function showLady(lady) {
  const span = document.createElement('span');
  const value = document.createTextNode(`${lady.first_name} ${lady.last_name}`);
  span.appendChild(value);

  let avatar = document.createElement('img');
  avatar.setAttribute('width', '100');
  avatar.style.borderRadius = '25px';
  avatar.setAttribute('src', `${lady.avatar}`);

  div_users.appendChild(span);
  document.querySelector('#avatar').appendChild(avatar);
}

/** Promise chaining */
let getUsers = () => {
  fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then((users) => {
      showUsers(users.data);
      return getObjectLady();
    })
    .then(user => showLady(JSON.parse(user)))
    .catch((error) => {
      throw new Error('Failed function ' + getUsers.name + ': ' + error);
    });
}

getUsers();