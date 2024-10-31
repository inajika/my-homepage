# イナジカ.com
[イナジカ.com](https://inajika.com)のソースコード

## 開発環境
- Docker
- VSCode
  - Dev Containersを利用しています。

## 技術スタック
このサイトは、JAMStackで構築しています。
- ヘッドレスCMS
  - Contentful
- 静的サイトジェネレータ
  - Astro (TypeScript)
- ホスティング
  - Cloudflare Pages

## 環境変数
`.env.sample`をコピーして`.env`を同じディレクトリに作成します。

- `TZ`
  - タイムゾーン
- `NODE_ENV`
  - 実行環境
    - 本番環境→`production`
    - 開発環境→`development`
- `CONTENTFUL_SPACE_ID`
  - ContentfulのスペースID
- `CONTENTFUL_TOKEN`
  - ContentfulのAPIトークン
    - 本番環境→Content Delivery APIのトークン
    - 開発環境→Content Preview APIのトークン

# ローカル開発環境のNode.jsバージョンアップ
dependabotによりアップデートのプルリクエストが作成されます。
Dockerfileを修正するときは`.node-version`も修正してください。

---
```docker
FROM node:x.y.z-slim
```
となっているとき、`.node-version`は
```
x.y.z
```
と修正します。

# ローカル開発環境でのアプリ起動コマンド
```bash
$ npm run dev
```

## アイコン
- [heroicons](https://github.com/tailwindlabs/heroicons)
- [Font Awesome](https://fontawesome.com/)

## 自動デプロイをスキップする
コミットメッセージの**先頭**に
- `[CI Skip]`
- `[CI-Skip]`
- `[Skip CI]`
- `[Skip-CI]`
- `[CF-Pages-Skip]`

をつける

[参考](https://developers.cloudflare.com/pages/configuration/git-integration/#skipping-a-specific-build-via-a-commit-message)
