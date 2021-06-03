let headers = $response.headers;
headers['X-Modified-By'] = 'Surge';
headers['X-Powered-By'] = 'Surge';
$done();