const base_url = 'https://deckofcardsapi.com/api/deck';

let deckId;

let button = document.querySelector('button');

let field = document.getElementById('mid');

button.addEventListener('click', getCard);

async function getCard() {
	if (deckId === undefined) {
		res = await axios.get(`${base_url}/new/shuffle`);
		deckId = res.data.deck_id;

		res2 = await axios.get(`${base_url}/${deckId}/draw/`);
		appendCard(res2.data.cards[0].image);
	} else {
		res = await axios.get(`${base_url}/${deckId}/draw/`);
		appendCard(res.data.cards[0].image);
	}
}

const appendCard = (cardImg) => {
	mid.insertAdjacentHTML('beforeend', `<img src="${cardImg}"></img>`);
};
