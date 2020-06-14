(function (window) {
  var speakWord = "goodbye world";
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);
