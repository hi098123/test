//const http = require('http');
const https = require('https');
//https://luckyyowu.tistory.com/346
export default (req_, res_) => {
  //res_.status(200).send(JSON.stringify(req_.ip))
  //res_.setHeader('Access-Control-Allow-Credentials', true)
  res_.setHeader('Access-Control-Allow-Origin', '*')
  res_.setHeader('Content-Type', 'text/plain')
  //res_.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  //res_.setHeader(
  //  'Access-Control-Allow-Headers',
  //  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  //)
  var options = {
    host: 'api.ip.pe.kr',
    //path: '/info'
  };

  var req = https.get(options, function(res) {
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
