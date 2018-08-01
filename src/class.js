(function (global) {
  var SlackClient = (function () {

    function SlackClient(token) {
      this.apiUrl = 'https://slack.com/api';
      this.headers = { 'Authorization': 'Bearer ' + token };

      if (!token) throw new Error('"token"は必須です');
    }

    SlackClient.prototype.authTest = function () {
      return this.fetch_(this.apiUrl + '/auth.test', { 'method': 'post' });
    };

    SlackClient.prototype.postMessageToUrl = function (url, params) {
      return this.fetch_(url, { 'method': 'post', 'payload': params });
    };

    SlackClient.prototype.openDialog = function (triggerId, dialog) {
      return this.fetch_(this.apiUrl + '/dialog.open', { 'method': 'post', 'payload': { 'trigger_id': triggerId, 'dialog': dialog } });
    };

    SlackClient.prototype.searchMessage = function (query, options) {
      var params = [];
      if (options) {
        for (var key in options) {
          params.push(key + '=' + options[key]);
        }
        params = '&' + params.join('&');
      }
      return this.fetch_(this.apiUrl + '/search.messages?query=' + encodeURIComponent(query) + params, { 'method': 'get' });
    };

    SlackClient.prototype.getReactionsFromMessage = function (channelId, timestamp) {
      return this.fetch_(this.apiUrl + '/reactions.get?channel=' + channelId + '&timestamp=' + timestamp, { 'method': 'get' });
    };

    SlackClient.prototype.fetch_ = function (url, options) {
      var response = UrlFetchApp.fetch(url, {
        'method': options.method,
        'muteHttpExceptions': true,
        'contentType': 'application/json; charset=utf-8',
        'headers': this.headers,
        'payload': JSON.stringify(options.payload) || {}
      });

      return response.getContentText();
    };

    return SlackClient;
  })();

  return global.SlackClient = SlackClient;
})(this);
