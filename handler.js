var fs = require("fs");
var mditor = require("mditor");
var tp = require("tpjs");

var styleBuffer = fs.
  readFileSync(require.resolve('mditor/dist/css/mditor.min.css'))
  .toString();
var page = tp.compile(fs.readFileSync(__dirname + "/page.html").toString());

var ALLOWED_METHODS = ["GET"];

var Handler = module.exports = function(server) {
  var self = this;
  self.server = server;
  self.configs = self.server.configs;
  self.parser = new mditor.Parser();
};

//处理请求
Handler.prototype.handle = function(context) {
  var self = this;
  context.request.physicalPathExists(function(exists) {
    if (exists) {
      // markdown 只允许 get 请求
      if (ALLOWED_METHODS.indexOf(context.request.method) < 0) {
        context.notAllowed();
        return;
      }
      fs.readFile(context.request.physicalPath, function(err, data) {
        if (err) {
          context.error(err);
        } else {
          var html = page({
            style: styleBuffer,
            body: self.parser.parse(data.toString())
          });
          context.send(html, self.server.mime('.html'));
        }
      });
    } else {
      self.next(context);
    }
  });
};