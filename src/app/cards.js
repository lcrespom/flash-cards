export function loadCards(id) {
	return Promise.resolve([
		{ front: 'Spain', back: 'Madrid' },
		{ front: 'France', back: 'Paris' },
		{ front: 'Great Britain', back: 'London' },
		{ front: 'Germany', back: 'Berlin' },
		{ front: 'Portugal', back: 'Lisbon' },
		{ front: 'Italy', back: 'Rome' }
	]);
}

export function saveCards(meta, cards = []) {
	// let method = 'POST';
	// if (meta.id.length > 0)
	// 	method = 'PUT';
	// else delete meta.id;
	//ToDo: perform AJAX call
	return 'card_set_id';
}
