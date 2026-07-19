const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'www.linkedin.com',
    port: 443,
    path: '/in/zechariah-toh/',
    method: 'GET'
};

const request = https.request(options, (res) => {
    let responsebody = "";
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`---chunk: ${chunk.length}`);
        responsebody += chunk;
    });

    res.on('end', () => {
        fs.writeFile('linkedin.html', responsebody, (err) => {
            if (err) throw err;
            console.log('File saved!');
        });
        console.log("file downloaded");
    });
});
request.end();