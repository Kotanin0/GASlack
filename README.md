# GASからSlackに簡単にメッセージ送信！ライブラリGASlackを自作してみた！

記事はこちら：<https://www.kotanin0.work/entry/2020/02/05/210000>

## つかいかた
使い方はシンプル。  
{code}
GASlack
 .init('https://hooks.slack.com/services/hoge/fuga/piyo')
 .profile('妖精さん', ':male_fairy:')
 .message('ありのままでいいのかな？')
 .send();
{/code}

### .init(webhookUrl)
GASlackインスタンスを生成します。  
生成時に引数でwebhookUrlを渡します。  
Slack側であらかじめwebhookUrlを取得しておきましょう。  

### .profile(name, icon)
Slackに表示する表示名、アイコンを指定できます。  
指定しなければ :full_moon_with_face: の test user になります。  

### .message(msg)
Slackに表示するメッセージを指定します。  
何も難しいことはありません、指定するだけです。   

### .send()
これが発火の合図です。  
.send() しない限りSlackへはPOSTされません。  
