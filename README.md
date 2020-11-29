# フロントエンド開発スタートキット

メタ言語（EJS、Sass(SCSS)、TypeScript）のコンパイル環境です。画像も圧縮します。

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
$ git clone https://github.com/ryo-i/frontendMetaLanguage.git
```

フォルダに移動
```sh
$ cd front-end-getting-sterted
```

パッケージのインストール
```sh
npm install
```
「node_modules」フォルダが作られる

## gulpの起動、終了

gulp起動
```
$ npm start
```
localhostの3000でブラウザが立ち上がる

gulpの終了
「Contrl + C」


## 参考

メタ言語まとめ
https://qiita.com/i-ryo/items/fa8383432fedb5dfc764

サンプル
https://github.com/ryo-i/frontendMetaLanguage

プレビュー画面
https://ryo-i.github.io/frontendMetaLanguage/dest/