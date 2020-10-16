import { home } from './home'
import { menu } from './menu'
import contact from './contact'
import clear  from './clear'

const navbar = () => {
	
	const container = document.getElementById("content");
	const nav = document.createElement('nav');
	const div = document.createElement('div');
	const link1 = document.createElement('span');
	const link2 = document.createElement('span');
	const link3 = document.createElement('span');

	link1.textContent = 'Home';
	link2.textContent = 'Menu';
	link3.textContent = 'Contact';


	container.appendChild(nav);
	container.appendChild(div);
	nav.appendChild(link1);
	nav.appendChild(link2);
	nav.appendChild(link3);

	link1.setAttribute('class','link');
	link2.setAttribute('class','link');
	link3.setAttribute('class','link');
	div.setAttribute('id', 'body');
	nav.setAttribute('class','nav');

	home();


	link1.addEventListener("click", ()=>{
		clear();
		home();
	});

	link2.addEventListener("click", ()=> {
		clear();
		menu();
	})

	link3.addEventListener("click", ()=>{
		clear();
		contact();
	})
}

export { navbar }