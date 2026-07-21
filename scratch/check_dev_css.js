import http from 'http';

http.get('http://localhost:5173/src/styles/global.css', (res) => {
  console.log('CSS Status:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('CSS length:', data.length);
    console.log('CSS sample:', data.substring(0, 300));
  });
}).on('error', (err) => {
  console.error('Error fetching CSS:', err.message);
});
