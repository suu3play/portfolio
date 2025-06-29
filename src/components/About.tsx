import React from 'react';

const About: React.FC = () => {
    const stats = [
        { number: '10+', label: '年の経験' },
        { number: '10+', label: '完成プロジェクト' },
        { number: '10+', label: '満足した顧客' },
    ];

    return (
        <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto px-5">
                <h2
                    className="text-center text-4xl font-bold mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full after:block"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    About Me
                </h2>
                <div className="text-center">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg mb-6">
                            業務効率化と現場課題の解決に特化したエンジニアです。C#デスクトップアプリからWebシステムへの移行、API連携による電子帳簿保存法対応、Power
                            Automateを活用した業務自動化など、実務に直結するソリューションを提供しています。
                        </p>
                        <p className="text-lg mb-12">
                            要件整理から運用支援まで、非エンジニアの方にも分かりやすい形でシステム開発・改善をサポートしています。定型業務の自動化や帳票処理の効率化を得意としています。
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <span className="block text-4xl font-bold text-primary mb-2">
                                        {stat.number}
                                    </span>
                                    <span className="text-sm" style={{}}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
