let fact = axios.get('http://numbersapi.com/42?json');

let factAll = [];

const $factUl = $('#facts');

const favNum = 42;

// for (let i = 1; i < 5; i++) {
// 	factAll.push(axios.get(`http://numbersapi.com/${i}?json`));
// }

// Promise.all(factAll)
// 	.then((factArr) => factArr.forEach((f) => $factUl.append(`<li>${f.data.text}</li>`)))
// 	.catch((err) => console.log(err));

async function getFacts() {
	baseURL = 'http://numbersapi.com/42?json';

	let f1Promise = $.getJSON(`${baseURL}`);
	let f2Promise = $.getJSON(`${baseURL}`);
	let f3Promise = $.getJSON(`${baseURL}`);
	let f4Promise = $.getJSON(`${baseURL}`);

	let f1 = await f1Promise;
	let f2 = await f2Promise;
	let f3 = await f3Promise;
	let f4 = await f4Promise;

	$factUl.append(`<li>${f1.text}</li>`);
	$factUl.append(`<li>${f2.text}</li>`);
	$factUl.append(`<li>${f3.text}</li>`);
	$factUl.append(`<li>${f4.text}</li>`);
}

getFacts();
