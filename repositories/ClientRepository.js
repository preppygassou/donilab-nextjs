import axios from 'axios';
const clientDomain = 'https://blog.donilab.org/wp-json/wp/v2';


export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

const baseURL = `${clientDomain}`;

const api = axios.create({
    baseURL,
  });

  export default api;

