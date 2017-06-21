import { RestClient } from '../utils/rest-client';

let prefix = location.hostname == 'localhost' ? 'http://localhost:3000' : '';
let cardsApi = new RestClient(prefix + '/api/cards');

const DUMMY_CARDS = {
	meta: {},
	cards: [
		{ front: 'Spain', back: 'Madrid' },
		{ front: 'France', back: 'Paris' },
		{ front: 'Great Britain', back: 'London' },
		{ front: 'Germany', back: 'Berlin' },
		{ front: 'Portugal', back: 'Lisbon' },
		{ front: 'Italy', back: 'Rome' }
	],
	_id: '1'
};

export function loadCards(id) {
	if (id == '1')
		return Promise.resolve(DUMMY_CARDS);
	return cardsApi.get(id).then(response => response.data);
}

export function saveCards(id, meta, cards = []) {
	let data = { meta, cards };
	if (id && id.length > 0) {
		data._id = id;
		return cardsApi.put(data).then(_ => id);
	}
	return cardsApi.post(data).then(response => response._id);
}
