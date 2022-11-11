const http = require('http');
const https = require('https');
//https://luckyyowu.tistory.com/346
export default (req_, res_) => {
  //res_.status(200).send(JSON.stringify(req_.ip))
  var options = {
    host: 'www.google.com',
    path: '/index.html'
  };

  var req = http.get(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function() {
      var body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      res_.status(200).send(body)
      // ...and/or process the entire body here.
    })
  });

  req.on('error', function(e) {
    //console.log('ERROR: ' + e.message);
    res_.status(200).send(e.message)
  });
}
