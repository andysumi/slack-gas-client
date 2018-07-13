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

/**
 * Incomming Webhooks等を使ってメッセージを送信する
 * @param {String} url 【必須】Incomming WebhooksやResponse URL等のURL
 * @param {Object} params 【必須】メッセージの内容
 * @return {Object} 実行結果
 */
function postMessageToUrl(url, params) { // eslint-disable-line
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * ダイアログを表示する
 * https://slack.com/api/dialog.open
 * @param {String} triggerId 【必須】トリガーのリクエストに含まれるtrigger_id
 * @param {Object} dialog 【必須】ダイアログの内容
 * @return {Object} 実行結果
 */
function openDialog(triggerId, dialog) { // eslint-disable-line
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
