import axios from 'axios';
const clientDomain = 'https://blog.donilab.org/wp-json/wp/v2';


export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

const baseURL = `${clientDomain}`;

export default axios.create({
    baseURL,
    headers: customHeaders,
  });

 // export default api;

  export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};

