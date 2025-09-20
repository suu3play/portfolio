# Portfolio Website

モダンなReactとTailwindCSSで構築されたレスポンシブポートフォリオサイト

## 🌐 デモサイト

**URL**: https://portfolio-six-plum-94.vercel.app/

## ✨ 機能

### 主要セクション
- **Hero**: アニメーション付きのウェルカムセクション
- **About**: 自己紹介と経歴
- **Skills**: 技術スキルの可視化
- **Services**: 提供可能なサービス一覧
- **Projects**: ポートフォリオ作品の展示
- **Contact**: EmailJS統合のお問い合わせフォーム

### 特徴
- 📱 完全レスポンシブデザイン
- 🎨 ダークモード/ライトモード切り替え
- ⚡ 高速なページロード（Vite使用）
- 📧 リアルタイムお問い合わせフォーム
- 🎭 スムーズなアニメーション効果
- 🔧 TypeScript完全対応

## 🛠️ 技術スタック

### フロントエンド
- **React** 19.1.1 - UIライブラリ
- **TypeScript** 5.9.2 - 型安全性
- **TailwindCSS** 4.1.13 - スタイリング
- **Vite** 7.1.6 - ビルドツール

### 開発ツール
- **ESLint** 9.36.0 - コード品質
- **Prettier** 3.6.2 - コードフォーマット
- **TypeScript ESLint** 8.44.0 - TypeScript専用リント

### 外部サービス
- **EmailJS** 4.4.1 - お問い合わせフォーム機能
- **Vercel** - ホスティング・デプロイ

## 📋 セットアップ手順

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール

1. **リポジトリをクローン**
```bash
git clone https://github.com/suu3play/portfolio.git
cd portfolio
```

2. **依存関係をインストール**
```bash
npm install
```

3. **環境変数を設定**
```bash
cp .env.example .env.local
```

`.env.local`ファイルを編集してEmailJS設定を追加：
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **開発サーバーを起動**
```bash
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

### 利用可能なコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# TypeScript型チェック
npm run type-check

# コードリント
npm run lint
```

## 🚀 デプロイ

### Vercelへのデプロイ

1. **Vercelアカウントを作成** - https://vercel.com

2. **GitHubリポジトリと連携**
   - Vercelダッシュボードで「New Project」を選択
   - GitHubリポジトリを選択

3. **環境変数を設定**
   - Project Settings → Environment Variables
   - EmailJS関連の環境変数を追加

4. **自動デプロイ**
   - mainブランチへのプッシュで自動デプロイ実行

### その他のデプロイオプション
- **Netlify**: `npm run build` → `dist/`フォルダをアップロード
- **GitHub Pages**: GitHub Actionsを使用した自動デプロイ

## 📧 EmailJS設定

お問い合わせフォーム機能を有効にするには、EmailJSの設定が必要です。

**詳細な設定手順**: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)をご参照ください。

### 設定概要
1. EmailJSアカウント作成
2. Email Serviceの設定
3. Email Templateの作成
4. 環境変数の設定
5. 動作確認

## 📁 プロジェクト構成

```
portfolio/
├── public/               # 静的ファイル
├── src/
│   ├── components/       # Reactコンポーネント
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Toast.tsx
│   │   └── Welcome.tsx
│   ├── App.tsx           # メインアプリケーション
│   ├── main.tsx          # エントリーポイント
│   └── index.css         # グローバルスタイル
├── logs/                 # 品質チェックログ
├── EMAILJS_SETUP.md      # EmailJS設定ガイド
├── package.json          # 依存関係とスクリプト
├── tsconfig.json         # TypeScript設定
├── tailwind.config.js    # TailwindCSS設定
└── vite.config.ts        # Vite設定
```

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### コーディング規約
- **Conventional Commits**形式でコミットメッセージを記述
- **ESLint**と**Prettier**の設定に従う
- **TypeScript**の型安全性を維持
- **コンポーネント**は単一責任原則に従って作成

## 📄 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

---

**作成者**: [suu3play](https://github.com/suu3play)
**最終更新**: 2025-09-20