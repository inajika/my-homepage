# CLAUDE.md
プロジェクト概要については @README を参照し、このプロジェクトで利用可能な npm コマンドについては @package.json を参照してください。

## コーディング規約
- CommonJS (require) ではなく ES modules (import / export) を使う。
  - `src/` 配下にある module の import は `@/` 始まりで指定する。
- コメントは意図や経緯 (WHY) がわかるように書く。
