let cards = ['Lucky', 'Lucky', 'Lucky', 'Lucky', 'Lucky', 'Lucky', 'Lucky', 'Lucky', 'Lucky', 'Lucky', 'Lucky', 'Sad'];

function shuffle(arr) {
	let j, temp;
	for (let i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
let random_word = shuffle(cards);
var count = 0;

let card = document.querySelectorAll('.card');
card.addEventListener('click', getWord);





function getWord(id, event) {
	count++;
	[].forEach.call(document.getElementsByClassName('card'), function (e, i) {
		e.innerHTML = random_word[i];
	})


	document.getElementById(id).style.fontSize = '15px';
	let word = document.getElementById(id);
	let w = word.textContent;

	if (w == 'Lucky' && count == 11) {
		alert('Congratulations!You winner');
		document.querySelectorAll("*[style]").forEach(el => el.style.backgroundColor = 'green')
	} else if (w == 'Sad') {
		alert('Your lost');
		word.style.backgroundColor = 'red';
		document.querySelectorAll('.card').forEach(el => el.removeAttribute('onclick'))
	}


}








