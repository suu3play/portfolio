import emailjs from '@emailjs/browser';

// EmailJS設定
const emailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo_service',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo_template', 
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo_key'
};

// EmailJS初期化
emailjs.init(emailJSConfig.publicKey);

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * メール送信機能
 * @param data - 送信するメールデータ
 * @returns 送信結果
 */
export const sendContactEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    // EmailJS設定チェック
    const isConfigValid = emailJSConfig.serviceId !== 'demo_service' && 
                         emailJSConfig.templateId !== 'demo_template' && 
                         emailJSConfig.publicKey !== 'demo_key';
    
    if (!isConfigValid) {
      console.warn('EmailJS configuration is missing. Using demo mode.');
      
      // デモモード（設定が不完全な場合）
      await new Promise(resolve => setTimeout(resolve, 1500));
      return {
        success: true,
        message: 'お問い合わせ内容を確認いたしました。ありがとうございます！\n（現在はデモモードで動作しています）'
      };
    }

    // EmailJSテンプレートパラメータ
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'suu3',
      reply_to: data.email
    };

    // メール送信実行
    const response = await emailjs.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);
    
    return {
      success: true,
      message: 'メッセージが正常に送信されました！ありがとうございます。'
    };

  } catch (error) {
    console.error('Email sending failed:', error);
    
    // エラータイプ別処理
    let errorMessage = '申し訳ございません。メッセージの送信中に問題が発生しました。しばらく経ってから再度お試しください。';

    if (error instanceof Error) {
      if (error.message.includes('The Public Key is invalid')) {
        errorMessage = '現在、お問い合わせ機能の準備中です。申し訳ございませんが、しばらくお待ちください。';
      } else if (error.message.includes('network')) {
        errorMessage = 'インターネット接続に問題があるようです。接続をご確認の上、もう一度お試しください。';
      } else if (error.message.includes('quota')) {
        errorMessage = '一時的に送信が混み合っております。少し時間をおいてから再度お試しいただけますでしょうか。';
      }
    }
    
    return {
      success: false,
      message: errorMessage
    };
  }
};

/**
 * EmailJS設定状況を確認
 */
export const checkEmailJSConfig = (): boolean => {
  return !!(emailJSConfig.serviceId && 
           emailJSConfig.templateId && 
           emailJSConfig.publicKey &&
           emailJSConfig.serviceId !== 'demo_service');
};