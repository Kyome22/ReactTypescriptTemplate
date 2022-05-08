# ReactTypescriptTemplate

- 静的プロダクトページの雛形
- React, TypeScript を使って作成
- 国際化対応済み

## 環境

- Node.js
  - [Node と npm をセットアップしたりバージョンアップしたり](https://zenn.dev/kyome/articles/93097dd75dcecb)
- npm
  - Node.js をインストールしたら一緒にインストールされるらしい

## 動作確認・ビルド

### 動作確認

ルートディレクトリで

```console
$ npm run start
```

してブラウザを開いて`http://localhost:3000/`にアクセス

### ビルド

ルートディレクトリで

```console
$ npm run build
```

するとデスクトップに`dist`ディレクトリが自動生成されて必要なものがそこに全部書き出されるはず。同時に js ファイルは最小化＆難読化されているような気がする。
