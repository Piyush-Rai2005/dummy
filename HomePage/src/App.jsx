import React, { useState } from 'react';
import './App.css';

function App() {
    const [showAbout, setShowAbout] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const toggle = (section) => {
        if (section === 'about') {
            setShowAbout(!showAbout);
        } else if (section === 'login') {
            setShowLogin(!showLogin);
        }
    };

    return (
        <div>
            <div className={`back blur ${showAbout || showLogin ? 'active' : ''}`}>
                <div className="content">
                    <div className="top">
                        <div className="logo">
                            <img src="./logo.jpg" alt="logo" />
                        </div>
                        <div>
                            <p id="home"><a href="#" id="home">Home</a></p>
                        </div>
                        <div>
                            <p id="about"><a href="#" onClick={() => toggle('about')} id="about">About</a></p>
                        </div>
                        <div>
                            <p id="login"><a href="#" onClick={() => toggle('login')} id="login">Login</a></p>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <p id="h1">STUDO-</p>
                    <p id="h2">SPHERE</p>
                </div>
            </div>

            {/* About Section */}
            <div className={`info ${showAbout ? 'active' : ''}`}>
                <p id="aboutsection">
                    Studo-Sphere is a gamified platform that provides different types of activities for students and professors. For a student, it enables them to participate in daily tasks and challenges, submit their assignments before the deadline and get rewards/points for the same. It provides the facility to schedule your daily routine and tracks your progress by comparing yourself with your peers on the leaderboard. As a Professor, it allows them to make announcements, provide assignments/tasks and set the deadline for each and reward students upon completion of the required task. It creates a friendly competition among the students allowing them to push harder towards their goal.
                </p>
                <div className="exit">
                    <a href="#" onClick={() => toggle('about')} id="back">Go Back</a>
                </div>
            </div>

            {/* Login Section */}
            <div className={`loginPage ${showLogin ? 'active' : ''}`}>
                <div className="box">
                    <div className="ele" id="signup">
                        <p className="options">Don't have an account?<br />
                            <a href="#" id="new">SignUp</a>
                        </p>
                    </div>
                    <div className="ele" id="student">
                        <button className="options">Login as Student</button>
                    </div>
                    <div className="ele" id="prof">
                        <button className="options">Login as Professor</button>
                    </div>
                    <div className="exit">
                        <a href="#" onClick={() => toggle('login')} id="back">Go Back</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
