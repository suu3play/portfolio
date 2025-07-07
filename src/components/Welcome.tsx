import React from 'react';
import './Welcome.css';

const Welcome: React.FC<{ visible: boolean }> = ({ visible }) => (
    <div className={`welcome-overlay ${visible ? 'fade-in' : 'fade-out'}`}>
        <div className="welcome-message">
            こんにちは、suu3と言います。
            <br />
            興味を持っていただきありがとうございます。
        </div>
    </div>
);

export default Welcome;
