(function (window) {
  var speakWord = "Hello world";
  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);
