# イナジカ.com
[イナジカ.com](https://inajika.com)のソースコード

## 開発環境
- Docker
- VSCode
  - Dev Containersを利用しています。
- Git
  - GitHubにアカウントを作成してください。

## 技術スタック
このサイトは、JAMStackで構築しています。
- ヘッドレスCMS
  - Contentful
- 静的サイトジェネレータ
  - Astro (TypeScript)
- ホスティング
  - Cloudflare Pages

## 環境変数
`.devcontainer/.env.sample`をコピーして`.env`を同じディレクトリに作成します。

```bash
cp -i .devcontainer/.env.sample .devcontainer/.env
```

|#|環境変数名|設定するもの|設定例|備考|
|:---:|----|----|----|----|
|1|TZ|タイムゾーン|`Asia/Tokyo`||
|2|NODE_ENV|実行環境種別|`development`|本番環境では`production`<br>開発環境では`development`|
|3|CONTENTFUL_SPACE_ID|ContentfulのスペースID|(省略)||
|4|CONTENTFUL_TOKEN|ContentfulのAPIトークン|(省略)|本番環境ではContent Delivery APIのトークン<br>開発環境ではContent Preview APIのトークン|

## ローカル開発環境でのアプリ起動コマンド
```bash
npm run dev
```

## コードチェックをするコマンド
```bash
npm run lint
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
