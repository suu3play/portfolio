import React, { useState } from 'react';

const Hero: React.FC = () => {
    const fullText = 'こんにちは、suu3と言います';
    const [displayText] = useState(fullText);

    //     useEffect(() => {
    //         let i = 0;
    //         const timer = setInterval(() => {
    //             if (i < fullText.length) {
    //                 setDisplayText(fullText.slice(0, i + 1));
    //                 i++;
    //             } else {
    //                 clearInterval(timer);
    //             }
    //         }, 50);
    //
    //         return () => clearInterval(timer);
    //     }, []);
    //
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            id="home"
            // className="min-h-screen flex items-center pt-20 pb-5 bg-gradient-to-br  from-blue-700 to-purple-600 dark:from-slate-900  dark:to-indigo-900 text-white"
            className="min-h-screen flex items-center pt-20 pb-5"
            style={{
                backgroundImage: 'var(--color-bg-hero)',
            }}
        >
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 max-w-2xl text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                        {displayText}
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up [animation-delay:0.2s]">
                        業務の効率化と現場課題の解決に強い、実務派エンジニア
                    </p>
                    <p className="text-lg mb-8 opacity-80 animate-fade-in-up [animation-delay:0.4s] ">
                        Webシステム開発・業務自動化・API連携を通じて現場の課題を解決します
                    </p>
                    <div className="text-lg font-semibold flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up [animation-delay:0.6s]">
                        <button
                            onClick={() => scrollToSection('services')}
                            className="px-8 py-3 rounded-full transition-all duration-300 ease-out bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 hover:shadow-lg cursor-pointer"
                        >
                            サービスを見る
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 rounded-full transition-all duration-300 ease-out border-1 border-white-600 hover:bg-white hover:text-gray-800 hover:scale-102 hover:shadow-md cursor-pointer"
                        >
                            お問い合わせ
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="w-72 h-72 rounded-full bg-white/10 border-4 border-white/30 animate-y-float flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full bg-white/20 border-2 border-white/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
