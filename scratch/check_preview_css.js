import http from 'http';

http.get('http://localhost:4173/assets/index-5oA5zKLv.css', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (err) => {
  console.error('Error:', err.message);
});
