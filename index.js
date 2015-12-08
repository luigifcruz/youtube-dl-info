'use strict';

var exec = require("exec");

function get(url, json) {
  var ItIsURL = new RegExp(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g);

  if (link.match(ItIsURL)) {
    exec("youtube-dl -J " + link, function(err, out, code) {
        if (err instanceof Error) {
          process.nextTick(function(){
             callback(new Error(err), null);
          });
          return;
        } else {
          if (IsJsonString(out)) {
            var responseJSON = JSON.parse(out);
            process.nextTick(function(){
               callback(null, responseJSON);
            });
          } else {
            process.nextTick(function(){
               callback(new Error("youtube-dl doesn't support this URL."), null);
            });
            return;
          }
        }
    });
  } else {
    process.nextTick(function(){
       callback(new Error("Bad URL provided."), null);
    });
    return;
  }
}

function IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
}
module.exports = {
  get: get
};
