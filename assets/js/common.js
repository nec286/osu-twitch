if(window.Twitch.ext) {

  window.Twitch.ext.onAuthorized(function(auth) {
    window.__onAuthorized(auth);
  });

  window.Twitch.ext.onContext(function(context) {
    window.__onContext(context);
  });

  // window.Twitch.ext.onError(window.__onError(err));

  window.Twitch.ext.listen('broadcast', function(target, contentType, message) {
    window.__onMessage(message);
  });

}
