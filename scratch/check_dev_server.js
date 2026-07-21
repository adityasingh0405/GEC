import http from 'http';

http.get('http://localhost:5173/', (res) => {
  console.log('Dev Server Status:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('HTML size:', data.length);
    console.log('HTML contains main.jsx:', data.includes('src/main.jsx'));
    console.log('HTML contains global.css:', data.includes('global.css'));
  });
}).on('error', (err) => {
  console.error('Error fetching Dev Server:', err.message);
});
