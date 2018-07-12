/**
 * Slack Clientのインスタンスを作成する
 * @param {String} token 【必須】APIアクセストークン
 * @return {SlackClient} Slack Clientのインスタンス
 */
function create(token) { // eslint-disable-line
  return new SlackClient(token);
}
