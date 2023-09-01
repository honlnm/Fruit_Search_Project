const input = document.querySelector('#fruit');
const suggestions = document.querySelector('ul');
const button = document.querySelector('#submit-button');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
	const userInput = input.value;
	const lCUserInput = userInput.toLowerCase();
	let results = fruit.filter(function (word) {
		let lowerCaseWord = word.toLowerCase();
		return lowerCaseWord.includes(lCUserInput);
	});
	showSuggestions(results, userInput);
}

function showSuggestions(results, inputVal) {
	suggestions.replaceChildren();
	if (inputVal) {
		results.forEach(function (fruitWord) {
			let li = document.createElement('li');
			suggestions.append(li);
			li.innerText = fruitWord;
		});
	};
}

function useSuggestion(e) {
	const selection = e.target;
	input.value = selection.innerText;
}

function openSearch() {
	window.open('http://google.com/search?q=fruit ' + input.value);
}

input.addEventListener('keyup', search);
suggestions.addEventListener('click', useSuggestion);
button.addEventListener('click', openSearch);

