const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/' && req.method === 'GET') {
        res.write('<html><body>');
        res.write('<p>Greetings!</p>');
        res.write('<form method="POST" action="/users"><input type="text" name="name"/><button type="SUBMIT">Submit</button></form>')
        res.write('</body></html>');
		return res.end();
    }
    
    if (req.url === '/users' && req.method === 'GET') {
        res.write('<html><body>');
        res.write('<li>Anna</li>');
        res.write('<li>Thomas</li>');
        res.write('<li>Martin</li>');
        res.write('</li></li>');
        return res.end();
    }

    if (req.url === '/users' && req.method === 'POST') {
        const body = [];

        req.on('data', (chuck) => {
            body.push(chuck);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('Name submitted: ', parsedBody.split('=')[1]);
        })

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000);