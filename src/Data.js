exports.get = (url) => fetch(url).then(res => res.text());
