import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
    return (
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
    );
};

export default App;
