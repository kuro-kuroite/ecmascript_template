# ecmascript_template

Webpack, Babel, ESLint, Prettier, lint-staged, watch を使った開発環境構築に必要なファイル群のバックアップ

## Over view

src/js にある ECMA Script を Webpack 経由で dist/index.js にバンドル

## 出来ること

npm scirpt にある機能のみ. 基本的に，`yarn dev:watch` と `yarn deploy` で事足りる

自動的に js ファイルを監視しつつ，コーディング規約に合わせたあと，dist/ 以下に webpack

```bash
yarn dev:watch
```

js ファイルを，dist/ 以下に webpack

```bash
yarn deploy
```

js ファイルをコーディング規約に合わせて, 自動的に修正

```bash
yarn lint:watch
```

<補足> js ファイルをコーディング規約に合わせて修正

```bash
yarn lint
```

## for developer

npm-scripts として，以下のスクリプトを定義すると，自動的に, `yarn dev:watch`, `yarn lint:watch` に組み込まれる

- lint:[language]:fix
  - \[linter]:\*:fix
- lint:[language]:fix:dry
  - \[linter]:\*:fix:dry
