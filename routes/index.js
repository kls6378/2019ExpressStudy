var express = require('express')
var router = express.Router()
var template = require('../lib/template.js')


router.get('/', function (req, res) {
  
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(req.list);
    var html = template.HTML(title, list,
      `
      <h2>${title}</h2>${description}
      <img src="/images/hello.jpg" style="width:300px; display:block; margin:0 auto;">
      `,
      `<a href="/topic/create">create</a>`
    );
    res.send(html)
})
module.exports = router