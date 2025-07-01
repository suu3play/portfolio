# 📋 suu3 Portfolio Website

業務効率化と現場課題解決に特化したエンジニアのポートフォリオサイトです。

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.10-teal)

## 🚀 特徴

### ✨ 機能一覧
- **📱 レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- **🌙 ダークモード** - システム設定連動 + 手動切り替え
- **📧 お問い合わせフォーム** - EmailJS連携による実際のメール送信
- **🔍 バリデーション** - リアルタイム入力検証
- **🎨 モダンUI** - Tailwind CSS v4 + CSS Variables
- **⚡ 高性能** - Vite + React 18 + TypeScript

### 🎯 技術スタック
- **フロントエンド**: React 18.3.1 + TypeScript 5.6.2
- **ビルドツール**: Vite 6.0.0
- **スタイリング**: Tailwind CSS v4.1.10
- **メール送信**: EmailJS
- **開発ツール**: ESLint + Prettier
- **デプロイ**: 対応予定

## 🛠️ セットアップ

### 前提条件
- Node.js 18.0.0 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/suu3play/portfolio.git
cd portfolio

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 環境変数設定

```bash
# .env.local ファイルを作成
cp .env.local.example .env.local

# EmailJS設定（任意）
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**📧 EmailJS設定について**:
- 設定しない場合はデモモードで動作
- 実際のメール送信には [EmailJS設定ガイド](./EMAILJS_SETUP.md) を参照

## 📁 プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── About.tsx       # 自己紹介セクション
│   ├── Contact.tsx     # お問い合わせフォーム
│   ├── Header.tsx      # ヘッダー + ナビゲーション
│   ├── Hero.tsx        # メインビジュアル
│   ├── Projects.tsx    # プロジェクト紹介
│   ├── Services.tsx    # サービス内容
│   ├── Skills.tsx      # スキル一覧
│   ├── ThemeToggle.tsx # ダークモード切り替え
│   └── Toast.tsx       # 通知コンポーネント
├── hooks/              # カスタムフック
│   └── useTheme.ts     # テーマ管理フック
├── services/           # 外部サービス連携
│   └── emailService.ts # EmailJS連携
├── utils/              # ユーティリティ
│   └── validation.ts   # バリデーション関数
├── data/               # 静的データ
│   └── portfolio.ts    # ポートフォリオデータ
├── types/              # TypeScript型定義
│   └── index.ts        # 型定義
└── App.tsx             # メインアプリケーション
```

## 🎨 主要機能詳細

### ダークモード
- **自動検出**: システムの`prefers-color-scheme`に対応
- **手動切り替え**: ヘッダーのトグルボタン
- **永続化**: LocalStorageで設定保存
- **アニメーション**: スムーズなテーマ切り替え

### お問い合わせフォーム
- **リアルタイムバリデーション**: 入力中に即座に検証
- **文字数制限**: 各フィールドの制限表示
- **スパム対策**: 基本的な不正入力検出
- **Toast通知**: 成功・エラーメッセージ表示
- **EmailJS連携**: 実際のメール送信機能

### レスポンシブデザイン
- **モバイルファースト**: スマートフォン最適化
- **ブレークポイント**: sm/md/lg/xl対応
- **タッチ対応**: タップ・スワイプ操作

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# ESLint実行
npm run lint

# TypeScript型チェック
npm run type-check
```

## 📝 カスタマイズ

### 個人情報の変更
`src/data/portfolio.ts` で以下を編集：
- 連絡先情報
- SNSリンク
- スキル・経験
- プロジェクト一覧

### デザインの変更
`src/index.css` で以下をカスタマイズ：
- カラーテーマ
- フォント設定
- アニメーション

### EmailJS設定
詳細は [EmailJS設定ガイド](./EMAILJS_SETUP.md) を参照

## 🐛 トラブルシューティング

### よくある問題

**Q: メール送信でエラーが出る**
A: EmailJS設定を確認するか、デモモードで動作させてください

**Q: ダークモードが動作しない**
A: ブラウザの開発者ツールでCSS Variablesの読み込みを確認

**Q: ビルドエラーが発生する**
A: `npm install` で依存関係を再インストール

## 📄 ライセンス

MIT License

## 🤝 貢献

プルリクエストや Issue の報告を歓迎します。

## 📞 お問い合わせ

- **ポートフォリオ**: [サイトURL]
- **GitHub**: [suu3play](https://github.com/suu3play)
- **Email**: お問い合わせフォームをご利用ください

---

**⭐ このプロジェクトが役に立った場合は、ぜひスターをお願いします！**