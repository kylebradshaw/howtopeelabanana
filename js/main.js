'use strict';
window.onload = function() {
  window.setTimeout(function(){
    var dest = document.querySelector('#dest').href;
    window.location = dest;
  }, 4000);
};