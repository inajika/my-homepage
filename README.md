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

```bash
cp -i .devcontainer/.env.sample .devcontainer/.env
```

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

# ローカル開発環境でのアプリ起動コマンド
```bash
$ npm run dev
```

## アイコン
- [heroicons](https://github.com/tailwindlabs/heroicons)
- [Font Awesome](https://fontawesome.com/)

## 自動デプロイをスキップする
コミットメッセージに以下のいずれかをつける
- `[skip ci]`
- `[ci skip]`
- `[no ci]`
- `[skip actions]`
- `[actions skip]`

[参考](https://docs.github.com/ja/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/skipping-workflow-runs)
