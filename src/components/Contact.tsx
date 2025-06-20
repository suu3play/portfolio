import React, { useState } from 'react';
import { contactMethods, socialLinks } from '../data/portfolio';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('すべての項目を入力してください。');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('有効なメールアドレスを入力してください。');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('メッセージが送信されました！ありがとうございます。');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title">Contact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              お気軽にお問い合わせください
            </h3>
            <p className="text-gray-600 mb-8">
              新しいプロジェクトや協力の機会について話し合いましょう
            </p>
            
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4">
                  <i className={`${method.icon} text-primary w-5`}></i>
                  <span className="text-gray-600">{method.text}</span>
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
                  className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="お名前"
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="メールアドレス"
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="メッセージ"
                rows={5}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-vertical"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '送信中...' : '送信'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;