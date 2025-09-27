import React, { useState, useCallback } from 'react';
import { contactMethods, socialLinks } from '../data/portfolio';
import { sendContactEmail, checkEmailJSConfig } from '../services/emailService';
import { validateContactForm, validateField, getCharacterCount } from '../utils/validation';
import Toast, { ToastProps } from './Toast';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface FieldErrors {
    name?: string;
    email?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<Omit<ToastProps, 'onClose'> | null>(null);

    // Toast表示用ヘルパー
    const showToast = useCallback((message: string, type: ToastProps['type']) => {
        setToast({ message, type });
    }, []);

    const hideToast = useCallback(() => {
        setToast(null);
    }, []);

    // フォーム入力変更ハンドラー
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const fieldName = name as keyof ContactFormData;
        
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // リアルタイムバリデーション
        const error = validateField(fieldName, value);
        setFieldErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    // フォーム送信ハンドラー
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 全体バリデーション
        const validation = validateContactForm(formData);
        
        if (!validation.isValid) {
            showToast(validation.errors[0], 'error');
            return;
        }

        setIsSubmitting(true);

        try {
            // EmailJS設定確認
            if (!checkEmailJSConfig()) {
                showToast('EmailJS設定を確認中です...デモモードで動作します。', 'info');
            }

            // メール送信実行
            const result = await sendContactEmail(formData);

            if (result.success) {
                showToast(result.message, 'success');
                // フォームリセット
                setFormData({ name: '', email: '', message: '' });
                setFieldErrors({});
            } else {
                showToast(result.message, 'error');
            }

        } catch (error) {
            console.error('Unexpected error:', error);
            showToast('予期しないエラーが発生しました。しばらく後に再度お試しください。', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-center text-4xl font-bold mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full after:block">
                    お問い合わせ
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-semibold text-secondary mb-4">
                            お気軽にお問い合わせください
                        </h3>
                        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                            新しいプロジェクトや協力の機会について話し合いましょう
                        </p>

                        <div className="space-y-4 mb-8">
                            {contactMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <i className={`${method.icon} text-primary w-5`}></i>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>{method.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 hover:rotate-3 hover:shadow-lg transition-all duration-300 ease-out"
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="p-8 rounded-lg shadow-lg"
                        style={{
                            backgroundColor: 'var(--color-card-bg)',
                            boxShadow: '0 4px 6px var(--color-shadow)'
                        }}
                    >
                        {/* お名前フィールド */}
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                                お名前 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="山田 太郎"
                                required
                                className={`w-full p-4 border-2 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 ${
                                    fieldErrors.name ? 'border-red-500' : ''
                                }`}
                                style={{
                                    borderColor: fieldErrors.name ? '#ef4444' : 'var(--color-border)',
                                    backgroundColor: 'var(--color-bg-primary)',
                                    color: 'var(--color-text-primary)'
                                }}
                                maxLength={50}
                            />
                            {fieldErrors.name && (
                                <p className="mt-1 text-sm text-red-500">{fieldErrors.name}</p>
                            )}
                            <div className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                {getCharacterCount(formData.name, 50).current}/50文字
                            </div>
                        </div>
                        {/* メールアドレスフィールド */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                                メールアドレス <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="example@email.com"
                                required
                                className={`w-full p-4 border-2 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 ${
                                    fieldErrors.email ? 'border-red-500' : ''
                                }`}
                                style={{
                                    borderColor: fieldErrors.email ? '#ef4444' : 'var(--color-border)',
                                    backgroundColor: 'var(--color-bg-primary)',
                                    color: 'var(--color-text-primary)'
                                }}
                                maxLength={254}
                            />
                            {fieldErrors.email && (
                                <p className="mt-1 text-sm text-red-500">{fieldErrors.email}</p>
                            )}
                        </div>

                        {/* メッセージフィールド */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                                メッセージ <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="お問い合わせ内容をご記入ください..."
                                rows={5}
                                required
                                className={`w-full p-4 border-2 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-vertical ${
                                    fieldErrors.message ? 'border-red-500' : ''
                                }`}
                                style={{
                                    borderColor: fieldErrors.message ? '#ef4444' : 'var(--color-border)',
                                    backgroundColor: 'var(--color-bg-primary)',
                                    color: 'var(--color-text-primary)'
                                }}
                                maxLength={1000}
                            />
                            {fieldErrors.message && (
                                <p className="mt-1 text-sm text-red-500">{fieldErrors.message}</p>
                            )}
                            <div className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                {getCharacterCount(formData.message, 1000).current}/1000文字
                            </div>
                        </div>

                        {/* 送信ボタン */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all duration-300 ease-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none cursor-pointer flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    送信中...
                                </>
                            ) : (
                                '送信'
                            )}
                        </button>
                    </form>
                </div>

                {/* Toast通知 */}
                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={hideToast}
                    />
                )}
            </div>
        </section>
    );
};

export default Contact;
