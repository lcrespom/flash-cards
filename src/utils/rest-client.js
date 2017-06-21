export class RestClient {
	constructor(url) {
		this.url = url;
	}

	getAll() {
		return fetch(this.url)
		.then(response => response.json());
	}

	post(data) {
		return fetch(this.url, fetchInit('POST', data))
		.then(response => response.json());
	}

	put(data) {
		return fetch(this.url + '/' + data._id, fetchInit('PUT', data))
		.then(response => response.json());
	}

	delete(id) {
		return fetch(this.url + '/' + id, { method: 'DELETE'})
		.then(response => response.json());
	}
}

function fetchInit(method, data) {
	return {
		method,
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	};
}
