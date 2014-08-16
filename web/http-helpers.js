var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  var filePath = JSON.stringify(archive.paths.archivedSites);
  console.log(filePath, "is the file path");
  var files = []; //needs to be populated with files from filePath
  var webistes = fs.readdir(filePath, function(err, files){
      if(err){return console.log("file not found");}
        return files;
  });
  for (var i = 0; i < webistes.length; i++) {
    if(asset === webistes[i]){
      return asset; //returns an HTML file
    }
  }
};


exports.sendResponse = function(res, data, status){

  status = status || 200;
  res.writeHead(status, headers);
  res.end(JSON.stringify(data));
};
// As you progress, keep thinking about what helper functions you can put here!
