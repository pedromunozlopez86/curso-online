(function() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    firebase.auth().languageCode = 'es'
    
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          return true;
        },
        uiShown: function() {
          document.getElementById('loader').style.display = 'none';
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: 'semana-1.html',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
    ;
    
})();

