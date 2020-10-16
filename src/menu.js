const menu = () => {
	const container = document.getElementById("body");
	const menu = document.createElement('div');
	const text = document.createElement('h1');
	const flexbox = document.createElement('div');
	const taco1 = document.createElement('div');
	const taco2 = document.createElement('div');
	const taco3 = document.createElement('div');

	const text_taco1 = document.createElement('span');
	const text_taco2 = document.createElement('span');
	const text_taco3 = document.createElement('span');

	container.appendChild(menu);
	menu.appendChild(text);
	menu.appendChild(flexbox);
	flexbox.appendChild(taco1);
	flexbox.appendChild(taco2);
	flexbox.appendChild(taco3);
	taco1.appendChild(text_taco1);
	taco2.appendChild(text_taco2);
	taco3.appendChild(text_taco3);


	text.setAttribute('class','center-text');
	flexbox.setAttribute('class','flex');

	text.textContent = "Tacos";
	text_taco1.textContent = "Tacos al Pastor";
	text_taco2.textContent = "Tacos al Bisteck";
	text_taco3.textContent = "Tacos al Chorizo";


}

export { menu }