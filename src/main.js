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
 * メッセージを送信する
 * https://api.slack.com/methods/chat.postMessage
 * @param {String} channel 【必須】メッセージを送信するChannelのID もしくは名前
 * @param {String} text 【必須】メッセージのテキスト
 * @param {Object} options 【任意】オプション ※APIドキュメント参照
 * @return {Object} 実行結果
 */
function postMessage(channel, text, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * ユーザーに一時的なメッセージを送信する
 * https://api.slack.com/methods/chat.postEphemeral
 * @param {String} channel 【必須】メッセージを送信するChannelのID もしくは名前
 * @param {String} text 【必須】メッセージのテキスト
 * @param {String} userId 【必須】メッセージを受け取るユーザーのID
 * @param {Object} options 【任意】オプション ※APIドキュメント参照
 * @return {Object} 実行結果
 */
function postEphemeral(channel, text, userId, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * メッセージを更新する
 * https://api.slack.com/methods/chat.update
 * @param {String} channel 【必須】更新するメッセージが送信されたChannelのID もしくは名前
 * @param {String} text 【必須】メッセージのテキスト
 * @param {String} timestamp 【必須】更新するメッセージのタイムスタンプ
 * @param {Object} options 【任意】オプション ※APIドキュメント参照
 * @return {Object} 実行結果
 */
function updateMessage(channel, text, timestamp, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * メッセージを削除する
 * https://api.slack.com/methods/chat.delete
 * @param {String} channel 【必須】削除するメッセージが送信されたChannelのID もしくは名前
 * @param {String} timestamp 【必須】削除するメッセージのタイムスタンプ
 * @param {Object} options 【任意】オプション ※APIドキュメント参照
 * @return {Object} 実行結果
 */
function deleteMessage(channel, timestamp, options) { // eslint-disable-line no-unused-vars
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
function searchMessages(query, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * メッセージのリアクションを取得する
 * https://api.slack.com/methods/reactions.get
 * @param {String} channelId 【必須】リアクションを取得するメッセージが投稿されたチャンネル
 * @param {String} timestamp 【必須】リアクションを取得するメッセージのタイムスタンプ
 */
function getReactionsFromMessage(channelId, timestamp) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
