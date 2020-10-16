const contact = () => {
		const container = document.getElementById("body");
	const menu = document.createElement('div');
	const text = document.createElement('h1');

	container.appendChild(menu);
	menu.appendChild(text);

	text.textContent = "Contact";

	text.setAttribute('class','center-text');
}

export { contact }