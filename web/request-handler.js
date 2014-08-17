var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./http-helpers');
var parseUrl = require('url');
var fs = require('fs');
// require more modules/folders here!






exports.handleRequest = function (req, res) {
  //console.log(req._postData); 
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
          var scrapeUrl = req._postData.url;
        
          archive.addUrlToList(scrapeUrl, function(){
            //redirect to result
          });
          //redirect to loading.html page
          utils.redirect(res, "loading.html");

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
        if(file === null){
          utils.sendResponse(res, null, 404);
        }
        else {
          utils.readFiles(res, file, 'utf8');
        }

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