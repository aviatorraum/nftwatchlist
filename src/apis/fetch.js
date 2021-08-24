import QS from 'query-string';

const parseResponse = response => {
  return response.text().then(body => (
    (body) ? JSON.parse(body) : {}
  ));
};

export const fetchGet = (url, payload={}) => {
  const realUrl = Object.keys(payload).length === 0
    ? url
    : `${url}?${QS.stringify(payload)}`;

  return fetch(realUrl, { method: 'GET' })
    .then(parseResponse)
    .catch(err => console.log(err));
}

