const clear = () => {
	const parent = document.getElementById('body');
	parent.removeChild(parent.lastElementChild);
}

export {
	clear
}