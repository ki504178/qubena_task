# Qubena職能課題

## 動作確認手順

### 前提条件

- Mac
- リポジトリをcloneしている
- homebrewがインストールされている
  1. `brew install mise`
  2. リポジトリをクローンしたフォルダの直下で`mise install`

### 手順

- ローカル開発環境
  1. `pnpm dev`
  2. [http://localhost:3000/teachers](http://localhost:3000/teachers)にアクセス
- Storybook
  1. `pnpm sb`
  2. [http://localhost:6006](http://localhost:6006/)にアクセス

## アーキテクチャ選定理由

[アーキテクチャ選定理由](./docs/architecture.md)を参照

## Appendix

### MSWを利用してAPIリクエストをモックしなかった理由

公式ドキュメントや、実務の実装を参考にしながら実装してみたが、
なぜかうまく効かず時間がかかりそうであったため断念。

### MSWを利用してやりたかったこと

- Storybookで、データ数が多い場合・該当データなし・ローディング中などをStoryとして表現
- Vitestで詳細なユースケースや、カスタムフックのテスト実装
