(function(global) {
  var SlackClient = (function() {

    function SlackClient(token) {
      this.apiUrl = 'https://slack.com/api';
      this.headers = {'Authorization': 'Bearer ' + token};

      if (!token) throw new Error('"token"は必須です');
    }

    return SlackClient;
  })();

  return global.SlackClient = SlackClient;
})(this);
