if(window.Twitch.ext) {



  window.Twitch.ext.onAuthorized(function(auth) {
    window.__onAuthorized(auth);
  });

  window.Twitch.ext.onContext(function(context) {
    // context.game = 'Sonic Mania';
    window.__onContext(context);
  });

  // window.Twitch.ext.onError(window.__onError(err));

}
