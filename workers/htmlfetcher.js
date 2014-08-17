// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var archive = require("../helpers/archive-helpers");
var scrape = require("http-request");
var fs = require("fs");
var cronJob = require('cron').CronJob;
//console.log(scrape.get);

//read sites.txt
  archive.addUrlToList("www.yahoo.com");
  archive.addUrlToList("www.cnn.com");
    archive.addUrlToList("www.wikipedia.com");
    archive.addUrlToList("www.msn.com");
    archive.addUrlToList("www.reddit.com");
var siteScraper = function(){
  var htmlPath = archive.paths.archivedSites;
  var siteList = fs.readFileSync(archive.paths.list, "utf8");
  var siteArray = siteList.split(" ");
  var stringUrl;
  if(siteArray[siteArray.length - 1].length === 0){
    siteArray.pop();
  }
  for (var i = 0; i < siteArray.length; i++) {
    plainUrl = siteArray[i];
    stringUrl = siteArray[i].toString();
    var savePath = htmlPath.concat("/", plainUrl);
    scrape.get(stringUrl, savePath, function(err, res){
    if (err) { throw err; }
      fs.writeFile(savePath, res.buffer, "utf8", function(){
        console.log("file written");
      });
    });
  }
};


    new cronJob('00 * * * * *', function(){
        siteScraper();
    }, null, true, "America/Los_Angeles");

// are the files being overwritten?
// add functionality to add urls from index page