import main_img from './images/menu.jpeg'

const home = () => {
	const container = document.getElementById("body");
	const menu = document.createElement('div');
	const text = document.createElement('h1');
	const menu_img = document.createElement('img');
	const newline = document.createElement('br');
	const h1 = document.createElement('h1');
	const h2 = document.createElement('h2');



	container.appendChild(menu);
	menu.appendChild(menu_img);
	menu.appendChild(newline);
	menu.appendChild(h1);
	menu.appendChild(h2);


	menu_img.setAttribute('src',main_img);
	menu_img.setAttribute('class','cover-img');
	menu.setAttribute('class','container-align');
	h1.setAttribute('class','center-text');
	h2.setAttribute('class','center-text');

	h1.textContent = 'Welcome to Tacos Jose';
	h2.textContent = 'Check our menu in menu page';

};

export { home }