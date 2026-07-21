import http from 'http';

http.get('http://localhost:4173/assets/Home-CfjAE-_u.js', (res) => {
  console.log('Home Chunk Status:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Home Chunk size:', data.length);
    console.log('Sample content:', data.substring(0, 100));
  });
}).on('error', (err) => {
  console.error('Error fetching Home chunk:', err.message);
});
