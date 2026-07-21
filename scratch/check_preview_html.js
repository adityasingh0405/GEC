import http from 'http';

http.get('http://localhost:4173/', (res) => {
  console.log('Preview Server Status:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('HTML size:', data.length);
    console.log('HTML contains index-5oA5zKLv.css:', data.includes('index-5oA5zKLv.css'));
    console.log('HTML contains index-plU8qPul.js:', data.includes('index-plU8qPul.js'));
  });
}).on('error', (err) => {
  console.error('Error fetching preview server:', err.message);
});
