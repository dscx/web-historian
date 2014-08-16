var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./http-helpers');
var parseUrl = require('url');
var fs = require('fs');
// require more modules/folders here!






exports.handleRequest = function (req, res) {
  //console.log(req); 
  var statusCode;
  //console.log(archive.paths.archivedSites);
  var simpleUrl = req.url.slice(1);
  
  //webPage = 

    if(req.url === "/"){
      switch(req.method){
        case "GET":
          utils.sendResponse(res,"<input>");//*****write in data later
          break;
        case "POST":

          break;
        case "OPTIONS":
          utils.sendResponse(res);
          break;
      }
    }
    else
      switch(req.method){
        case "GET":
        var file = utils.grabFile(res, simpleUrl);
        fs.readFile(file, 'utf8', function(err, data){
          if(err) throw err;
          utils.serveAssets(res, data, function(){
          });
        });

        break;
        case "OPTIONS":
        utils.sendResponse(res);
        break;
      }
 
  //res.end(archive.paths.list);
};


/*


2014-07-web-historian/archives/sites/www.google.com

archive.archivedSites = the folder with archived sites
if req.url === a name of file in path.arch... then
  server up that file


fs.readdir(archive.archivedSites, function(err, files){
    if(err){return console.log("ERROR")}
    return files;
})

loop through filenames array
if simpleUrl === file names[i]

*/