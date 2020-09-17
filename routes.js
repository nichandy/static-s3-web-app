const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // process.exit();
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }); // Data even fires each time a new chunk in the data buffer is ready to be read
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];         
            fs.writeFile('message.txt', message, (err) => {
                // Sending the response does not mean our event listener is dead
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });    
    }
    
    res.setHeader('Content-Type', 'text/html'); // Only a certain set of accepted headers
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my first Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

};

module.exports = requestHandler; // Can register a function, object etc. to other files using module.exports

// Exporting multiple things
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// Alternate way
// exports.handler = requestHandler;
// exports.someText = "Some hard coded text";