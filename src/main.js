/**
 * Slack Clientのインスタンスを作成する
 * @param {String} token 【必須】APIアクセストークン
 * @return {SlackClient} Slack Clientのインスタンス
 */
function create(token) { // eslint-disable-line
  return new SlackClient(token);
}

/**
 * APIの認証をチェックする
 * https://api.slack.com/methods/auth.test
 * @return {Object} 実行結果
 */
function authTest() { // eslint-disable-line
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
