const fs = require('fs');
let code = fs.readFileSync('src/app/about/page.jsx', 'utf8');
code = code.replace(/src=\"assets\/images/g, 'src=\"/assets/images');
fs.writeFileSync('src/app/about/page.jsx', code);
console.log('Fixed images');
