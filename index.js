
const credentials = btoa('TugboatCaptain:PbuEqLYJjV30ITlfYawa');
var token;

async function getToken(url = '') {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
        },
        redirect: 'follow'
    })
    .then(res => res.json())
    .then(data => token = data)
    .catch(error => console.log('error', error))
}

async function returnToken(url) {
    let token = await getToken(url);
}

getToken('https://curebase.jamfcloud.com/api/v1/auth/token')
console.log(token);