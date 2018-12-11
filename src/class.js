var _ = Underscore.load();

(function (global) {
  var SlackClient = (function () {

    function SlackClient(token) {
      this.apiUrl = 'https://slack.com/api';
      this.headers = { Authorization: 'Bearer ' + token };

      if (!token) throw new Error('"token"は必須です');
    }

    SlackClient.prototype.authTest = function () {
      return this.fetch_(Utilities.formatString('%s/auth.test', this.apiUrl), { method: 'post' });
    };

    SlackClient.prototype.postMessage = function (channel, text, options) {
      if (!channel) throw new Error('"channel"は必須です');
      if (!text) throw new Error('"text"は必須です');

      if (!options) options = {};
      return this.fetch_(Utilities.formatString('%s/chat.postMessage', this.apiUrl), { method: 'post', payload: _.extend({
        channel: channel,
        text:    text
      }, options) });
    };

    SlackClient.prototype.postEphemeral = function (channel, text, userId, options) {
      if (!channel) throw new Error('"channel"は必須です');
      if (!text) throw new Error('"text"は必須です');
      if (!userId) throw new Error('"userId"は必須です');

      if (!options) options = {};
      return this.fetch_(Utilities.formatString('%s/chat.postEphemeral', this.apiUrl), { method: 'post', payload: _.extend({
        channel: channel,
        text:    text,
        user:    userId
      }, options) });
    };

    SlackClient.prototype.updateMessage = function (channelId, text, timestamp, options) {
      if (!channelId) throw new Error('"channelId"は必須です');
      if (!text) throw new Error('"text"は必須です');
      if (!timestamp) throw new Error('"timestamp"は必須です');

      if (!options) options = {};
      return this.fetch_(Utilities.formatString('%s/chat.update', this.apiUrl), { method: 'post', payload: _.extend({
        channel: channelId,
        text:    text,
        ts:      timestamp
      }, options) });
    };

    SlackClient.prototype.deleteMessage = function (channelId, timestamp, options) {
      if (!channelId) throw new Error('"channelId"は必須です');
      if (!timestamp) throw new Error('"timestamp"は必須です');

      if (!options) options = {};
      return this.fetch_(Utilities.formatString('%s/chat.delete', this.apiUrl), { method: 'post', payload: _.extend({
        channel: channelId,
        ts:      timestamp
      }, options) });
    };

    SlackClient.prototype.unfurlUrl = function (channelId, timestamp, unfurls, options) {
      if (!channelId) throw new Error('"channel"は必須です');
      if (!timestamp) throw new Error('"timestamp"は必須です');
      if (!unfurls) throw new Error('"unfurls"は必須です');

      if (!options) options = {};
      return this.fetch_(Utilities.formatString('%s/chat.unfurl', this.apiUrl), { method: 'post', payload: _.extend({
        channel: channelId,
        ts:      timestamp,
        unfurls: unfurls
      }, options) });
    };

    SlackClient.prototype.postMessageToUrl = function (url, params) {
      if (!url) throw new Error('"url"は必須です');
      if (!params) throw new Error('"params"は必須です');

      return this.fetch_(url, { method: 'post', payload: params });
    };

    SlackClient.prototype.openDialog = function (triggerId, dialog) {
      if (!triggerId) throw new Error('"triggerId"は必須です');
      if (!dialog) throw new Error('"dialog"は必須です');

      return this.fetch_(Utilities.formatString('%s/dialog.open', this.apiUrl), { method: 'post', payload: {
        trigger_id: triggerId,
        dialog: dialog
      } });
    };

    SlackClient.prototype.searchMessages = function (query, options) {
      if (!query) throw new Error('"query"は必須です');

      if (!options) options = {};
      var params = this.buildUrlParam_(_.extend({ query: query }, options));
      return this.fetch_(Utilities.formatString('%s/search.messages?%s', this.apiUrl, params), { method: 'get' });
    };

    SlackClient.prototype.getReactionsFromMessage = function (channelId, timestamp) {
      if (!channelId) throw new Error('"channelId"は必須です');
      if (!timestamp) throw new Error('"timestamp"は必須です');

      return this.fetch_(Utilities.formatString('%s/reactions.get?channel=%s&timestamp=%s', this.apiUrl, channelId, timestamp), { method: 'get' });
    };

    SlackClient.prototype.buildUrlParam_ = function (params) {
      var temp = [];
      for (var key in params) {
        temp.push(Utilities.formatString('%s=%s', key, encodeURIComponent(params[key])));
      }
      return temp.join('&');
    };

    SlackClient.prototype.isJSON_ = function (arg) {
      if (typeof arg !== 'string') {
        return false;
      }

      try {
        arg = JSON.parse(arg);
        return true;
      } catch (err) {
        return false;
      }
    };

    SlackClient.prototype.fetch_ = function (url, options) {
      var contents = UrlFetchApp.fetch(url, {
        method:             options.method,
        muteHttpExceptions: true,
        contentType:        'application/json; charset=utf-8',
        headers:            this.headers,
        payload:            JSON.stringify(options.payload) || {}
      }).getContentText();

      if (!this.isJSON_(contents)) {
        return contents;
      }

      return JSON.parse(contents);
    };

    return SlackClient;
  })();

  return global.SlackClient = SlackClient;
})(this);
