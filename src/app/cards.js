import { RestClient } from '../utils/rest-client';

let prefix = location.hostname == 'localhost' ? 'http://localhost:3000' : '';
let cardsApi = new RestClient(prefix + '/api/cards');

export function listCards() {
	return cardsApi.getAll().then(response => response.data);
}

export function loadCards(id) {
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
