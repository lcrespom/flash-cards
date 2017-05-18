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
