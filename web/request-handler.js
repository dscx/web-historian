var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./http-helpers');
var parseUrl = require('url');
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
        utils.serveAssets(res, simpleUrl, function(){
          console.log("file delivered");
        });
        utils.sendResponse(res); //simpleUrl
        break;
        case "OPTIONS":
        utils.sendResponse(res);
        break;
      }
 
  //res.end(archive.paths.list);
};


/*


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