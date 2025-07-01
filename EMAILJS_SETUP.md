# EmailJS設定ガイド

## 🚀 EmailJS設定手順

### 1. アカウント作成
1. https://www.emailjs.com/ にアクセス
2. 「Sign Up」でアカウント作成
3. メール認証を完了

### 2. Email Service設定
1. ダッシュボードで「Add New Service」
2. Gmail、Outlook、またはその他のサービスを選択
3. 認証情報を入力して連携

### 3. Email Template作成
1. 「Email Templates」→「Create New Template」
2. 以下のテンプレート変数を設定：
   ```
   件名: {{from_name}}様からのお問い合わせ
   
   本文:
   お名前: {{from_name}}
   メールアドレス: {{from_email}}
   
   メッセージ:
   {{message}}
   
   ---
   このメールは{{to_name}}のポートフォリオサイトから送信されました。
   ```

### 4. 環境変数設定
1. EmailJSダッシュボードで以下の情報を取得：
   - Service ID
   - Template ID  
   - Public Key (Account → Public Key)

2. `.env.local`ファイルを更新：
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

### 5. 動作確認
1. 開発サーバーを再起動: `npm run dev`
2. コンタクトフォームからテスト送信
3. 設定したメールアドレスに送信されることを確認

## 🔧 トラブルシューティング

### "The Public Key is invalid"エラー
- Public Keyが正しく設定されているか確認
- 環境変数名が`VITE_`で始まっているか確認
- 開発サーバーを再起動

### メールが届かない場合
- スパムフォルダを確認
- EmailJS使用制限（無料プランは月300通）を確認
- Template設定を再確認

## 📊 現在の状態

- ✅ フォーム機能：動作中
- ✅ バリデーション：動作中  
- ✅ デモモード：動作中
- ❌ 実際のメール送信：要設定

EmailJS設定完了まで、デモモードで動作します。