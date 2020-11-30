# フロントエンド開発スターターキット

メタ言語（EJS、Sass(SCSS)、TypeScript）のコンパイル環境です。画像も圧縮します。

[プレビュー（GitHub Pages）](https://ryo-i.github.io/front-end-getting-sterted/dest/)

[コードの詳細（ブログ）](https://www.i-ryo.com/entry/2020/12/01/082409)

## 全体構成
* `/src`フォルダを修正するとコンパイル実行（ブラウザも更新）
* `/src`フォルダ　-> `/dest`フォルダにコンパイルされる
* `/src/ejs` -> `/dest`直下（`.ejs` -> `.html`）
* `/src/scss` -> `/dest/css`（`.scss` ->`.css`）
* `/src/ts` -> `/dest/js`（`.ts` -> `.js`）
* `/src/img` -> `/dest/img`（`.jpg`,`.jpeg`,`.png`,`.gif`,`.svg`画像を圧縮）
* `/src/json` -> `/src/ejs`, `/src/ts`で読み込み


## 導入

当リポジトリをローカルにクローン
```sh
$ git clone https://github.com/ryo-i/front-end-getting-sterted.git
```
「front-end-getting-sterted」というフォルダが作られる。

フォルダに移動
```sh
$ cd front-end-getting-sterted
```

パッケージのインストール
```sh
$ npm install
```
「node_modules」フォルダが作られる。


## gulpの起動、終了

gulp起動
```sh
$ npm start
```
localhostの3000でブラウザが立ち上がる

gulp終了
```
Contrl + C
```

## 新規リポジトリにコミット

GitHub上の新規リポジトリにコミットする場合は`git remote`コマンドで紐付け
```sh
$ git remote add origin https://github.com/ユーザ名/リポジトリ名.git
```

## 姉妹リポジトリ

### サンプル

本リポジトリ環境のメタ言語を使って作ったWebページ

[コード（GitHub）](https://github.com/ryo-i/frontendMetaLanguage)

[プレビュー（GitHub Pages）](https://ryo-i.github.io/frontendMetaLanguage/dest/)

### Webコーディング スターターキット

本リポジトリのコンパイル後のコードを元に作ったHTML/CSS/JSコーディングの最小環境

[コード（GitHub）](https://github.com/ryo-i/web-coding-getting-sterted)

[プレビュー（GitHub Pages）](https://ryo-i.github.io/web-coding-getting-sterted/)


## 参考

本リポジトリの作成過程、メタ言語について調べたことなど

[メタ言語まとめ（Qiita）](https://qiita.com/i-ryo/items/fa8383432fedb5dfc764)
