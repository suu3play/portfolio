import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Welcome from './components/Welcome';

const App: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const FADE_START_MS = 1000;
    const FADE_DURATION_MS = 2000;

    useEffect(() => {
        // FADE_START_MS 後にフェードアウト開始
        const timer1 = setTimeout(() => setFadeOut(true), FADE_START_MS);
        // フェードアウト完了後にWelcomeを非表示
        const timer2 = setTimeout(() => setShowWelcome(false), FADE_START_MS + FADE_DURATION_MS);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <>
            {showWelcome && <Welcome visible={!fadeOut} />}
            {!showWelcome && (
                <div className="App">
                    <Header />
                    <Hero />
                    <About />
                    <Skills />
                    <Services />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default App;
