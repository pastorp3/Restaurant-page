const home = () => {
	const container = document.getElementById("body");
	const menu = document.createElement('div');
	const text = document.createElement('h1');

		container.appendChild(menu);
	menu.appendChild(text);

	text.textContent = "Home";

};

export { home }