const input = document.querySelector('#fruit');
const suggestions = document.querySelector('ul');
const button = document.querySelector('#submit-button');
let liCount = 0;

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
	//select the input box
	const inputBox = document.getElementById('fruit');
	//get the current value in the input box
	const userInput = inputBox.value;
	//transform the input to lowercase for comparison
	const lCUserInput = userInput.toLowerCase();
	//compare the input to the fruit list and only pull out those fruits that contain the input
	let results = fruit.filter(function (word) {
		let lCWord = word.toLowerCase();
		return lCWord.includes(lCUserInput);
	});
	//update the dropdown with new results as the User types
	showSuggestions(results, userInput);
}

function showSuggestions(results, inputVal) {
	//select HTML parent of list to be created
	const ul = document.getElementById('suggestion-list');
	//when showSuggestions is run (on each key input), clear the list (so we can repopulate with new values)
	ul.replaceChildren();
	//if there is no input, nothing should happen. When there is input, li's are created under the ul HTML element
	if (inputVal) {
		results.forEach(function (fruitWord) {
			let li = document.createElement('li');
			ul.append(li);
			li.innerText = fruitWord;
		});
	};
	liCount = +(document.querySelectorAll('li').length);
}

function useSuggestion(e) {
	const selection = e.target;
	input.value = selection.innerText;
}

input.addEventListener('keyup', search);
suggestions.addEventListener('click', useSuggestion);

