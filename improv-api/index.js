import fetch from 'node-fetch';
import { bearerHeaders, bearerUrl } from './headers.js';

const call = (url, headers) => {fetch(url, headers).then(res => res.json()).then(res => console.log(res))}

call(bearerUrl, bearerHeaders)