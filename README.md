# ReactTypescriptTemplate

- 静的プロダクトページの雛形
- React, TypeScriptを使って作成
- 国際化対応済み 

## 環境

- Node.js
  - [nodenv を使って Mac に Node.js の環境を構築する](https://qiita.com/1000ch/items/41ea7caffe8c42c5211c)
  - [nodebrewからnodenvに乗り換えた](https://qiita.com/mame_daifuku/items/1dbdfbd4897b34df0d9f)
- npm
  - Node.jsをインストールしたら一緒にインストールされるらしい
- yarn
  - [yarnをインストールする](https://qiita.com/suisui654/items/1b89446e03991c7c2c3d)

## 動作確認・ビルド

### 動作確認

ルートディレクトリで

```console
$ yarn start
```

してブラウザを開いて`http://localhost:3000/`にアクセス

### ビルド

ルートディレクトリで

```console
$ yarn build
```

すると`dist`ディレクトリが自動生成されて必要なものがそこに全部書き出されるはず。同時にjsファイルは最小化＆難読化されているような気がする。