export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * 連絡フォームのバリデーション
 */
export const validateContactForm = (data: ContactFormData): ValidationResult => {
  const errors: string[] = [];

  // 名前のバリデーション
  if (!data.name.trim()) {
    errors.push('お名前を入力してください。');
  } else if (data.name.trim().length < 2) {
    errors.push('お名前は2文字以上で入力してください。');
  } else if (data.name.trim().length > 50) {
    errors.push('お名前は50文字以内で入力してください。');
  }

  // メールアドレスのバリデーション
  if (!data.email.trim()) {
    errors.push('メールアドレスを入力してください。');
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push('有効なメールアドレスを入力してください。');
    } else if (data.email.trim().length > 254) {
      errors.push('メールアドレスが長すぎます。');
    }
  }

  // メッセージのバリデーション
  if (!data.message.trim()) {
    errors.push('メッセージを入力してください。');
  } else if (data.message.trim().length < 10) {
    errors.push('メッセージは10文字以上で入力してください。');
  } else if (data.message.trim().length > 1000) {
    errors.push('メッセージは1000文字以内で入力してください。');
  }

  // スパム対策：簡易チェック
  const spamPatterns = [
    /https?:\/\/[^\s]+/gi, // URL含有チェック
    /(.)\1{4,}/gi, // 同じ文字の5回以上連続
  ];

  const fullText = `${data.name} ${data.email} ${data.message}`.toLowerCase();
  
  for (const pattern of spamPatterns) {
    if (pattern.test(fullText)) {
      errors.push('不適切な内容が検出されました。内容を見直してください。');
      break;
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * リアルタイムバリデーション（フィールド単位）
 */
export const validateField = (fieldName: keyof ContactFormData, value: string): string | null => {
  switch (fieldName) {
    case 'name':
      if (!value.trim()) return null; // 空の場合は何も表示しない
      if (value.trim().length < 2) return 'お名前は2文字以上で入力してください。';
      if (value.trim().length > 50) return 'お名前は50文字以内で入力してください。';
      return null;

    case 'email':
      if (!value.trim()) return null;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value.trim())) return '有効なメールアドレスを入力してください。';
      if (value.trim().length > 254) return 'メールアドレスが長すぎます。';
      return null;

    case 'message':
      if (!value.trim()) return null;
      if (value.trim().length < 10) return 'メッセージは10文字以上で入力してください。';
      if (value.trim().length > 1000) return 'メッセージは1000文字以内で入力してください。';
      return null;

    default:
      return null;
  }
};

/**
 * 文字数カウント用ヘルパー
 */
export const getCharacterCount = (text: string, maxLength: number) => {
  const currentLength = text.length;
  const remaining = maxLength - currentLength;
  
  return {
    current: currentLength,
    max: maxLength,
    remaining,
    isOverLimit: remaining < 0,
    isNearLimit: remaining <= maxLength * 0.1 // 90%以上使用時
  };
};