const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            let content = fs.readFileSync('./views/home/index.html');
            res.writeHead(200, {
                'Content-Type': 'text/html',
            });
            res.write(content);
            break;
        case '/styles/site.css':
            let css = fs.readFileSync('./styles/site.css');
            res.writeHead(200, {
                'Content-Type': 'text/css',
            });
            res.write(css);
            break;
        case '/js/script.js':
            let js = fs.readFileSync('./js/script.js');
            res.writeHead(200, {
                'Content-Type': 'text/javascript',
            });
            res.write(js);
            break;
        default:
            res.statusCode = 404;
            break;
    }
    res.end();
});

app.listen(5000);

console.log('App is listening on port 5000...');