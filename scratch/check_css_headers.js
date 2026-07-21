import http from 'http';

http.get('http://localhost:4173/assets/index-Beh0GxaS.css', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Downloaded size:', data.length);
    console.log('Sample content:', data.substring(0, 100));
  });
}).on('error', (err) => {
  console.error('Error fetching CSS:', err.message);
});
