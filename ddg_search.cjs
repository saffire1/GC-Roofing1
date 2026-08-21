const https = require('https');

function searchDDG(query) {
  const options = {
    hostname: 'lite.duckduckgo.com',
    path: '/lite/',
    method: 'POST',
    headers: { 
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  
  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /unsplash\.com\/photos\/([a-zA-Z0-9_-]+)/g;
      let match;
      let count = 0;
      let ids = new Set();
      while ((match = regex.exec(data)) !== null && count < 10) {
        if (!ids.has(match[1])) {
          console.log(match[1]);
          ids.add(match[1]);
          count++;
        }
      }
    });
  });
  req.write('q=' + encodeURIComponent(query));
  req.end();
}

searchDDG('site:unsplash.com "roofing" OR "roof" roofer');
