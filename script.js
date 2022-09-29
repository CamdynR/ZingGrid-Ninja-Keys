const ELEMS = {};
const NINJA_DATA = [
	{
		id: 'light-theme',
		title: 'Light Theme',
		handler: () => {
			ELEMS?.zinggrid.setAttribute('theme', 'light');
		},
	},
	{
		id: 'dark-theme',
		title: 'Dark Theme',
		handler: () => {
			ELEMS?.zinggrid.setAttribute('theme', 'dark');
		},
	},
];

function queryElements() {
	ELEMS.ninja = document.querySelector('ninja-keys');
	ELEMS.zinggrid = document.querySelector('zing-grid');
}

function addToNinjaData() {
	ELEMS.ninja.data = NINJA_DATA;
}

function init() {
	queryElements();
	addToNinjaData();
}

document.addEventListener('DOMContentLoaded', init);
