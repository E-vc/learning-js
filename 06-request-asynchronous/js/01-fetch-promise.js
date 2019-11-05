'use strict';
/** Using Fetch API */
const url = 'https://jsonplaceholder.typicode.com/posts';

/** List all resources */
fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => { throw new Error(err) });

/** Get a resource */
fetch(`${url}/1`)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => { throw new Error(err) });

/** Create a resource */
const body = {
  title: 'Valhalla', body: 'Deads', userId: 1,
};
fetch(`${url}`, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => { throw new Error(error) });

/** Update a resource - Using PUT */
fetch(`${url}/1`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => { throw new Error(error) });

/** Update a resource - Using PATCH */
fetch(`${url}/1`, {
  method: 'PATCH',
  body: JSON.stringify({ title: 'Grecia' }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => { throw new Error(error) });

/** Delete a resource */
fetch(`${url}/1`, { method: 'DELETE' })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => { throw new Error(error) });

/** Filtering resources */
fetch(`${url}?userId=1`)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => { throw new Error(error) });

/** ---------------------------------------------------------------------- */

let users = [];
let div_users = document.querySelector('#users');

fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(users => {
    users.data.map((user, idx) => {
      /** Show user */
      const name = document.createElement('h2');
      name.innerHTML = `${idx}. ${user.first_name} ${user.last_name}`;
      
      /** Show user avatar */
      const avatar = document.createElement('img');
      avatar.width = '100';
      avatar.src = user.avatar;
      avatar.style.borderRadius = '25px';
      
      div_users.appendChild(name);
      div_users.appendChild(avatar);
      document.querySelector('.loading').style.display = 'none';
    });
  })
  .catch(error => { throw new Error(error) });