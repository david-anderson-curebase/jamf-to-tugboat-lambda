import fs from 'fs';

const url = 'https://curebase.jamfcloud.com/JSSResource/computerreports'
const path = 'computerreports'
const full_path = url + path



function getReport(token) {
    const headers = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        redirect: 'follow'
    }
    fetch(url, headers)
    .then(res => res.text())
    .then(data => fs.writeFile(`${path}.json`, data, function (err) {
        if (err) throw err;
        console.log("yo yo yo.")
    }))
    .catch(error => console.log('error', error))
}

export { getReport };