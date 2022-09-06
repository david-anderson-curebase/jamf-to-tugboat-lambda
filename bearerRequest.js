function getToken(url, headers) {
    let token;
    fetch(url, headers)
    .then(res => res.json())
    .then(data => data.token)
    .then(token => console.log(token))
    .catch(error => console.log('error', error))
}

export { getToken };