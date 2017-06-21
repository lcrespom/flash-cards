export class RestClient {
	constructor(url) {
		this.url = url;
	}

	getAll() {
		return getJson(fetch(this.url));
	}

	get(id) {
		return getJson(fetch(this.url + '/' + id));
	}

	post(data) {
		return getJson(fetch(this.url, fetchInit('POST', data)));
	}

	put(data) {
		return getJson(fetch(this.url + '/' + data._id, fetchInit('PUT', data)));
	}

	delete(id) {
		return getJson(fetch(this.url + '/' + id, { method: 'DELETE' }));
	}
}


function getJson(promise) {
	return promise.then(response => response.json());
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
