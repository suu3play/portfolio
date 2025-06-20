import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'こんにちは、私はsuu3です';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-5 bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white"
    >
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            {displayText}
            <span className="text-accent">.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up [animation-delay:0.2s]">
            業務の効率化と現場課題の解決に強い、実務派エンジニア
          </p>
          <p className="text-lg mb-8 opacity-80 animate-fade-in-up [animation-delay:0.4s]">
            Webシステム開発・業務自動化・API連携を通じて現場の課題を解決します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up [animation-delay:0.6s]">
            <button
              onClick={() => scrollToSection('services')}
              className="btn btn-primary"
            >
              サービスを見る
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary"
            >
              お問い合わせ
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="w-72 h-72 rounded-full bg-white/10 border-4 border-white/30 animate-float flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-white/20 border-2 border-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;