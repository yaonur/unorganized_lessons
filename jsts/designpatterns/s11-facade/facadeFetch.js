function getFetch(url,params = {}) {
	const queryString = Object.entries(params).map(e=>`${e[0]}=${e[1]}`).join('&')
	return fetch(`${url}?${queryString}` ,{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
}