if(window.Twitch.ext) {



  window.Twitch.ext.onAuthorized(function(auth) {
    window.__onAuthorized(auth);
  });

  window.Twitch.ext.onContext(function(context) {
    window.__onContext(context);
  });

  // window.Twitch.ext.onError(window.__onError(err));

}
