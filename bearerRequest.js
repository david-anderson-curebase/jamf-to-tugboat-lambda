function getToken(headers, cb) {
    fetch('https://curebase.jamfcloud.com/api/v1/auth/token', headers)
    .then(res => res.json())
    .then(data => data.token)
    .then(token => cb(token))
    .catch(error => console.log('error', error))
}

export { getToken };