import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-700 text-white text-center py-8">
            <div className="max-w-6xl mx-auto px-5">
                <p>&copy; {new Date().getFullYear()} suu3. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
