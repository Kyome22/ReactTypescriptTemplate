# ReactTypescriptTemplate

- 静的プロダクトページの雛形
- React, TypeScript, Vite を使って作成
- 国際化対応済み

## 環境

- Node.js (>=24.13.1)
  - [Node と npm をセットアップしたりバージョンアップしたり](https://zenn.dev/kyome/articles/93097dd75dcecb)
- npm (>11.10.0)
  - Node.js をインストールしたら一緒にインストールされるらしい

## 動作確認・ビルド

### 動作確認

ルートディレクトリで

```console
$ npm run dev
```

してブラウザを開いて`http://localhost:3000/`にアクセス

### ビルド

ルートディレクトリで

```console
$ npm run build
```

するとプロジェクト直下に`dist`ディレクトリが自動生成されて必要なものがそこに全部書き出される。`tsc --noEmit`による型チェックの後に`vite build`が走り、js/cssはハッシュ付きで最小化される。

### プレビュー

ビルド成果物をローカルで確認するには

```console
$ npm run preview
```
