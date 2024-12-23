# Contribution Guide
開発についての指針です。

## コードを修正するには
### 開発環境をつくる
必要な開発環境は[README.md](../README.md#開発環境)を見てください。

### 開発環境向けの環境変数を設定する
開発には環境変数の設定も必要です。

詳細は[README.md](../README.md#環境変数)を見てください。

### Issueをつくる
Issueの作成は任意です。

バグ報告、機能改善のテンプレートを用意していますが、その利用も任意です。

### 作業用ブランチをつくる
開発は作業用ブランチで実施してください。

#### MUST
`develop`ブランチから作成してください。

#### RECOMMENDED
厳密なブランチ名の命名規則は**ありません**。

が、`feature/`をプレフィックスにすることをおすすめしています。

#### ブランチ作成のためのコマンド例
```bash
git switch develop
git pull origin develop
git switch -c feature/foo-bar
```

### 作業用ブランチをプッシュする
リモートリポジトリにプッシュするときには、コードチェック、動作確認を行ってください。

なお、コードチェックは[biome](https://biomejs.dev/ja/)を利用しています。

#### コードチェックコマンド
```bash
npm run lint
```

#### 開発アプリ起動コマンド
```bash
npm run dev
```

#### ビルドコマンド
```bash
npm run build
```

#### プレビューコマンド
```bash
npm run preview
```

#### E2Eテストコマンド
※必ず[ビルド](#ビルドコマンド)を実施してから下記コマンドを実行します。
```bash
npm run e2e
```

### Pull Requestをつくる
`MUST`を守っていただいている限りは、自由に書いていただいてかまいません。

#### MUST
`develop`へのPull Requestを作成してください。

### 作業用ブランチが`develop`ブランチにマージされたら
原則、作業用ブランチを削除しています。

### デプロイ
GitHub Actionsで実施しています。

実施タイミングは以下のとおりです。

#### 検証環境デプロイ
`develop`ブランチにマージされたとき

#### 本番環境デプロイ
`master`ブランチにマージされたとき
