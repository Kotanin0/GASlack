var GASlack_ = function(webhookUrl) {
  this.webhookUrl = webhookUrl;
  this._json = {
    text: 'test',
    username: 'test user',
    icon_emoji: ':full_moon_with_face:'
  };
  this._options = {};
}

GASlack_.prototype.profile = function(username, icon) {
  this._json.username = username || '';
  this._json.icon_emoji = icon || '';
  return this;
}

GASlack_.prototype.message = function(msg) {
  this._json.text = msg || this._json.text;
  return this;
}

GASlack_.prototype.send = function() {
  var options = {
    'method' : 'post',
    'contentType' : 'application/json',
    'payload' : JSON.stringify(this._json)
  };

  UrlFetchApp.fetch(this.webhookUrl, options);
}

/*
* initialize Slack
*
* @param {String} webhook Url from Slack
* @return {object} initialized Slack
*/
function init(webhookUrl) {
    return new GASlack_(webhookUrl);
}
