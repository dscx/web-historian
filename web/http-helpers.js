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

exports.grabFile = function(res, url, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  console.log(archive.paths.archivedSites, "is the file path");
  var websites = fs.readdirSync(archive.paths.archivedSites);
  if(websites !== undefined){
    for (var i = 0; i < websites.length; i++) {
      if(websites[i] === url){
        console.log(archive.paths.archivedSites.concat("/",websites[i]),"file name");
        var fileName = archive.paths.archivedSites.concat("/",websites[i]);
        
        return fileName;
      }
    }
  }
};


exports.sendResponse = function(res, data, status){

  status = status || 200;
  res.writeHead(status, headers);
  res.end(JSON.stringify(data));
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  var status = 200;
  res.writeHead(status, headers);
  res.end(asset);
 
};
// As you progress, keep thinking about what helper functions you can put here!
