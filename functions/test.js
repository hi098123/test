const http = require('http');
const https = require('https');
//https://luckyyowu.tistory.com/346
export default (req, res) => {
  res.status(200).send(JSON.stringify(req.ip))
}
