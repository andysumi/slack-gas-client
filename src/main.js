/**
 * Slack Clientのインスタンスを作成する
 * @param {String} token 【必須】APIアクセストークン
 * @return {SlackClient} Slack Clientのインスタンス
 */
function create(token) { // eslint-disable-line no-unused-vars
  return new SlackClient(token);
}

/**
 * APIの認証をチェックする
 * https://api.slack.com/methods/auth.test
 * @return {Object} 実行結果
 */
function authTest() { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Incomming Webhooks等を使ってメッセージを送信する
 * @param {String} url 【必須】Incomming WebhooksやResponse URL等のURL
 * @param {Object} params 【必須】メッセージの内容
 * @return {Object} 実行結果
 */
function postMessageToUrl(url, params) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * ダイアログを表示する
 * https://slack.com/api/dialog.open
 * @param {String} triggerId 【必須】トリガーのリクエストに含まれるtrigger_id
 * @param {Object} dialog 【必須】ダイアログの内容
 * @return {Object} 実行結果
 */
function openDialog(triggerId, dialog) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * クエリに一致するメッセージを検索する
 * https://api.slack.com/methods/search.messages
 * @param {String} query 【必須】クエリ、検索条件
 * @param {Object} options 【任意】オプション ※ドキュメント参照
 * @return {Object} 実行結果
 */
function searchMessage(query, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
