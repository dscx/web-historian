var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(url, callback){
  //open file provided
  var result;
    fs.readFile(exports.paths.list, 'utf8', function(err, data){
      if(err){throw err;}
      result = data;
      console.log("line 34 about to CALLBACK");
      callback(result);
    });
  //return result;
    //return url or number?
};

exports.isUrlInList = function(url, callback){
  //go through sites.txt searching for url
  var exists = false;
  exports.readListOfUrls(url, function(list){
    if(list.indexOf(url) > -1){
    console.log("line 45 IF BLOCK");
      exists = true;
    }
    callback(exists);
  });
};

exports.addUrlToList = function(url, callback){
  //should run isUrlInList
  exports.isUrlInList(url, function(bool){
    if(bool === false){
      url = url.concat("\n"); ///WHY???
      fs.appendFile(exports.paths.list, url, "utf8", function(err){
        if(err){throw err;}
        //send response ?
      }); 
    }
    //when it's true
    else{console.log("all done");}
  });
  
};

exports.isURLArchived = function(url){
  // this is part of our GrabFile fn
};

exports.downloadUrls = function(url){
  //site scraper
};
