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
        message: 'メッセージを受け取りました（デモモード）\n※ 実際のメール送信にはEmailJS設定が必要です'
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
    let errorMessage = 'メッセージの送信に失敗しました。';
    
    if (error instanceof Error) {
      if (error.message.includes('The Public Key is invalid')) {
        errorMessage = 'EmailJS設定エラーです。デモモードで動作しています。\n※ 実際のメール送信には正しい設定が必要です。';
      } else if (error.message.includes('network')) {
        errorMessage = 'ネットワークエラーが発生しました。インターネット接続を確認してください。';
      } else if (error.message.includes('quota')) {
        errorMessage = '送信制限に達しました。しばらく時間をおいてから再度お試しください。';
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