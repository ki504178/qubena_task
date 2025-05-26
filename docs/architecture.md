# アーキテクチャ選定理由

Next.jsを採用

- [State of JavaScript 2024](https://www.publickey1.jp/blog/25/state_of_javascript_20241reactnextjs14000.html)でメタフレームワークのシェアは圧倒的にNo.1
- 公開されてから数年以上経っていることもあり、技術的な知見も多く調査などで調べやすい
- エコシステムも充実
- 課題のAPIリクエストはクライアントサイドから直接APIリクエストしているが、
実際の業務だとログイン前提のサービスはサーバサイドからAPIリクエストすることが多い、
その場合でもServer Componentsなどの標準機能で対応できる
- 実務で数年使っていたため知見を活かせる
