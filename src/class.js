(function(global) {
  var SlackClient = (function() {

    function SlackClient(token) {
      this.apiUrl = 'https://slack.com/api';
      this.headers = {'Authorization': 'Bearer ' + token};

      if (!token) throw new Error('"token"は必須です');
    }

    SlackClient.prototype.authTest = function() {
      return this.fetch_('/auth.test', {'method': 'post'});
    };

    SlackClient.prototype.fetch_ = function(endPoint, options) {
      var url = this.apiUrl + endPoint;
      var response = UrlFetchApp.fetch(url, {
        'method': options.method,
        'muteHttpExceptions': true,
        'contentType': 'application/json; charset=utf-8',
        'headers': this.headers,
        'payload': JSON.stringify(options.payload) || {}
      });

      return JSON.parse(response.getContentText());
    };

    return SlackClient;
  })();

  return global.SlackClient = SlackClient;
})(this);
