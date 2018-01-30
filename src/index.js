import text from './text';

function component() {
	var element = document.createElement('div');
	element.innerHTML = text;
	return element;
}

document.body.appendChild(component());