# フロントエンド開発スタートキット

メタ言語（EJS、Sass(SCSS)、TypeScript）のコンパイル環境です。画像も圧縮します。

[GitHub Pages](https://ryo-i.github.io/front-end-getting-sterted/dest/)


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

フォルダに移動
```sh
$ cd front-end-getting-sterted
```

パッケージのインストール
```sh
$ npm install
```
「node_modules」フォルダが作られる


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

GitHub上の新規にコミットする場合は`git remote`コマンドで紐付け
```sh
$ git remote add origin https://github.com/ユーザ名/リポジトリ名.git
```


## 参考

[メタ言語まとめ（Qiita）](https://qiita.com/i-ryo/items/fa8383432fedb5dfc764)

[サンプル（GitHub）](https://github.com/ryo-i/frontendMetaLanguage)

[サンプル（GitHub Pages）](https://ryo-i.github.io/frontendMetaLanguage/dest/)