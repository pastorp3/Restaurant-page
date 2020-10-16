import img_1 from './images/tacos.png'
import img_2 from './images/taco-bisteck.png'
import img_3 from './images/taco-chorizo.png'
import img_4 from './images/taco-cabeza.png'
import img_5 from './images/taco-barbacoa.png'
import img_6 from './images/taco-lengua.png'


const menu = () => {

	const container = document.getElementById("body");
	const menu = document.createElement('div');
	const text = document.createElement('h1');
	const flexbox = document.createElement('div');
	const flexbox2 = document.createElement('div');
	
	const taco1 = document.createElement('div');
	const taco2 = document.createElement('div');
	const taco3 = document.createElement('div');
	const taco4 = document.createElement('div');
	const taco5 = document.createElement('div');
	const taco6 = document.createElement('div');
	
	const newline = document.createElement('br');
	const newline2 = document.createElement('br');
	const newline3 = document.createElement('br');
	const newline4 = document.createElement('br');
	const newline5 = document.createElement('br');
	const newline6 = document.createElement('br');

	const img1 = document.createElement('img');
	const img2 = document.createElement('img');
	const img3 = document.createElement('img');
	const img4 = document.createElement('img');
	const img5 = document.createElement('img');
	const img6 = document.createElement('img');

	const text_taco1 = document.createElement('span');
	const text_taco2 = document.createElement('span');
	const text_taco3 = document.createElement('span');
	const text_taco4 = document.createElement('span');
	const text_taco5 = document.createElement('span');
	const text_taco6 = document.createElement('span');




	container.appendChild(menu);
	menu.appendChild(text);
	menu.appendChild(flexbox);
	flexbox.appendChild(taco1);
	flexbox.appendChild(taco2);
	flexbox.appendChild(taco3);

	menu.appendChild(flexbox2);
	flexbox2.appendChild(taco4);
	flexbox2.appendChild(taco5);
	flexbox2.appendChild(taco6);

	taco1.appendChild(img1);
	taco1.appendChild(newline);
	taco1.appendChild(text_taco1);

	taco2.appendChild(img2);
	taco2.appendChild(newline2);
	taco2.appendChild(text_taco2);

	taco3.appendChild(img3);
	taco3.appendChild(newline3);
	taco3.appendChild(text_taco3);

	taco4.appendChild(img4);
	taco4.appendChild(newline4);
	taco4.appendChild(text_taco4);

	taco5.appendChild(img5);
	taco5.appendChild(newline5);
	taco5.appendChild(text_taco5);

	taco6.appendChild(img6);
	taco6.appendChild(newline6);
	taco6.appendChild(text_taco6);


	text.setAttribute('class','center-text');
	flexbox.setAttribute('class','flex container-align');
	flexbox2.setAttribute('class','flex container-align');
	img1.setAttribute('src', img_1 );
	img1.setAttribute('class','menu-img');
	img2.setAttribute('class','menu-img');
	img2.setAttribute('src', img_2);
	img3.setAttribute('class', 'menu-img');
	img3.setAttribute('src',img_3);
	img4.setAttribute('class', 'menu-img');
	img4.setAttribute('src',img_4);
	img5.setAttribute('class', 'menu-img');
	img5.setAttribute('src',img_5);
	img6.setAttribute('class', 'menu-img');
	img6.setAttribute('src',img_6);
	taco1.setAttribute('class','center-text');
	taco2.setAttribute('class','center-text');
	taco3.setAttribute('class','center-text');
	taco4.setAttribute('class','center-text');
	taco5.setAttribute('class','center-text');
	taco6.setAttribute('class','center-text');

	text.textContent = "Tacos";
	text_taco1.textContent = "Tacos al Pastor";
	text_taco2.textContent = "Tacos al Bisteck";
	text_taco3.textContent = "Tacos de Chorizo";
	text_taco4.textContent = "Tacos de Cabeza";
	text_taco5.textContent = "Tacos de Barbacoa";
	text_taco6.textContent = "Tacos de Lengua";


}

export { menu }