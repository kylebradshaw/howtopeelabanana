/* global Howl, alert */

'use strict';

window.onload = function() {
  var sound = new Howl({
    urls: ['../assets/sounds/bananas-slow.mp3'],
    autoplay: true,
    loop: false,
    volume: 0.2,
    onend: function() {
      window.ga('send', 'event', {
        eventCategory: 'Surprised',
        eventAction: 'Listened',
        eventLabel: 'BananaAudio'
      });
    }
  });
  window.setTimeout(function(){
    var dest = document.querySelector('#dest').href;
    window.ga('send', 'event', {
      eventCategory: 'Success',
      eventAction: 'Redirected',
      eventLabel: 'BananaVideo'
    });
    window.location = dest;
  }, 4000);
};