/* eslint-disable brace-style, padded-blocks */

import mainImg from './images/menu.jpeg';

const home = () =>
{
  const container = document.getElementById('body');
  const menu = document.createElement('div');
  const menuimg = document.createElement('img');
  const newline = document.createElement('br');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');

  container.appendChild(menu);
  menu.appendChild(menuimg);
  menu.appendChild(newline);
  menu.appendChild(h1);
  menu.appendChild(h2);

  menuimg.setAttribute('src', mainImg);
  menuimg.setAttribute('class', 'cover-img');
  menu.setAttribute('class', 'container-align');
  h1.setAttribute('class', 'center-text');
  h2.setAttribute('class', 'center-text');

  h1.textContent = 'Welcome to Tacos Jose';
  h2.textContent = 'Check our menu in menu page';
};

export default home;
