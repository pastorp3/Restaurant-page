/* eslint-disable brace-style, padded-blocks */

const contact = () =>
{
  const container = document.getElementById('body');
  const menu = document.createElement('div');
  const h1 = document.createElement('h1');
  const text = document.createElement('div');

  container.appendChild(menu);
  menu.appendChild(h1);
  menu.appendChild(text);

  h1.textContent = 'Contact';
  text.innerHTML = '<p>Location: Mexico, Morelia , Michoacan </p><p> Phone: 4434041612 \n </p><p>Email: tacosjose@gmail.com</p>';

};

export default contact;
